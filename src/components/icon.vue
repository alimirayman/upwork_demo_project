<template>
  <div>
    <div class="pt-2" v-if="type === 'konzert'">
      <i class="i_konzert_pos" @mouseover="changeClass" @mouseleave="changeClassFrom">
        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
      </i>
    </div>
    <div class="pt-2" v-if="type === 'allerlei'">
      <i class="i_allerlei_pos" @mouseover="changeClass" @mouseleave="changeClassFrom">
        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>
      </i>
    </div>
    <div class="pt-2" v-if="type === 'theater'">
      <i class="i_theater_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span>
      </i>
    </div>
    <div class="pt-2" v-if="type === 'kindertheater'">
      <i class="i_kindertheater_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
        <span class="path1"></span><span class="path2"></span>
      </i>
    </div>
    <div class="pt-2" v-if="type === 'tickets'">
      <i class="i_tickets_pos">
        <span class="path1"></span><span class="path2"></span><span class="path3"></span>
      </i>
    </div>
    <div class="pt-2" v-if="type === 'sponsoring'">
      <i class="i_sponsoring_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
        <span class="path1"></span><span class="path2"></span>
      </i>
    </div>
    <div class="pt-2" v-if="type === 'pfeil_unten'">
      <i class="i_pfeil_unten_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
        <span class="path1"></span><span class="path2"></span>
      </i>
    </div>
    <div class="pt-2" v-if="type === 'pfeil_rechts'">
      <i class="i_pfeil_rechts_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
        <span class="path1"></span><span class="path2"></span>
      </i>
    </div>
    <div class="pt-2" v-if="type === 'pfeil_oben'">
      <i class="i_pfeil_oben_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
        <span class="path1"></span><span class="path2"></span>
      </i>
    </div>
    <div class="pt-2" v-if="type === 'pfeil_links'">
      <i class="i_pfeil_links_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
        <span class="path1"></span><span class="path2"></span>
      </i>
    </div>
    <div class="pt-2" v-if="type === 'party'">
      <i class="i_party_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span>
      </i>
    </div>
    <div class="pt-2" v-if="type === 'lesung'">
      <i class="i_lesung_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>
      </i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
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
</style>
