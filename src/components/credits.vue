<template>
  <div>
    <div class="title_tag mt-2 mb-3">
      <div class="icon">
        <i class="i_sponsoring_pos">
          <span class="path1"></span><span class="path2"></span>
        </i>
      </div>
      <div class="title font_display">
        <span>{{ title }}</span>
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="font_display">SPONSOREN MIT BEITRÄGEN VON 500 FRANKEN UND MEHR</div>
    <div class="py-3">
      <div class="row justify-content-center justify-content-md-start">
        <div class="col-md-2 col-sm-3 col-4" v-for="(logo, key) in logos" :key="key">
          <img :src="logo" class="img-fluid">
        </div>
      </div>
    </div>
    <div class="font_display py-2">SPONSOREN MIT BETRÄGEN BIS 210 FRANKEN</div>
    <p class="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et magni perspiciatis possimus, quis totam velit. Accusantium, aut autem commodi consectetur eligendi officiis voluptatem. Consectetur quam quasi qui quod soluta!</p>
    <div class="font_display py-2">SPONSOREN MIT BEITRÄGEN BIS 150 FRANKEN</div>
    <p class="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et magni perspiciatis possimus, quis totam velit. Accusantium, aut autem commodi consectetur eligendi officiis voluptatem. Consectetur quam quasi qui quod soluta!</p>
    <div class="font_display py-2">SPONSOREN MIT BEITRÄGEN BIS 150 FRANKEN</div>
    <p class="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et magni perspiciatis possimus, quis totam velit. Accusantium, aut autem commodi consectetur eligendi officiis voluptatem. Consectetur quam quasi qui quod soluta!</p>
    <div class="font_display">FIRMEN DIE UNS ENTGEGENKOMMEN</div>
    <div class="py-3">
      <div class="row justify-content-center justify-content-md-start">
        <div class="col-md-2 col-sm-3 col-4" v-for="(logo, key) in logos.slice(0, 4)" :key="key">
          <img :src="logo" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'HERZLICHEN DANK',
      logos: [
        'https://www.48hourslogo.com/Public/images/bg/10.png',
        'https://www.48hourslogo.com/Public/images/bg/8.png',
        'https://vignette.wikia.nocookie.net/logopedia/images/3/3e/PlayStation_logo.svg.png/revision/latest?cb=20130313233657',
        'http://logok.org/wp-content/uploads/2014/05/LV-logo.png',
        'http://pngimg.com/uploads/adidas/adidas_PNG13.png',
        'https://www.ucraft.com/images/logomaker.png',
        'https://d1qhd0c0zfn8ct.cloudfront.net/wp-content/uploads/2017/09/Apple-Logo-black.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Logos.svg/1200px-Logos.svg.png',
        'https://magento.com/sites/default/files/burger-king-logo-black-r1-v1.png',
        'https://qph.fs.quoracdn.net/main-qimg-e2fc97e998eb08b8ba1ed97d625b7b25'
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
