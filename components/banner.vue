<template>
  <section v-if="birthday" class="section banner">
    <div class="container">
      <h1 class="title">
        Happy Birthday Discord! 🎉🎂
      </h1>
    </div>
  </section>
</template>

<script>
  const now = new Date();
  const first = new Date(`${now.getFullYear()}-05-13T00:00:00+1400`);
  const last = new Date(`${now.getFullYear()}-05-14T00:00:00-1200`);

  export default {
    name: 'Banner',
    data () {
      return {
        birthday: now >= first && now < last,
      };
    },
  };
</script>
