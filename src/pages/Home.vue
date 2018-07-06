<template>
  <div class="home">
    <cover :videoSrc="video" :poster="poster" />
    <!--<router-view></router-view>-->
    <program></program>
    <media></media>
    <div class="container">
      <event title="TICKETS" type="tickets">

        <div class="font_display">
          Tickets online
        </div>
        <div>
          Wähle unter Programm deine Veranstaltung und sichere dir und deinen
          Freunden Tickets! Dein gekauftes Ticket nimmst du, auf deinem Smartphone
          oder ausgedruckt mit an die Abendkasse im Kellertheater im Vogelsang.
        </div>
        <div class="font_display mt-4">
          Tickets am Schalter
        </div>
        <div>
          Du kannst aber auch dein Ticket am Schalter beim Uri Tourismus kaufen.
          <br>
          <br>
          Uri Tourismus AG
          Schützengasse 11
          CH-6460 Altdorf
          <br>
          <br>
          Öffnungszeiten:
          <table>
            <tr>
              <td rowspan="2">Mo – Fr</td>
              <td>9.00 - 11.30 Uhr</td>
            </tr>
            <tr>
              <td>13.30 - 17.30 Uhr</td>
            </tr>
            <tr>
              <td>Sa</td>
              <td>9.00 - 11.30 Uhr</td>
            </tr>
          </table>
        </div>
      </event>
      <gallery></gallery>
    </div>
    <lokal></lokal>
    <media></media>

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
    media: loadComponent('media'),
    event: loadComponent('event'),
    gallery: loadComponent('gallery'),
    program: loadPage('Program'),
    lokal: loadPage('Lokal')
  }
}
</script>

<style scoped lang="scss">
  td{
    vertical-align: top;
    min-width: 100px;
  }
</style>
