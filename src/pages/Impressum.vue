<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 offset-md-2 position-relative">
          <div class="title font_display my-4">
            <span>{{title}}</span>
            <span>{{title}}</span>
          </div>
          <div class="close">
            <i class="i_pfeil_links_pos py-4" @click="$router.push('/')">
              <span class="path1"></span><span class="path2"></span>
            </i>
          </div>
          <div class="font_display">Kontakt</div>
          <div class="pb-3">
            Kellertheater im Vogelsang <br>
            Postfach 606 <br>
            6460 Altdorf <br>
            <a href="mailto:info@kiv.ch">info@kiv.ch</a><br>
            <a href="http://www.kiv.ch">www.kiv.ch</a>
          </div>
          <div class="font_display">Design und Seitenunterhalt</div>
          <div class="pb-3">
            Kellertheater im Vogelsang <br>
            Postfach 606 <br>
            6460 Altdorf <br>
            <a href="mailto:info@kiv.ch">info@kiv.ch</a><br>
            <a href="http://www.kiv.ch">www.kiv.ch</a>
          </div>
          <div class="font_display">Programmierung</div>
          <div class="pb-3">
            HI Schweiz AG <br>
            Neustadtstrasse 3 Luzern, Gitschenstrasse 9 Altdorf <br>
            <a href="www.hi-schweiz.ch">www.hi-schweiz.ch</a>
          </div>
          <div class="font_display">Bilder</div>
          <div class="pb-3">
            Mathias Arnold, Altdorf <br>
            XXX
          </div>
          <div class="font_display">Disclaimer</div>
          <div class="pb-3">
            Alle Texte und Links wurden sorgfältig geprüft und werden laufend aktualisiert. Wir sind bemüht, richtige
            und vollständige Informationen auf dieser Website bereitzustellen, übernehmen aber keinerlei Verantwortung,
            Garantien oder Haftung dafür, dass die durch diese Website bereitgestellten Informationen,
            richtig, vollständig oder aktuell sind. Wir behalten uns das Recht vor, jederzeit und ohne Vorankündigung
            die Informationen auf dieser Website zu ändern und verpflichten uns auch nicht, die enthaltenen Informationen
            zu aktualisieren. Alle Links zu externen Anbietern wurden zum Zeitpunkt ihrer Aufnahme auf
            ihre Richtigkeit überprüft, dennoch haften wir nicht für Inhalte und Verfügbarkeit von Websites, die mittels
            Hyperlinks zu erreichen sind. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für
            Schäden, die durch Inhalte verknüpfter Seiten entstehen, haftet allein der Anbieter der Seite, auf welche
            verwiesen wurde. Dabei ist es gleichgültig, ob der Schaden direkter, indirekter oder finanzieller Natur ist
            oder ein sonstiger Schaden vorliegt, der sich aus Datenverlust, Nutzungsausfall oder anderen Gründen
            aller Art ergeben könnte.
          </div>
          <div class="font_display">Datenschutz</div>
          <div class="pb-3">
            Für die Sicherheit der Datenübertragung im Internet können wir keine Gewähr übernehmen, insbesondere
            besteht bei der Übertragung von Daten per E-Mail die Gefahr des Zugriffs durch Dritte. Einer Nutzung
            der im Impressum veröffentlichten Kontaktdaten durch Dritte zu Werbezwecken wird hiermit ausdrücklich
            widersprochen. Der Betreiber behält sich für den Fall unverlangt zugesandter Werbe- oder Informationsmaterialien
            ausdrücklich rechtliche Schritte vor. Sollten einzelne Regelungen oder Formulierungen dieses
            Haftungsausschlusses unwirksam sein oder werden, bleiben die übrigen Regelungen in ihrem Inhalt und
            ihrer Gültigkeit hiervon unberührt
          </div>
          <div class="font_display">Google Analytics</div>
          <div class="pb-3">
            Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics
            verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine
            Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen
            über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA
            übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite,
            wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in
            anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur
            in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort
            gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre
            Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und
            um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber
            dem Websitebetreiber zu erbringenDie im Rahmen von Google Analytics von Ihrem Browser übermittelte
            IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung der
            Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
            darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich
            werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten
            und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
            Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare
            Browser-Plugin herunterladen und installieren. Der aktuelle Link ist tools.google.com/dlpage/gaoptout.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Impressum'
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 2rem;
}
i{
  font-size: 3rem;
  position: absolute;
  right: 0;
}
</style>
