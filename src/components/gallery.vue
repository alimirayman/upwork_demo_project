<template>
  <div>
    <div class="row mt-5">
      <div class="col-lg-3 col-md-4 col-sm-6" v-for="(image, key) in images" :key="key">
        <div class="img-container mb-4" :style="{'background-image' : `url(${image.url})`}">
          <div class="overlay p-4">
            <span>{{ image.date }}</span>
            <div class="font_display mt-3">{{ image.text }}</div>
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
      images: [
        {
          url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        },
        {
          url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png',
          date: '25.09.2017',
          text: 'ZAYK & THE FLYING TIGER CLAW'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
