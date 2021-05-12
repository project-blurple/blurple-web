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
            For the celebration of Discord's {{ birthday }}{{ ordinal(birthday) }} birthday, over <code>{{ members }}
              thousand members</code> {{ active ? 'have already joined' : 'joined' }} the <a
              href="https://discord.gg/qEmKyCf"
              target="_blank"
              rel="noopener"
            >official Project Blurple server</a>, with an amazing <code>{{ blurple }} Blurple users</code> who updated
            their Discord avatar to use Blurple colors as part of the celebration.
          </p>

          <p>
            Alongside the Blurple users, <code>{{ servers }}+ Discord servers</code> listed themselves as participating
            with their custom Blurple-themed icons in the <a
              href="https://discord.gg/qEmKyCf"
              target="_blank"
              rel="noopener"
            >Project Blurple server</a> to celebrate Discord's {{ birthday }}{{ ordinal(birthday) }} birthday.
          </p>

          <p>
            <template v-if="active">
              So far, for the {{ year }} celebration that launched on May 7th,
            </template>
            <template v-else>
              During the {{ year }} celebration that launched on May 7th and ended on May 14th,
            </template>
            members of the <a
              href="https://discord.gg/qEmKyCf"
              target="_blank"
              rel="noopener"
            >official Project Blurple server</a> {{ active ? 'have already posted' : 'posted' }} a massive
            <code>{{ messages }}k+ messages</code>, chatting with each other and sharing their love for all things
            Discord &amp; Blurple.
          </p>

          <p>
            This year, {{ donators }} awesome members of the <a
              href="https://discord.gg/qEmKyCf"
              target="_blank"
              rel="noopener"
            >Project Blurple Discord server</a>
            {{ active ? 'have gone above and beyond so far' : 'went above and beyond' }}, donating assorted items, games
            and gift codes for the massive collection of giveaways that {{ active ? 'are being run' : 'were run' }}
            throughout the celebration.
          </p>

          <p>
            Through the <a
              href="https://discord.gg/qEmKyCf"
              target="_blank"
              rel="noopener"
            >Project Blurple Discord</a> and other partner servers, <code>over {{ artists }} artists</code>
            {{ active ? 'have already contributed' : 'contributed' }} to our digital pixel-art canvas and
            <code>{{ painters }}+ members</code> {{ active ? 'have collected' : 'collected' }} paint to enter official
            Project Blurple giveaways.
          </p>

          <p>
            Alongside the celebrations on Discord, more than <code>{{ adventurers }} adventurers</code>
            {{ active ? 'have begun exploring' : 'explored' }} the Project Blurple Minecraft server, travelling across
            the world, building new homes, designing exciting new skins and forging new friendships.
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
  import ordinal from 'ordinal/indicator';
  import data from '../build/data.json';
  import ServerImages2 from './images/servers2';

  export default {
    name: 'WhosParticipating',
    components: {
      ServerImages2,
    },
    data () {
      return {
        active: false,
        birthday: 1,
        year: 2015,
        members: Math.round(data.members / 1000).toLocaleString(), // 12345 => 12
        blurple: data.blurple > 2000
          ? (Math.round(data.blurple / 100) / 10).toLocaleString() + 'k' // 1234 => 1.2k
          : (Math.floor(data.blurple / 10) * 10).toLocaleString() + '+', // 123 => 120
        servers: (Math.floor(data.servers / 10) * 10).toLocaleString(), // 123 => 120
        messages: Math.round(data.messages / 1000).toLocaleString(), // 12345 => 12
        donators: data.donators.toLocaleString(),
        artists: (Math.floor(data.artists / 10) * 10).toLocaleString(), // 123 => 120
        painters: (Math.floor(data.painters / 10) * 10).toLocaleString(), // 123 => 120
        adventurers: (Math.floor(data.adventurers / 10) * 10).toLocaleString(), // 123 => 120
      };
    },
    created () {
      // Decide which birthday year to show
      const now = new Date();
      const end = new Date(`${now.getFullYear()}-05-14T00:00:00-1200`);
      const start = new Date(`${now.getFullYear()}-05-07T10:30:00+0000`);
      this.$data.active = now >= start && now < end;
      this.$data.birthday = now.getFullYear() - 2015 - (now < start ? 1 : 0);
      this.$data.year = now.getFullYear() - (now < start ? 1 : 0);
    },
    methods: {
      ordinal,
    },
  };
</script>
