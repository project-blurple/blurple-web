<template>
  <section v-if="birthday || seeYouNextYear || seeYouInMay || birthdaySoon" class="section banner">
    <div class="container">
      <h1 v-if="birthday" class="title">
        Happy Birthday, Discord! 🎉🎂
      </h1>
      <h1 v-if="seeYouNextYear" class="title">
        <small>See you next year in May for Discord's birthday!</small>
      </h1>
      <h1 v-if="seeYouInMay" class="title">
        <small>Get ready to celebrate Discord's birthday starting on May 7th!</small>
      </h1>
      <h1 v-if="birthdaySoon" class="title">
        <small>Get involved to celebrate Discord's birthday!</small>
      </h1>
    </div>
  </section>
</template>

<script>
  // Decide what message to show
  const now = new Date();
  const first = new Date(`${now.getFullYear()}-05-13T00:00:00+1400`);
  const last = new Date(`${now.getFullYear()}-05-14T00:00:00-1200`);
  const start = new Date(`${now.getFullYear()}-05-07T10:30:00+0000`);
  const birthday = now >= first && now < last;
  const seeYouNextYear = now >= last;
  const seeYouInMay = now < first && now < start;
  const birthdaySoon = now < first && now >= start;

  export default {
    name: 'Banner',
    data () {
      return {
        birthday,
        seeYouNextYear,
        seeYouInMay,
        birthdaySoon,
      };
    },
  };
</script>
