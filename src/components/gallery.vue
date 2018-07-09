<template>
  <div id="galary">
    <div class="row mt-5">
      <div class="col-lg-3 col-md-4 col-sm-6" v-for="(image, key) in limImages[cur]" :key="key">
        <div class="img-container mb-4" :style="{'background-image' : `url(${image.url})`}">
          <div class="overlay p-4">
            <span>{{ image.date }}</span>
            <div class="font_display mt-3">{{ image.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <i class="i_pfeil_links_pos" @click="prevImages">
        <span class="path1"></span><span class="path2"></span>
      </i>
      <i class="i_pfeil_rechts_pos" @click="nextImages">
        <span class="path1"></span><span class="path2"></span>
      </i>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import icon from '@/components/icon'
export default {
  data () {
    return {
      images: [
        {
          url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://www.telegraph.co.uk/content/dam/news/2018/07/05/TELEMMGLPICT000168330805_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg?imwidth=1400',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/9d/30/photo-22142.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/65/d8/guitar_person_performance_musician_event-51334.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/aa/ef/music_festival_canon_concert_sam_live_gig_band-98787.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/9d/ff/concert_crowd_audience_people_music_entertainment_festival_performance-727825.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/9b/a0/concerts_audience_spectators_lights_stages_contestants_crowds_walkway-655277.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://www.telegraph.co.uk/content/dam/news/2018/07/05/TELEMMGLPICT000168330805_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg?imwidth=1400',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/9d/30/photo-22142.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/65/d8/guitar_person_performance_musician_event-51334.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/aa/ef/music_festival_canon_concert_sam_live_gig_band-98787.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/9d/ff/concert_crowd_audience_people_music_entertainment_festival_performance-727825.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/9b/a0/concerts_audience_spectators_lights_stages_contestants_crowds_walkway-655277.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://www.telegraph.co.uk/content/dam/news/2018/07/05/TELEMMGLPICT000168330805_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg?imwidth=1400',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/9d/30/photo-22142.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/65/d8/guitar_person_performance_musician_event-51334.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/aa/ef/music_festival_canon_concert_sam_live_gig_band-98787.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/9d/ff/concert_crowd_audience_people_music_entertainment_festival_performance-727825.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/9b/a0/concerts_audience_spectators_lights_stages_contestants_crowds_walkway-655277.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://www.telegraph.co.uk/content/dam/news/2018/07/05/TELEMMGLPICT000168330805_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg?imwidth=1400',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/9d/30/photo-22142.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/65/d8/guitar_person_performance_musician_event-51334.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/aa/ef/music_festival_canon_concert_sam_live_gig_band-98787.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/9d/ff/concert_crowd_audience_people_music_entertainment_festival_performance-727825.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://c.pxhere.com/photos/9b/a0/concerts_audience_spectators_lights_stages_contestants_crowds_walkway-655277.jpg!d',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        }
      ],
      cur: 0
    }
  },
  computed: {
    limImages () {
      return _.chunk(this.images, 12)
    }
  },
  components: {
    icon
  },
  methods: {
    nextImages () {
      this.cur = (++this.cur === this.limImages.length) ? 0 : this.cur
    },
    prevImages () {
      this.cur = (--this.cur === -1) ? this.limImages.length - 1 : this.cur
    }
  }
}
</script>

<style scoped lang="scss">
  $grid-columns: 12;
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
  .img-container {
    width: 100%;
    height: 250px;
    background-color: var(--blue);
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease-in-out;
    .overlay {
      /*display: none;*/
      opacity: 0;
      background: var(--black);
      height: 100%;
      color: var(--white);
      transition: all 0.2s ease-in-out;
    }
    &:hover {
      .overlay {
        /*display: block;*/
        opacity: 1;
      }
    }
  }
  i {
    font-size: 4rem;
    margin: 20px;
    cursor: pointer;
  }
</style>
