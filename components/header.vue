<template>
  <section class="hero">
    <div :class="`hero-body${countdown ? ' has-countdown' : ''}`">
      <div class="container">
        <div v-if="countdown" class="countdown">
          <p>{{ countdownText }}</p>
        </div>
        <article class="media">
          <div class="media-content">
            <h1 class="title">
              <a href="https://discord.gg/qEmKyCf" target="_blank" rel="noopener">
                Project Blurple
              </a>
            </h1>
            <h2 class="subtitle">
              Celebrating Discord's {{ birthday.toLocaleString() }}{{ ordinal(birthday) }} Birthday!
            </h2>
          </div>
          <div class="media-right">
            <img v-if="icon === 1" src="../assets/img/brush.svg" alt="Project Blurple Paint Brush" @click="icon = 2">
            <img v-if="icon === 2" src="../assets/img/roller.svg" alt="Project Blurple Paint Roller" @click="icon = 1">
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
        countdownDate: null,
        countdown: false,
        countdownText: '',
      };
    },
    created () {
      // Decide which birthday year to show
      const now = new Date();
      const sixMonths = new Date(`${now.getFullYear()}-11-13T00:00:00+0000`);
      this.$data.birthday = now.getFullYear() - 2015 + (now < sixMonths ? 0 : 1);

      // Decide if we should countdown to launch
      const launchDate = new Date(`${now.getFullYear()}-05-07T10:30:00+0000`);
      if (now < launchDate) {
        this.$data.countdownDate = launchDate;
      }

      // Decide if we should countdown to birthday
      const birthdayDate = new Date(`${now.getFullYear()}-05-13T00:00:00+1400`);
      if (now > launchDate && now < birthdayDate) {
        this.$data.countdownDate = birthdayDate;
      }
    },
    mounted () {
      // Do we need to start the countdown
      if (this.$data.countdownDate !== null) {
        this.$data.countdown = true;
        setInterval(this.updateCountdown, 250);
      }
    },
    methods: {
      ordinal,
      pluralize (number, string) {
        return `${number.toLocaleString()} ${string}${number === 1 ? '' : 's'}`;
      },
      updateCountdown () {
        const timeLeft = this.$data.countdownDate - new Date();
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        this.$data.countdownText = [
          days ? this.pluralize(days, 'day') : '',
          days || hours ? this.pluralize(hours, 'hour') : '',
          days || hours || minutes ? this.pluralize(minutes, 'minute') : '',
          days || hours || minutes || seconds ? this.pluralize(seconds, 'second') : '',
        ].filter(x => x.length).join(', ');
      },
    },
  };
</script>
