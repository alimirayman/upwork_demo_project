<template>
  <div id="app" class="font_primary">
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  @import url('https://fonts.googleapis.com/css?family=Bungee|Raleway:400i,600i');
  @import './static/icons/style.css';

  :root {
    --blue: #7ca7ad;
    --black: #222;
    --transition-fast: all 0.1s ease-in-out;
    --transition-mid: all 0.3s ease-in-out;
  }
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
  a {
    color: inherit;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
  .font {
    &_primary {
      font-family: 'Raleway', sans-serif;
    }
    &_bold {
      font-weight: bold;
    }
    &_display {
      font-family: 'Bungee', cursive;
    }
  }

  .lead {
    font-size: 2rem;
  }
</style>
