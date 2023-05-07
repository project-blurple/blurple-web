<template>
  <section class="section error">
    <img src="~/assets/img/outage.svg" alt="!">
    <h1 v-if="error.statusCode === 404" class="title">
      You're lost, go home.
    </h1>
    <h1 v-else class="title">
      Hmm, an error occurred.
    </h1>
    <code><nuxt-link to="/">projectblurple.com</nuxt-link></code>
  </section>
</template>

<script>
  export default {
    props: {
      error: {
        type: Object,
        required: true,
        default: () => ({
          statusCode: 500,
        }),
      },
    },
  };
</script>
