const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Arcus - Messaging',
  url: 'https://messaging.arcus-azure.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/arcus.png',
  organizationName: 'arcus-azure', // Usually your GitHub org/user name.
  projectName: 'Arcus - Messaging', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    image: 'img/arcus.jpg',
    navbar: {
      title: 'Messaging',
      logo: {
        alt: 'Arcus',
        src: 'img/arcus.png',
        srcDark: 'img/arcus.png'
      },
      items: [
        {
          type: 'docsVersionDropdown',

          //// Optional
          position: 'right',
          // Add additional dropdown items at the beginning/end of the dropdown.
          dropdownItemsBefore: [],
          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
          docsPluginId: 'default',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/arcus-azure/arcus.messaging',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Arcus Azure Github',
              href: 'https://github.com/arcus-azure',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Arcus - Messaging maintained by arcus-azure`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['csharp'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
          path: 'preview',
          // Please change this to your repo.
          editUrl:
            'https://github.com/arcus-azure/arcus.messaging/edit/master/docs',
          includeCurrentVersion:process.env.CONTEXT !== 'production',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
