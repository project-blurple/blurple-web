<template>
  <div>
    <Header />
    <GetInvolved />
    <Colors />
  </div>
</template>

<script>
  import Header from '../components/header.vue';
  import GetInvolved from '../components/get_involved.vue';
  import Colors from '../components/colors.vue';

  export default {
    components: {
      Header,
      GetInvolved,
      Colors,
    },
  };
</script>
