import fetchStats from './build/fetch_stats';
const base = 'https://projectblurple.com';
const name = 'Project Blurple';
const desc = 'Celebrating Discord\'s 5th Birthday!';

export default {
  mode: 'universal',
  head: {
    htmlAttrs: { lang: 'en' },
    title: name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'theme-color', content: '#7289DA' },

      { name: 'title', content: name },
      { name: 'description', content: desc },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@blurpleproject' },
      { name: 'twitter:creator', content: '@MattIPv4' },
      { name: 'twitter:title', content: name },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: `${base}/banner.png` },
      { name: 'twitter:image:alt', content: `${name} banner image` },
      { name: 'twitter:url', content: base },

      { name: 'canonicalURL', content: base },

      { prefix: 'og: http://ogp.me/ns#', property: 'og:title', content: name },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:type', content: 'website' },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:locale', content: 'en_GB' },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:site_name', content: name },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:description', content: desc },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:url', content: base },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:image', content: `${base}/banner.png` },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:image:url', content: `${base}/banner.png` },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: `${base}/favicon.png` },
      { rel: 'shortcut-icon', type: 'image/png', href: `${base}/favicon.png` },
      { rel: 'apple-touch-icon', type: 'image/png', href: `${base}/favicon.png` },
      { rel: 'canonical', href: base },
    ],
  },
  loading: { color: '#7289DA' },
  css: [
    '~/assets/scss/style.scss',
  ],
  buildModules: [
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: 'UA-136234667-1',
  },
  generate: {
    fallback: false,
  },
  hooks: {
    build: {
      async before () {
        await fetchStats();
      },
    },
  },
};
