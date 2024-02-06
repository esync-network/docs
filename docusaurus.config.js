// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eCredits Docs',
  tagline: 'Learn all about the people\’s currency',
  favicon: 'img/ecs-e-only_small.png',

  // Set the production url of your site here
  url: 'https://docs.ecredits.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'The People\'s SCE', // Usually your GitHub org/user name.
  projectName: 'eCredits', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  scripts: [
    {src: 'https://cdn-cookieyes.com/client_data/318b0858d2d720eaf5cf3afd/script.js'},
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'GTM-53WG5FM',
        },
        googleTagManager: {
          containerId: 'GTM-53WG5FM'
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'eCredits',
          src: 'img/eCredits-Logo-mark.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'eCreditsEcosystem',
            position: 'left',
            label: 'Introduction & Ecosystem',
          },
          {
            type: 'docSidebar',
            sidebarId: 'consumers',
            position: 'left',
            label: 'Consumers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'merchants',
            position: 'left',
            label: 'Merchants',
          },
          {
            type: 'docSidebar',
            sidebarId: 'ambassadors',
            position: 'left',
            label: 'Ambassadors',
          },
          {
            type: 'docSidebar',
            sidebarId: 'validators',
            position: 'left',
            label: 'Validators',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developers',
            position: 'left',
            label: 'Developers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'blockchain101',
            position: 'left',
            label: 'Blockchain 101',
          },
          {
            type: 'docSidebar',
            sidebarId: 'security',
            position: 'left',
            label: 'Security',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tools',
            position: 'left',
            label: 'Tools',
          },
          {
            href: 'https://github.com/esync-network',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} The People's SCE`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  };

module.exports = config;
