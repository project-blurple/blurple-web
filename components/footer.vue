<template>
  <footer class="footer section actions-list">
    <div class="container">
      <div class="columns">
        <div class="column is-full is-full-tablet">
          <h1 class="title">
            Where can I find out more?
          </h1>

          <ol>
            <li>
              <p>
                The Project Blurple celebration is based in our official
                <code><a
                  href="https://discord.gg/qEmKyCf"
                  target="_blank"
                  rel="noopener"
                  data-print="discord.gg/qEmKyCf"
                >Project Blurple Discord server</a></code>, join this to get involved and chat with other Blurple users
                participating.
              </p>
            </li>

            <li>
              <p>
                We also have a community subreddit at
                <code><a href="https://www.reddit.com/r/projectblurple" target="_blank" rel="noopener">
                  reddit.com/r/projectblurple</a></code> that you can join, where you can share Blurple images, memories
                from past events and using Discord, as well as anything else you can think of!
              </p>
            </li>

            <li>
              <p>
                Get the latest updates from Project Blurple in your timeline by following
                <code><a href="https://twitter.com/BlurpleProject" target="_blank" rel="noopener">@BlurpleProject</a></code>
                on Twitter. The Project Blurple executive team all have access to this account and share updates about the
                celebrations on it.
              </p>
            </li>
          </ol>
        </div>
        <!-- <div class="column is-one-quarter is-hidden-tablet-only is-hidden-mobile">
          <ServerImages4 />
        </div> -->
      </div>

      <p>
        <small>
          Project Blurple is not affiliated with <a
            href="https://discord.com"
            target="_blank"
            rel="noopener"
            data-print="discord.com"
          >Discord Inc</a>.
          <br>
          &copy; {{ year }} Project Blurple. All rights reserved.
          Created by <a
            href="https://mattcowley.co.uk"
            target="_blank"
            rel="noopener"
            data-print="mattcowley.co.uk"
          >v4</a>.
          <br>
          This website is <a
            href="https://github.com/project-blurple/blurple-web"
            target="_blank"
            rel="noopener"
            data-print="github.com/project-blurple/blurple-web"
          >open-source</a> under the <a
            href="https://github.com/project-blurple/blurple-web/blob/master/LICENSE"
            target="_blank"
            rel="noopener"
          >GPLv3 licence</a>.
        </small>
      </p>
    </div>
  </footer>
</template>

<script>
  // import ServerImages4 from '../components/images/servers4';

  export default {
    name: 'Footer',
    // components: { ServerImages4 },
    data () {
      return {
        year: new Date().getFullYear(),
      };
    },
  };
</script>
