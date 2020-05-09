<template>
  <section class="section whos-participating">
    <div class="container">
      <div class="columns">
        <div class="column is-three-quarters is-full-tablet">
          <h1 class="title">
            Who's participating
          </h1>

          <p>
            Anyone and everyone can participate in Project Blurple, and many already have!
          </p>

          <p>
            Already, over <code>43 thousand members</code> have joined the official Project Blurple server, with an
            amazing
            <code>4.8k Blurple users</code> who have already updated their Discord avatar to use Blurple colors as part
            of
            the celebration.
          </p>

          <p>
            Alongside the Blurple users, <code>600+ Discord servers</code> have already listed themselves in the Project
            Blurple server with their custom Blurple-themed icons.
          </p>

          <p>
            Since launching the 2020 celebration on May 7th, members of the official Project Blurple server have posted
            a massive <code>215k+ messages</code> so far, chatting with each other and sharing their love for all
            things Discord &amp; Blurple.
          </p>
        </div>
        <div class="column is-one-quarter is-hidden-tablet-only is-hidden-mobile">
          <ServerImages2 />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import ServerImages2 from './images/servers2';

  export default {
    name: 'WhosParticipating',
    components: {
      ServerImages2,
    },
  };
</script>
