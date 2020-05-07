export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
  },
  css: [
    '~/assets/scss/style.scss',
  ],
  generate: {
    fallback: true,
  },
  build: {
    publicPath: './',
  },
};
