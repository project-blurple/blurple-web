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
            For the celebration of Discord's 5th birthday, over <code>{{ members }} thousand members</code> have
            joined the <a
              href="https://projectblurple.com/discord"
              target="_blank"
              rel="noopener"
            >official Project Blurple server</a>, with an amazing <code>{{ blurple }}k Blurple users</code> who updated
            their Discord avatar to use Blurple colors as part of the celebration.
          </p>

          <p>
            Alongside the Blurple users, <code>{{ servers }}+ Discord servers</code> listed themselves as participating
            with their custom Blurple-themed icons in the <a
              href="https://projectblurple.com/discord"
              target="_blank"
              rel="noopener"
            >Project Blurple server</a> to celebrate Discord's 5th birthday.
          </p>

          <p>
            During the 2020 celebration that launched on May 7th and ended on May 14th, members of the <a
              href="https://projectblurple.com/discord"
              target="_blank"
              rel="noopener"
            >official Project Blurple server</a> posted a massive <code>{{ messages }}k+ messages</code>,
            chatting with each other and sharing their love for all things Discord &amp; Blurple.
          </p>

          <p>
            This year {{ donators }} awesome members of the <a
              href="https://projectblurple.com/discord"
              target="_blank"
              rel="noopener"
            >Project Blurple Discord server</a> went above and beyond, donating assorted items and gift codes for the
            massive collection of giveaways that were run.
          </p>

          <p>
            Through the <a
              href="https://projectblurple.com/discord"
              target="_blank"
              rel="noopener"
            >Project Blurple Discord</a> and other partner servers, <code>over {{ artists }} artists</code> contributed
            to our digital pixel-art canvas and <code>{{ painters }}+ members</code> collected paint to enter official
            Project Blurple giveaways.
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
        donators: data.donators.toLocaleString(),
        artists: (Math.floor(data.artists / 10) * 10).toLocaleString(), // 123 => 120
        painters: (Math.floor(data.painters / 10) * 10).toLocaleString(), // 123 => 120
      };
    },
  };
</script>
