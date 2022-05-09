<template>
  <section class="section" id="whos-participating">
    <div class="container">
      <div class="columns">
        <div class="column is-three-quarters is-full-tablet">
          <h1 class="title">
            Who's participating
          </h1>

          <p>
            Anyone and everyone can participate in Project Blurple, and many already have!
          </p>

          <p v-if="members && blurple">
            For the celebration of Discord's {{ birthday }}{{ ordinal(birthday) }} birthday, over <code>{{ members }}
              thousand members</code> {{ active ? 'have already joined' : 'joined' }} the <a
              href="https://discord.gg/qEmKyCf"
              target="_blank"
              rel="noopener"
            >official Project Blurple server</a>, chatting with each other and sharing their love for all things
            Discord &amp; Blurple. An amazing <code>{{ blurple }} Blurple users</code> have dived right in to the event,
            updating their Discord avatar to use Blurple colors as part of the celebration.
          </p>

          <p v-if="servers">
            Alongside the Blurple users, <code>{{ servers }}+ Discord servers</code> listed themselves as participating
            with their custom Blurple-themed icons in the <a
              href="https://discord.gg/qEmKyCf"
              target="_blank"
              rel="noopener"
            >Project Blurple server</a> to celebrate Discord's {{ birthday }}{{ ordinal(birthday) }} birthday.
          </p>

          <p v-if="donators">
            This year, {{ donators }} awesome members of the <a
              href="https://discord.gg/qEmKyCf"
              target="_blank"
              rel="noopener"
            >Project Blurple Discord server</a>
            {{ active ? 'have gone above and beyond so far' : 'went above and beyond' }}, donating assorted items, games
            and gift codes for the massive collection of giveaways that {{ active ? 'are being run' : 'were run' }}
            throughout the celebration.
          </p>

          <p v-if="artists && painters">
            Through the <a
              href="https://discord.gg/qEmKyCf"
              target="_blank"
              rel="noopener"
            >Project Blurple Discord</a> and other partner servers, <code>over {{ artists }} artists</code>
            {{ active ? 'have already contributed' : 'contributed' }} to our digital pixel-art canvas and
            <code>{{ painters }}+ members</code> {{ active ? 'have collected' : 'collected' }} paint to enter official
            Project Blurple giveaways.
          </p>

          <p v-if="adventurers">
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
        members: '...',
        blurple: '...',
        servers: '...',
        donators: '...',
        artists: '...',
        painters: '...',
        adventurers: '...',
      };
    },
    async fetch () {
      // Fetch the stats
      const resp = await fetch(process.env.statsUrl);
      if (!resp.ok) {
        const text = await resp.text().catch(() => '');
        throw new Error(`Failed to fetch stats: ${resp.status} ${resp.statusText} - ${text}`);
      }

      // Parse JSON and translate to useful data
      const data = await resp.json();
      this.$data.members = data.members && Math.round(data.members / 1000).toLocaleString(); // 12345 => 12
      this.$data.blurple = data.blurple && (
        data.blurple > 2000
          ? (Math.round(data.blurple / 100) / 10).toLocaleString() + 'k' // 1234 => 1.2k
          : (
            data.blurple < 10
              ? data.blurple.toLocaleString()
              : (Math.floor(data.blurple / 10) * 10).toLocaleString() + '+' // 123 => 120+
          )
      );
      this.$data.servers = data.servers && (
        data.servers < 10
          ? data.servers.toLocaleString()
          : (Math.floor(data.servers / 10) * 10).toLocaleString() // 123 => 120
      );
      this.$data.donators = data.donators && data.donators.toLocaleString();
      this.$data.artists = data.artists && (
        data.artists < 10
          ? data.artists.toLocaleString()
          : (Math.floor(data.artists / 10) * 10).toLocaleString() // 123 => 120
      );
      this.$data.painters = data.painters && (
        data.painters < 10
          ? data.painters.toLocaleString()
          : (Math.floor(data.painters / 10) * 10).toLocaleString() // 123 => 120
      );
      this.$data.adventurers = data.adventurers && (
        data.adventurers < 10
          ? data.adventurers.toLocaleString()
          : (Math.floor(data.adventurers / 10) * 10).toLocaleString() // 123 => 120
      );
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
    fetchOnServer: false,
    methods: {
      ordinal,
    },
  };
</script>
