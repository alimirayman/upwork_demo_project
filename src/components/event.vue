<template>
  <div class="event">
    <div class="row">
      <div class="col-md-3 text-right">
        <div class="pt-5" v-if="type === 'konzert'">
          <i class="i_konzert_pos" @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
          </i>
        </div>
        <div class="pt-5" v-if="type === 'theater'">
          <i class="i_allerlei_pos" @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>
          </i>
        </div>
        <div class="pt-5" v-if="type === 'theater'">
          <i class="i_allerlei_pos" @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>
          </i>
        </div>
        <div class="pt-5" v-if="type === 'theater'">
          <i class="i_kindertheater_pos">
            <span class="path1"></span><span class="path2"></span>
          </i>
        </div>
      </div>
      <div class="col-md-5 col-sm-4">
        <div class="date-time font_display mt-3">Samstag, 17. Dezember 2017 I 20.30 – 2.00 Uhr</div>
        <div class="title font_display lead mt-2 mb-3 p-1">Konzert</div>
        <div class="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci atque autem deserunt dolorum ducimus eos error est hic minus neque odio quas quod recusandae, rem soluta vero? Corporis, saepe.
        </div>
        <div class="time-money">Tür 19.30 Uhr | Beginn 20.15 Uhr | Preis 20.– / 25.–</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        type: 'konzert'
      }
    },
    methods: {
      changeClass (e) {
        let el = e.target.parentElement
        el.className = (el.className.substr(-3) === 'pos') ? el.className.replace('pos', 'neg') : el.className.replace('neg', 'pos')
      },
      changeClassFrom (e) {
        let el = e.target
        el.className = (el.className.substr(-3) === 'pos') ? el.className.replace('pos', 'neg') : el.className.replace('neg', 'pos')
      }
    }
  }
</script>

<style scoped lang="scss">
  i {
    font-size: 3.5rem;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 24px -4px #333;
    }
  }
  .title {
    display: inline-block;
    background-color: var(--blue);
    color: var(--white);
    &:hover{
      background-color: var(--black);
      cursor: pointer;
    }

  }
</style>
