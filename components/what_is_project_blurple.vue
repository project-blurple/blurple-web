<template>
  <section class="section what-is-project-blurple">
    <div class="container">
      <div class="columns">
        <div class="column is-three-quarters is-full-tablet">
          <h1 class="title">
            What is Project Blurple?
          </h1>

          <p>
            If you've got this far, you might have some idea, but what exactly is Project Blurple?
          </p>

          <blockquote>
            <p>
              Project Blurple is simple at its core, we're here to celebrate Discord's birthday each year with the
              community. We do this by encouraging folks to participate in  <a
                href="https://projectblurple.com/discord"
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
              href="https://projectblurple.com/discord"
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
                href="https://projectblurple.com/discord"
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

          <blockquote>
            <p>
              We're back for 2020 and we had yet another amazing event to celebrate Discord's birthday, with over
              {{ blurple }}k Blurple users marking themselves as participating with a Blurple themed avatar this year!
            </p>
          </blockquote>
        </div>
        <div class="column is-one-quarter is-hidden-tablet-only is-hidden-mobile">
          <ServerImages3 />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { blurple } from '../build/data.json';
  import ServerImages3 from './images/servers3';

  export default {
    name: 'WhatIsProjectBlurple',
    components: {
      ServerImages3,
    },
    data () {
      return {
        blurple: (Math.round(blurple / 100) / 10).toLocaleString(), // 1234 => 1.2
      };
    },
  };
</script>
