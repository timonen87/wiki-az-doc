import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "WIKI AZ",
  tagline: "База знаний компании АZ",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.siteunion.online",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "AZ", // Usually your GitHub org/user name.
  projectName: "AZ", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/timonen87/wiki-az-doc/tree/main/frontend",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/timonen87/wiki-az-doc/tree/main/frontend",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        language: ["en", "ru"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    zoom: {
      selector: ".markdown :not(em) > img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      },
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "WIKI AZ",
      logo: {
        alt: "WIKI AZ Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "База знаний",
        },
        // {to: '/blog', label: 'Блог', position: 'left'},
        {
          to: "https://catalog.azcompany.ru",
          label: "catalog.App",
          position: "left",
        },
        {
          href: "https://github.com/timonen87/wiki-az-doc/tree/main/frontend",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Документиция",
          items: [
            {
              label: "База знаний",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Каталог продукции",
          items: [
            {
              label: "Catalog.AZ",
              href: "https://catalog.azcompany.ru/",
            },
          ],
        },
        {
          title: "Разное",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/timonen87/wiki-az-doc/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wiki OOO AZ.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
