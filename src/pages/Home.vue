<template>
  <div class="home">
    <cover :videoSrc="video" :poster="poster" />
    <!--<router-view></router-view>-->
    <program></program>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  loadComponent,
  loadPage
} from '../helpers/importer'

import video from '@/static/video/sample.mp4'
import poster from '@/static/images/jubilaeum2017.jpg'

export default {
  name: 'home',
  data () {
    return {
      video,
      poster
    }
  },
  components: {
    cover: loadComponent('cover'),
    program: loadPage('Program')
  }
}
</script>
