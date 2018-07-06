<template>
  <div id="local">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="lead my-5">
            Das Kellertheater im Vogelsang ist ein Kleintheater in Altdorf. Seit 1969 wird vom Theater für die Kleinen bis zum Musikevent für die Grossen eine Menge geboten.
          </div>
        </div>
      </div>
      <event>
        <div class="font_display">Lokal</div>
        <div class="pb-3">
          Eingerichtet hat dieses Theater das Cabaret Chyybäderli aus dem Kanton Uri und auch den Verein Kellertheater im Vogelsang gegründet. Das Lokal wird als Theaterbühne für Kleintheater, Kindertheater, Konzerte und Partys verwendet. Der Zuschauerraum ist gestuft. Für Konzertanlässe kann der Boden aber auch flach eingerichtet werden. Dann ist meistens auch keine Bestuhlung vorhanden. Die maximale Zuschauerzahl ist bei Theater 112 Personen, bei Konzerten ohne Bestuhlung ca. 200 Personen.
        </div>
        <div class="font_display">Team</div>
        <div class="pb-3">
          Das Team, welches ehrenamtlich Veranstaltungen organisiert, besteht aus ca. 40 Personen. Dieses splittet sich in Arbeitsgruppen auf (Kindertheater, Theater, Musik, Medien und Vorstand), engagiert Künstler und organisiert den jeweiligen Anlass.
        </div>
        <div class="font_display">Freunde des Kellertheaters </div>
        <div class="pb-3">
          Seit 1975 unterstützt der Verein «Freunde des Kellertheaters» den Theaterbetrieb sehr grosszügig. Er besteht aus etwa 250 Mitglieder. Diese Unterstützungsbeiträge sind für uns sehr wichtig. Herzlichen Dank!
          <br><br>Der Mitgliederbeitrag beträgt 40.– Franken, als Kollektivmitglieder, Vereine und Familien ist der Betrag 60.– Franken. Dafür erhalten alle jeweils einen Gratiseintritt nach Wahl im Kellertheater.
          <br><br>Falls du den Wunsch verspürst, auch Mitglied dieses Vereins zu werden, wende dich per Mail an uns. Wir würden uns sehr freuen
        </div>
        <a href="mailTo: info@kiv.ch" class="btn mt-3">MITGLIED WERDEN</a>
      </event>
    </div>
  </div>
</template>

<script>
import {loadComponent} from '@/helpers/importer'

export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    event: loadComponent('event')
  }
}
</script>

<style scoped lang="scss">

</style>
