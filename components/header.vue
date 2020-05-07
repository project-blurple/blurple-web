<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <article class="media">
          <div class="media-content">
            <h1 class="title">
              Project Blurple
            </h1>
            <h2 class="subtitle">
              Celebrating Discord's 5th Birthday!
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
  export default {
    name: 'Header',
    data () {
      return {
        icon: 1,
      };
    },
  };
</script>
