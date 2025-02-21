import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "WIKI AZ",
  tagline: "База знаний компании АZ",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.azcompany.ru",
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

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Docs AZ",
      logo: {
        alt: "Docs AZ Logo",
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
          to: "https://wiki.azcompany.ru",
          label: "Wiki azcompany",
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
              label: "Wiki azcompany",
              href: "https://wiki.azcompany.ru/",
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
