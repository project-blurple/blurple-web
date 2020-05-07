<template>
  <div>
    <Header></Header>
    <div class="container">
      <p>Hello</p>
    </div>
  </div>
</template>

<script>
  import Header from '../components/header.vue'

  export default {
    components: {
      Header
    }
  }
</script>

<style>
  html,
  body {
    margin: 0;
    min-height: 100vh;
  }
</style>
