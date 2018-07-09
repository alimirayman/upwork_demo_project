<template>
  <div id="program" class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="lead my-5">
            Das Kellertheater im Vogelsang ist ein Kleintheater in Altdorf. Seit 1969 wird vom Theater für die Kleinen bis zum Musikevent für die Grossen eine Menge geboten.
          </div>
        </div>
      </div>
      <event
          :title="event.title"
          :isActive="event.full"
          @titleClick="openDetails(event)"
          :type="event.type"
          v-for="(event, key) in events" :key="key">
        <span slot="dateTime">{{ event.dateTime }}</span>
        <p v-html="event.body"></p>
        <div class="mb-5" v-if="event.full">
          <p v-html="event.details"></p>
          <img :src="event.image" class="img-fluid my-4" :alt="event.title">
          <a href="#" class="font_display"> >> Tickets Online Kaufen </a>
        </div>
      </event>
      <event v-if="!events.length" title="Coming Soon...">
        <span slot="dateTime">Herbstprogramm August – November</span>
      </event>
      <div class="moveTopButton" @click="moveTop">
        <i class="i_pfeil_oben_pos">
          <span class="path1"></span><span class="path2"></span>
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import {
  loadComponent
} from '../helpers/importer'

export default {
  data () {
    return {
      events: [
        {
          type: 'konzert',
          dateTime: 'Samstag, 17. Dezember 2017 I 20.30 – 2.00 Uhr',
          title: 'KONZERT',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga inventore nesciunt pariatur quam quasi rem repellat sapiente voluptates? Accusantium architecto beatae dolore laborum obcaecati provident quas recusandae sed suscipit voluptatum!',
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet architecto deserunt harum, nam nemo, nisi numquam optio perspiciatis possimus quidem quo veniam? Est et ex incidunt minus voluptatem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci commodi cumque cupiditate ducimus est ex, facere fugiat libero, minus modi nam officiis omnis provident reiciendis ullam unde vero. Earum.',
          full: false,
          image: 'https://15xomi2v386wytrb8nbsoq34-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/event-management.jpg'
        },
        {
          type: 'party',
          dateTime: 'Samstag, 17. Dezember 2017 I 20.30 – 2.00 Uhr',
          title: 'DJDJDJDJDJD JDJDJD JDJDJDJDJDJDJ',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga inventore nesciunt pariatur quam quasi rem repellat sapiente voluptates? Accusantium architecto beatae dolore laborum obcaecati provident quas recusandae sed suscipit voluptatum!'
        },
        {
          type: 'theater',
          dateTime: 'Samstag, 17. Dezember 2017 I 20.30 – 2.00 Uhr',
          title: 'THEATER',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga inventore nesciunt pariatur quam quasi rem repellat sapiente voluptates? Accusantium architecto <br><br> beatae dolore laborum obcaecati provident quas recusandae sed suscipit voluptatum!'
        },
        {
          type: 'lesung',
          dateTime: 'Samstag, 17. Dezember 2017 I 20.30 – 2.00 Uhr',
          title: 'VORLESUNG BUCHVORLESUNG VORLESUNG',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga inventore nesciunt pariatur quam quasi rem repellat sapiente voluptates? Accusantium architecto beatae dolore laborum obcaecati provident quas recusandae sed suscipit voluptatum!'
        }
      ]
    }
  },
  components: {
    event: loadComponent('event')
  },
  methods: {
    moveTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    openDetails (event) {
      event.full = !event.full
    }
  }
}
</script>

<style scoped lang="scss">
.moveTopButton{
  text-align: right;
  font-size: 3rem;
  cursor: pointer;
}
</style>
