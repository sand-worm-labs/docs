// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");

const { env } = require("node:process");
const isBlog = env.GLUESQL_DOC_TYPE === "blog";
const docsBaseUrl = env.GLUESQL_DOCS_BASE_URL ?? "/docs/dev/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  title: "GlueSQL",
  tagline: "GlueSQL is quite sticky. It attaches to anywhere",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://sandworm.xyz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: isBlog ? "/blog/" : docsBaseUrl,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",

      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        pages: false,
        ...(isBlog
          ? {
              docs: false,
              blog: {
                routeBasePath: "/",
                blogTitle: "Sandworm Blog",
                blogDescription: "Sandworm Blog",
                postsPerPage: "ALL",
                blogSidebarTitle: "All posts",
                blogSidebarCount: "ALL",
                showReadingTime: true,
              },
            }
          : {
              docs: {
                sidebarPath: require.resolve("./sidebars.js"),
                routeBasePath: "/",
                remarkPlugins: [require("remark-mdx")],
              },
            }),
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Sandworm",
      logo: {
        alt: "Your Logo Alt Text",
        src: "img/logo.svg",
      },
      items: [
        ...(isBlog
          ? [
              {
                to: "/",
                label: "Blog",
                position: "left",
              },
              {
                href: "https://gluesql.org/docs",
                label: "Docs",
                position: "right",
              },
            ]
          : [
              {
                to: "getting-started/rust",
                position: "left",
                label: "Getting Started",
                activeBasePath: "getting-started",
              },
              {
                to: "sql-syntax/intro",
                position: "left",
                label: "SQL Syntax",
                activeBasePath: "sql-syntax",
              },
              {
                to: "ast-builder/intro",
                position: "left",
                label: "AST Builder",
                activeBasePath: "ast-builder",
              },
              {
                to: "storages/intro",
                position: "left",
                label: "Storages",
                activeBasePath: "storages",
              },
              {
                href: "https://gluesql.org/blog",
                label: "Blog",
                position: "right",
              },
            ]),
        {
          href: "https://github.com/gluesql/gluesql",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ["rust", "toml"],
    },
  },
};

if (isBlog) {
  config.themeConfig = {
    ...config.themeConfig,
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: isBlog
            ? [
                {
                  label: "Go to docs",
                  href: "https://gluesql.org/docs",
                },
              ]
            : [
                {
                  label: "Getting Started",
                  to: "/getting-started/rust",
                },
                {
                  label: "SQL Syntax",
                  to: "/sql-syntax/intro",
                },
                {
                  label: "AST Builder",
                  to: "/ast-builder/intro",
                },
              ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              href: "https://gluesql.org/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/gluesql/gluesql",
            },
            {
              label: "Discord",
              href: "https://discord.gg/C6TDEgzDzY",
            },
          ],
        },
        {
          title: "Package",
          items: [
            {
              label: "crates.io",
              href: "https://crates.io/crates/gluesql",
            },
            {
              label: "npm",
              href: "https://www.npmjs.com/package/gluesql",
            },
          ],
        },
      ],
    },
  };
}

module.exports = config;
