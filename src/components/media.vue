<template>
  <div class="media mt-3 mb-5">
    <div class="img-container" :style="{'background-image': 'url(' + images[curId] + ')'}"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png',
        'https://15xomi2v386wytrb8nbsoq34-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/event-management.jpg'
      ],
      curId: 0
    }
  },
  methods: {
    changeImage () {
      let vm = this
      setInterval(() => {
        vm.curId = (++vm.curId === vm.images.length) ? 0 : vm.curId
      }, 5000)
    }
  },
  created () {
    this.changeImage()
  }
}
</script>

<style scoped lang="scss">
.media {
  width: 100vw;
  .img-container {
    height: 70vh;
    width: 100%;
    background-color: var(--blue);
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease-in-out;
    @media screen and (max-width: 768px) {
      height: 40vh;
    }
  }
}
</style>
