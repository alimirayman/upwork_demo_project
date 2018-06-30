<template>
  <div class="cover">
    <video autoplay="autoplay" loop muted :poster="poster">
      <source :src="videoSrc" type="video/mp4">
    </video>
    <div class="content d-flex flex-column justify-content-center align-items-center">
      <div class="logo">
        <img :src="logo" alt="">
      </div>
      <nav>
        <ul class="font_display">
          <li v-for="(item, key) in menu" :key="key">
            <a :href="item.url">{{item.name}}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import logo from '../static/images/Logo_neg.svg'
export default {
  name: 'cover',
  props: {
    videoSrc: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      logo,
      menu: [
        { name: 'Programm', url: '#program' },
        { name: 'Lokal', url: '#local' },
        { name: 'Galerie', url: '#galary' },
        { name: 'Tickets', url: '#tickets' },
        { name: 'Kontakt', url: '#kontakt' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .cover {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 100vw;
    min-height: 100vh;
  }
  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background: rgba(0,0,0,0.7);

    .logo img{
      width: 500px;
    }

    nav {
      position: absolute;
      bottom: 6vh;

      ul {
        padding-left: 0;
        font-size: 2rem;

        li {
          background: var(--blue);
          color: #fff;
          display: inline-block;
          padding: 8px;
          transition: var(--transition-fast);

          &:first-child {
            padding-left: 12px;
          }

          &:last-child {
            padding-right: 12px;
          }

          &:hover {
            color: var(--black);
          }
        }
      }
    }
  }
</style>
