const path = require("node:path");

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
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
    contextualSearch: false, // Enabled by default; only useful for versioned sites.
  },

  colorMode: {
    defaultMode: "dark",
  },
};

/** @type {import('@docusaurus/preset-classic').Options} */
const presetsClassicOptions = {
  docs: {
    sidebarPath: require.resolve("./sidebars.js"),
    editUrl: "https://github.com/jk15162428/hanabi_cn/edit/master/",
  },
  theme: {
    customCss: require.resolve("./src/css/custom.css"),
  },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "H-Group Conventions",
  favicon: "img/favicon.ico",

  url: "https://jk15162428.github.io",
  baseUrl: "/hanabi_cn/",

  organizationName: "hanabi",
  projectName: "hanabi.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  presets: [["classic", presetsClassicOptions]],
  themeConfig,

  // Added fields from vanilla.
  plugins: [path.resolve(__dirname, "image-generator")],
  scripts: [
    {
      src: "https://kit.fontawesome.com/1932a73877.js",
      crossorigin: "anonymous",
    },
    "/js/hotkey.js",
  ],
};

module.exports = config;
