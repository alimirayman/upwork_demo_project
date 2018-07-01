<template>
  <div class="event">
    <div class="row">
      <div class="col-md-3 text-md-right">
        <div class="pt-5 mt-sm-4 mt-lg-0" v-if="type === 'konzert'">
          <i class="i_konzert_pos" @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
          </i>
        </div>
        <div class="pt-5 mt-sm-4 mt-lg-0" v-if="type === 'allerlei'">
          <i class="i_allerlei_pos" @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>
          </i>
        </div>
        <div class="pt-5 mt-sm-4 mt-lg-0" v-if="type === 'theater'">
          <i class="i_theater_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span>
          </i>
        </div>
        <div class="pt-5 mt-sm-4 mt-lg-0" v-if="type === 'kindertheater'">
          <i class="i_kindertheater_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span>
          </i>
        </div>
        <div class="pt-5 mt-sm-4 mt-lg-0" v-if="type === 'tickets'">
          <i class="i_tickets_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span><span class="path3"></span>
          </i>
        </div>
        <div class="pt-5 mt-sm-4 mt-lg-0" v-if="type === 'sponsoring'">
          <i class="i_sponsoring_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span>
          </i>
        </div>
        <div class="pt-5 mt-sm-4 mt-lg-0" v-if="type === 'pfeil_unten'">
          <i class="i_pfeil_unten_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span>
          </i>
        </div>
        <div class="pt-5 mt-sm-4 mt-lg-0" v-if="type === 'pfeil_rechts'">
          <i class="i_pfeil_rechts_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span>
          </i>
        </div>
        <div class="pt-5 mt-sm-4 mt-lg-0" v-if="type === 'pfeil_oben'">
          <i class="i_pfeil_oben_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span>
          </i>
        </div>
        <div class="pt-5 mt-sm-4 mt-lg-0" v-if="type === 'pfeil_links'">
          <i class="i_pfeil_links_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span>
          </i>
        </div>
        <div class="pt-5 mt-sm-4 mt-lg-0" v-if="type === 'party'">
          <i class="i_party_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span>
          </i>
        </div>
        <div class="pt-5 mt-sm-4 mt-lg-0" v-if="type === 'lesung'">
          <i class="i_lesung_pos"  @mouseover="changeClass" @mouseleave="changeClassFrom">
            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>
          </i>
        </div>
      </div>
      <div class="col-md-6">
        <div class="date-time font_display mt-3">
          <slot name="dateTime"></slot>
        </div>
        <div class="title font_display lead mt-2 mb-3">
          <span>{{title}}</span>
          <span>{{title}}</span>
        </div>
        <div class="mb-3">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'type',
    'title'
  ],
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
    overflow-y: hidden;
    padding: 10px 0;
    position: relative;
    border-left: 0.25rem solid var(--blue);
    &:hover {
      border-color: var(--black);
    }
    span {
      display: inline;
      background: var(--blue);
      color: white;
      white-space: pre-wrap;
      padding-right: 0.25rem;
      cursor: pointer;
      &:hover ~ span {
        background-color: var(--black);
      }
      &:first-child{
        position: absolute;
        top: 10px;
        left: 0;
        background: transparent;
      }
    }
  }
</style>
