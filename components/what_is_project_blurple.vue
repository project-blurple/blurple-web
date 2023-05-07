<template>
  <section id="what-is-project-blurple" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-full is-full-tablet">
          <h1 class="title">
            What is Project Blurple?
          </h1>

          <!-- <p>
            If you've got this far, you might have some idea, but what exactly is Project Blurple?
          </p> -->

          <blockquote>
            <p>
              Project Blurple is simple at its core, we're here to celebrate Discord's birthday each year with the
              community. We do this by encouraging folks to participate in  <a
                href="https://discord.gg/qEmKyCf"
                target="_blank"
                rel="noopener"
              >our Discord server</a>, chatting, entering giveaways and joining in with any events we run there.
            </p>
          </blockquote>

          <p>
            The other big thing we do is asking those celebrating with us to make their avatars and server icons Blurple
            colored. Blurple is <a
              href="https://discord.com/branding"
              target="_blank"
              rel="noopener"
              data-print="discord.com/branding"
            >Discord's main brand color</a> and by having everyone change their images to use a color scheme based on
            this, we can show our appreciation for Discord outside the <a
              href="https://discord.gg/qEmKyCf"
              target="_blank"
              rel="noopener"
            >Project Blurple server</a>.
          </p>

          <p>
            Discord's birthday is on May 13th, so Project Blurple normally launches roughly a week before to get the
            community hyped and ready to celebrate, with the main partying happening on May 13th. Things wrap up quickly
            after that with the final few giveaways being done in the following couple of days.
            <small>
              (The <a
                href="https://discord.gg/qEmKyCf"
                target="_blank"
                rel="noopener"
              >Project Blurple server</a> is open all year though if you want to have some Blurple fun out of season).
            </small>
          </p>

          <p>
            Project Blurple started in 2018 to celebrate Discord's 3rd birthday and has happened each year since,
            becoming more organised and much larger each year. 2018 saw a massive initial splash with 15,000 Blurple
            users that year and over 3,400 servers participating. 2019 was a bit quieter with only 4k Blurple users and
            just over 400 servers involved.
          </p>

          <p>
            Project Blurple returned once again in 2020 to continue the annual tradition, celebrating Discord's 5th
            birthday with over 60 thousand members in the official server and nearly 9.5k awesome users rocking a
            Blurplefied profile picture. The 2020 birthday celebrations also saw over 890 Discord servers getting
            involved, using Blurplefied versions of the icons and spreading the word.
          </p>

          <p>
            2021 was another wonderful year for Project Blurple, celebrating Discord's 6th birthday in style with other
            71k members in the server for the celebrations, chatting away with over 575k message sent, and nearly 10k of
            those members getting involved by theming their profile picture around the Blurple color. Amazingly, we saw
            over 1.4k Discord servers get involved this year, updating their server icons to use the Blurple color!
          </p>

          <blockquote>
            <p>
              Project Blurple continues to celebrate Discord's birthday every year, with Blurple users all across
              Discord marking themselves as participating with a Blurple themed avatar for {{ year }}!
            </p>
          </blockquote>
        </div>
        <!-- <div class="column is-one-quarter is-hidden-tablet-only is-hidden-mobile">
          <ServerImages3 />
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
  // import ServerImages3 from './images/servers3';

  export default {
    name: 'WhatIsProjectBlurple',
    // components: { ServerImages3 },
    data () {
      return {
        year: 2015,
        // blurple: '...',
      };
    },
    async fetch () {
      /*
      // Fetch the stats
      const resp = await fetch(process.env.statsUrl);
      if (!resp.ok) {
        const text = await resp.text().catch(() => '');
        throw new Error(`Failed to fetch stats: ${resp.status} ${resp.statusText} - ${text}`);
      }

      // Parse JSON and translate to useful data
      const data = await resp.json();
      this.$data.blurple = data.blurple && (
        data.blurple > 2000
          ? (Math.round(data.blurple / 100) / 10).toLocaleString() + 'k' // 1234 => 1.2k
          : (
            data.blurple < 10
              ? data.blurple.toLocaleString()
              : (Math.floor(data.blurple / 10) * 10).toLocaleString() // 123 => 120
          )
      );
      */
    },
    created () {
      // Decide which birthday year to show
      const now = new Date();
      const start = new Date(`${now.getFullYear()}-05-07T10:30:00+0000`);
      this.$data.year = now.getFullYear() - (now < start ? 1 : 0);
    },
    // fetchOnServer: false,
  };
</script>
