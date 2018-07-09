<template>
  <div class="media">
    <div class="img-container" :style="{'background-image': 'url(' + images[curId] + ')'}"></div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      required: true
    }
  },
  data () {
    return {
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
