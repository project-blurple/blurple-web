<template>
  <div>
    <Header />
    <GetInvolved />
    <Colors />
    <WhosParticipating />
    <WhatIsProjectBlurple />
    <Footer />
  </div>
</template>

<script>
  import Header from '../components/header';
  import GetInvolved from '../components/get_involved';
  import Colors from '../components/colors';
  import WhosParticipating from '../components/whos_participating';
  import WhatIsProjectBlurple from '../components/what_is_project_blurple';
  import Footer from '../components/footer';

  export default {
    components: {
      Header,
      GetInvolved,
      Colors,
      WhosParticipating,
      WhatIsProjectBlurple,
      Footer,
    },
  };
</script>
