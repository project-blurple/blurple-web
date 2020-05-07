<template>
  <div>
    <Header />
    <GetInvolved />
    <Colors />
    <WhosParticipating />
  </div>
</template>

<script>
  import Header from '../components/header.vue';
  import GetInvolved from '../components/get_involved.vue';
  import Colors from '../components/colors.vue';
  import WhosParticipating from '../components/whos_participating.vue';

  export default {
    components: {
      Header,
      GetInvolved,
      Colors,
      WhosParticipating,
    },
  };
</script>
