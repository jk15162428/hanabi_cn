#!/bin/bash
directory=build
branch=gh-pages
build_command() {
  set -e # Exit on any errors

  # Get the directory of this script
  # https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

  # Install Python dependencies
  pip install -r "$DIR/image-generator/requirements.txt" --quiet

  # Reset the internal SECONDS variable so that we can measure how long validation takes
  # https://stackoverflow.com/questions/16908084/bash-script-to-calculate-time-elapsed
  SECONDS=0

  # Test to see if all of the YAML files are valid
  # (by manually invoking the "create_svg.py" script on every YAML file)
  echo "Testing to see if all of the YAML files are valid..."
  YAML_FILES=$(find "$DIR/image-generator/yml" -name '*.yml' -type f)
  for YAML_FILE in $YAML_FILES; do
    echo $YAML_FILE
    python "$DIR/image-generator/create_svg.py" < "$YAML_FILE" > /dev/null
  done
  echo "All the YAML files are valid. (It took $SECONDS seconds.)"

  # Build the website, which will go into the "build" subdirectory
  cd "$DIR"
  SECONDS=0
  # rm -rf "$DIR/build" no need for this
  npm run build
  echo "Build successful. (It took $SECONDS seconds.)"
}

echo -e "\033[0;32mDeleting old content...\033[0m"
rm -rf $directory

echo -e "\033[0;32mChecking out $branch....\033[0m"
git worktree add $directory $branch

echo -e "\033[0;32mGenerating site...\033[0m"
build_command

echo -e "\033[0;32mDeploying $branch branch...\033[0m"
cd $directory &&
  git add --all &&
  git commit -m "Deploy updates" &&
  git push origin $branch
  
echo -e "\033[0;32mCleaning up...\033[0m"
git worktree remove $directory  