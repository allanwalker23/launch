/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.

const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true
  }
]

const miniAppDev = [
  {
    caption: 'UsMiniApp Dever1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true
  }
]

const siteConfig = {
  title: 'Ame Mini-app Components', // Title for your website.
  tagline: 'Plataforma Ame Store',
  url: 'https://ame-miniapp-components.calindra.com.br', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io Tipo URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  anotherTitle: 'Biblioteca de componentes para mini-apps Ame',

  // Used for publishing and more
  projectName: 'ame-store',
  organizationName: 'Ame Digital',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {
      href: 'https://developer.ame.calindra.com.br/docs/definition/',
      label: 'Conceitos'
    },
    {
      href: 'https://ame-miniapp-components.calindra.com.br/docs/introducao/',
      label: 'Mini-App Components'
    },
    {
      href: 'https://super-app-client.calindra.com.br/docs/ame-super-app-client/',
      label: 'Super-App Client'
    },
    {
      href: 'https://ame-app-tools.calindra.com.br/docs/cli/',
      label: 'Ame App Tools'
    },
    {
      href: 'https://serverless.calindra.com.br/docs/backend-definition/',
      label: 'Serverless Backend'
    },
    {
      href: 'https://persistere.calindra.com.br/docs/persistere-lib/',
      label: 'Persistere'
    }
  ],

  // If you have users set above, you add it here:
  users,
  miniAppDev,

  /* path to images for header/footer */

  // headerIcon: 'img/favicon.ico',
  headerIcon: 'img/amelogo.png',
  footerIcon: 'img/logo_ame.png',
  favicon: 'img/logo_ame.png',

  /* Colors for website */
  colors: {
    primaryColor: '#EF3867',
    secondaryColor: '#0091FF'
  },

  bgAme: {
    backgroundImage: 'linear-gradient(-60deg, #FF2D55, #ED0059, #170085)'
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} AME DIGITAL`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default'
  },

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's Name.
  enableUpdateBy: false,

  // Show documentation's last update time.
  enableUpdateTime: false,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  // Desabilitar a exibição do título no Header
  // Desta forma é possível que seja inserida uma imagem e
  // o título oculto
  disableHeaderTitle: true,

  // Algolia Barra de pesquisa
  // A pesquisa através do Algolia somente poderá ser
  // ativada com uma chave. Após a publicação desta página
  // com mais de 70% de conteúdo final responder ao e-mail
  // do suporte da plataforma
  algolia: {
    apiKey: 'cb4c52c6b257583625f0afa268e1cd61',
    indexName: 'calindra',
    appId: 'BH4D9OD16A',
    debug: true,
    placeholder: 'Pesquisar...',
    algoliaOptions: { facetFilters: ['language:en', 'version:VERSION'] } // Optional, if provided by Algolia
  },

  // Habilita a função Scroll To Top
  scrollToTop: false,
  scrollToTopOptions: {
    zIndex: 100
  },

  // Permite exibir o botão para copiar o código
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
    '/js/custom.js'
  ],
  stylesheets: ['/css/code-block-buttons.css', '/css/custom.css']
}

module.exports = siteConfig
