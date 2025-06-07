// @ts-check

import { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";
import path from "path";

import dotenv from "dotenv";

dotenv.config();

const isBlog = process.env.SANDWORM_DOC_TYPE === "blog";
const docsBaseUrl = process.env.SANDWORM_DOCS_BASE_URL ?? "/";
const analaticsKey = process.env.SANDWORM_ANALYTICS_KEY || "";

const config: Config = {
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  title: "Sandworm Documentation",
  tagline: "WormSQL is quite sticky. It attaches to anywhere",
  favicon: "img/favicon.ico",

  url: "https://docs.sandwormlabs.xyz/",
  baseUrl: isBlog ? "/blog/" : docsBaseUrl,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: analaticsKey,
        anonymizeIP: false,
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: path.resolve(__dirname, "./src/css/custom.css"),
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
                sidebarPath: path.resolve(__dirname, "./sidebars.ts"),
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
      title: "Sandw0rm",
      logo: {
        alt: "Your Logo Alt Text",
        src: "img/logo.svg",
      },
      items: [
        ...(isBlog
          ? [
              { to: "/", label: "Blog", position: "left" },
              {
                href: "https://docs.sandwormlabs.xyz/docs",
                label: "Docs",
                position: "right",
              },
            ]
          : [
              {
                to: "quick-start",
                label: "Quick Start",
                position: "left",
                activeBasePath: "quick-start",
              },

              {
                to: "sql-syntax/intro",
                label: "WQL Syntax",
                position: "left",
                activeBasePath: "sql-syntax",
              },

              {
                href: "https://docs.sandwormlabs.xyz/blog",
                label: "Blog",
                position: "right",
              },
            ]),
        {
          href: "https://github.com/Wormsql/Wormsql",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.duotoneDark,
      additionalLanguages: ["rust", "toml"],
    },
    ...(isBlog && {
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Go to docs",
                href: "https://Wormsql.org/docs",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              { label: "Blog", href: "https://docs.sandwormlabs.xyz/blog" },
              { label: "GitHub", href: "https://github.com/Wormsql/Wormsql" },
              { label: "Discord", href: "https://discord.gg/C6TDEgzDzY" },
            ],
          },
          {
            title: "Package",
            items: [
              { label: "crates.io", href: "https://crates.io/crates/Wormsql" },
              { label: "npm", href: "https://www.npmjs.com/package/Wormsql" },
            ],
          },
        ],
      },
    }),
  },
};

export default config;
