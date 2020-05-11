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
            Already, over <code>{{ members }} thousand members</code> have joined the <a
              href="https://projectblurple.com/discord"
              target="_blank"
              rel="noopener"
            >official Project Blurple server</a>, with an amazing <code>{{ blurple }}k Blurple users</code> who have
            already updated their Discord avatar to use Blurple colors as part of the celebration.
          </p>

          <p>
            Alongside the Blurple users, <code>{{ servers }}+ Discord servers</code> have already listed themselves in
            the <a
              href="https://projectblurple.com/discord"
              target="_blank"
              rel="noopener"
            >Project Blurple server</a> with their custom Blurple-themed icons.
          </p>

          <p>
            Since launching the 2020 celebration on May 7th, members of the <a
              href="https://projectblurple.com/discord"
              target="_blank"
              rel="noopener"
            >official Project Blurple server</a> have posted a massive <code>{{ messages }}k+ messages</code> so far,
            chatting with each other and sharing their love for all things Discord &amp; Blurple.
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
  import data from '../build/data.json';
  import ServerImages2 from './images/servers2';

  export default {
    name: 'WhosParticipating',
    components: {
      ServerImages2,
    },
    data () {
      return {
        members: Math.round(data.members / 1000).toLocaleString(), // 12345 => 12
        blurple: (Math.round(data.blurple / 100) / 10).toLocaleString(), // 1234 => 1.2
        servers: (Math.floor(data.servers / 10) * 10).toLocaleString(), // 123 => 120
        messages: Math.round(data.messages / 1000).toLocaleString(), // 12345 => 12
      };
    },
  };
</script>
