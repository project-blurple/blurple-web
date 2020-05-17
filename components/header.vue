<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <article class="media">
          <div class="media-content">
            <h1 class="title">
              <a href="https://projectblurple.com/discord" target="_blank" rel="noopener">
                Project Blurple
              </a>
            </h1>
            <h2 class="subtitle">
              Celebrating Discord's {{ birthday.toLocaleString() }}{{ ordinal(birthday) }} Birthday!
            </h2>
          </div>
          <div class="media-right">
            <img v-if="icon === 1" src="../assets/img/brush.svg" @click="icon = 2">
            <img v-if="icon === 2" src="../assets/img/roller.svg" @click="icon = 1">
          </div>
        </article>
      </div>
    </div>

    <!--<div class="waves">
      <svg viewBox="0 0 120 28">
        <path class="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
        <path class="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
      </svg>
    </div>-->
  </section>
</template>

<script>
  import ordinal from 'ordinal/indicator';

  export default {
    name: 'Header',
    data () {
      return {
        icon: 1,
        birthday: 1,
      };
    },
    mounted () {
      const now = new Date();
      const sixMonths = new Date(`${now.getFullYear()}-11-13T00:00:00`);
      this.$data.birthday = now.getFullYear() - 2015 + (now < sixMonths ? 0 : 1);
    },
    methods: {
      ordinal,
    },
  };
</script>
