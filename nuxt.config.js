const baseUrl = 'https://projectblurple.com';
const statsUrl = 'https://project-blurple-api.but-it-actually.works/stats';
const name = 'Project Blurple';
const desc = 'Celebrating Discord\'s Birthday!';
const color = '#5865F2';

export default {
  target: 'static',
  head: {
    htmlAttrs: { lang: 'en' },
    title: name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'theme-color', content: color },

      { name: 'title', content: name },
      { name: 'description', content: desc },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@blurpleproject' },
      { name: 'twitter:creator', content: '@MattIPv4' },
      { name: 'twitter:title', content: name },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: `${baseUrl}/banner.png` },
      { name: 'twitter:image:alt', content: `${name} banner image` },
      { name: 'twitter:url', content: baseUrl },

      { name: 'canonicalURL', content: baseUrl },

      { prefix: 'og: http://ogp.me/ns#', property: 'og:title', content: name },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:type', content: 'website' },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:locale', content: 'en_GB' },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:site_name', content: name },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:description', content: desc },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:url', content: baseUrl },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:image', content: `${baseUrl}/banner.png` },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:image:url', content: `${baseUrl}/banner.png` },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: `${baseUrl}/favicon.png` },
      { rel: 'shortcut-icon', type: 'image/png', href: `${baseUrl}/favicon.png` },
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: `${baseUrl}/favicon.png` },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${baseUrl}/favicon-32x32.png` },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${baseUrl}/favicon-16x16.png` },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: `${baseUrl}/apple-touch-icon.png` },
      { rel: 'manifest', href: `${baseUrl}/site.webmanifest` },
      { rel: 'canonical', href: baseUrl },
    ],
  },
  loading: { color: color },
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
    fallback: true,
  },
  env: {
    baseUrl,
    statsUrl,
  }
};
