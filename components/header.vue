<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <article class="media">
          <div class="media-content">
            <h1 class="title">
              Project Blurple
            </h1>
            <h2 class="subtitle">
              Celebrating Discord's 5th Birthday!
            </h2>
          </div>
          <div class="media-right">
            <img src="../assets/img/brush.svg" />
          </div>
        </article>
      </div>
    </div>

    <!--<div class="waves">
      <svg viewBox="0 0 120 28">
        <path class="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
        <path class="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
      </svg>
    </div>-->
  </section>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style lang="scss">
  .hero {
    position: relative;
    background-image: url("../assets/img/waves.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom right;

    .media {
      margin: 13rem 0 3.5rem;
      align-items: flex-end;

      .media-content {
        text-align: right;
        text-transform: uppercase;
        margin: 0 0 3.5rem;

        .title,
        .subtitle {
          font-weight: 900;
          font-family: "Uni Sans", sans-serif;
          color: #fff;
        }

        .title {
          font-size: 5rem;
          margin: 0;
        }

        .subtitle {
          font-size: 1.5rem;
        }
      }

      .media-right {
        img {
          height: 13rem;
        }
      }
    }

    .waves {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      svg {
        width: 200%;

        .wave {
          animation: wave 3s linear;
          animation-iteration-count: infinite;

          &:nth-child(1) {
            fill: #4E5D94;
            animation-duration: 5s;
            animation-direction: reverse;
          }

          &:nth-child(2) {
            fill: #7289DA;
            animation-duration: 7s;
          }
        }
      }
    }
  }

  @keyframes wave {
    to {
      transform: translateX(-100%);
    }
  }
</style>
