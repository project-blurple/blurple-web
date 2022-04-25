<template>
  <section v-if="birthday || seeYouNextYear || seeYouInMay || birthdaySoon" class="section banner">
    <div class="container">
      <h2 v-if="birthday" class="subtitle">
        Happy Birthday, Discord! 🎉🎂
      </h2>
      <h2 v-if="seeYouNextYear" class="subtitle">
        <small>See you next year in May for Discord's birthday!</small>
      </h2>
      <h2 v-if="seeYouInMay" class="subtitle">
        <small>Get ready for birthday celebrations starting May 7th!</small>
      </h2>
      <h2 v-if="birthdaySoon" class="subtitle">
        <small>Get involved to celebrate Discord's birthday!</small>
      </h2>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Banner',
    data () {
      return {
        birthday: false,
        seeYouNextYear: false,
        seeYouInMay: false,
        birthdaySoon: false,
      };
    },
    created () {
      // Decide what message to show
      const now = new Date();
      const first = new Date(`${now.getFullYear()}-05-13T00:00:00+1400`);
      const last = new Date(`${now.getFullYear()}-05-14T00:00:00-1200`);
      const start = new Date(`${now.getFullYear()}-05-07T10:30:00+0000`);
      this.$data.birthday = now >= first && now < last;
      this.$data.seeYouNextYear = now >= last;
      this.$data.seeYouInMay = now < first && now < start;
      this.$data.birthdaySoon = now < first && now >= start;
    },
  };
</script>
