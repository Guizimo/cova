import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Cova',
  description: '现代化的封面设计工具',

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/'
    }
  },

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Features', link: '/guide/features' },
      {
        text: 'Resources',
        items: [
          { text: 'Templates', link: '/resources/templates' },
          { text: 'Examples', link: '/resources/examples' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Quick Start', link: '/guide/quick-start' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        },
        {
          text: 'Features',
          items: [
            { text: 'Cover Design', link: '/guide/cover-design' },
            { text: 'Templates', link: '/guide/templates' },
            { text: 'Export', link: '/guide/export' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/guizimo/cova' }],

    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2024-present Guizimo'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/guizimo/cova/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ]
});
