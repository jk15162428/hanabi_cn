const path = require("path");

module.exports = {
  title: "H-Group约定",
  url: "https://jk15162428.github.io",
  baseUrl: "/hanabi_cn/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hanabi",
  projectName: "hanabi_cn",
  themeConfig: {
    // Vanilla components
    navbar: {
      title: "H-Group约定",
      logo: {
        alt: "H-Group Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/beginner",
          activeBasePath: "docs",
          label: "初学者",
          position: "left",
        },
        {
          to: "docs/learning-path",
          activeBasePath: "docs",
          label: "学习路径",
          position: "left",
        },
        {
          to: "docs/reference",
          activeBasePath: "docs",
          label: "参考",
          position: "left",
        },
        {
          to: "docs/variant-specific",
          activeBasePath: "docs",
          label: "变体相关",
          position: "left",
        },
        {
          href: "https://github.com/jk15162428/hanabi_cn",
          label: "简中Repo",
          position: "right",
        },
        {
          href: "https://github.com/jk15162428/hanabi_cn/issues",
          label: "翻译指错",
          position: "right",
        },
        {
          href: "https://github.com/hanabi/hanabi.github.io/",
          label: "英文Repo",
          position: "right",
        },
        {
          href: "https://github.com/hanabi/hanabi.github.io/issues",
          label: "修改建议",
          position: "right",
        },
      ],
    },

    docs: {
      sidebar: {
        hideable: true,
      },
    },

    // Extra settings
    algolia: {
      appId: "24AGYEOQ7J", // cspell:disable-line
      apiKey: "7e647fd7de142915da9f459b345dfca4",
      indexName: "hanabi-conventions",
      contextualSearch: false, // Enabled by default; only useful for versioned sites
    },

    colorMode: {
      defaultMode: "dark",
    },
  },
  plugins: [path.resolve(__dirname, "image-generator")],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/jk15162428/hanabi_cn/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  scripts: [
    {
      src: "https://kit.fontawesome.com/1932a73877.js",
      crossorigin: "anonymous",
    },
    "/js/hotkey.js",
  ],
};
