// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Features from './components/Features.vue'
import './style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-image': () => h('div', { class: 'image-container' }, [
        h('div', { class: 'image-bg' }),
        h('img', {
          src: '/logo.png',
          class: 'image',
          alt: 'Cova Logo'
        })
      ])
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Features', Features)
  }
} satisfies Theme
