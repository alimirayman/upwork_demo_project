<template>
  <div class="event" :class="{'active': isActive}">
    <div class="row">
      <div class="col-md-7 offset-md-3">
        <div class="date-time font_display mt-3">
          <slot name="dateTime"></slot>
        </div>
      </div>
      <div class="col-md-3 text-md-right">
        <icon :name="type"></icon>
      </div>
      <div class="col-md-6">
        <div class="title font_display lead mt-2 mb-3" v-if="title" @click="$emit('titleClick')">
          <span>{{title}}</span>
          <span>{{title}}</span>
        </div>
        <div class="close" v-if="isActive">
          <i class="i_pfeil_links_pos" @click="$emit('titleClick')">
            <span class="path1"></span><span class="path2"></span>
          </i>
        </div>
        <div class="mb-3">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '@/components/icon'
export default {
  props: [
    'type',
    'title',
    'isActive'
  ],
  components: {
    icon
  }
}
</script>

<style scoped lang="scss">
  .btn {
    font-family: 'Bungee', cursive;;
    background: var(--blue);
    border-radius: 0;
    color: #fff;
    font-size: 1.5rem;
  }
  .active {
    /*background: red;*/
    .title {
      border-color: var(--black);
      span {
        background-color: var(--black);
      }
    }
  }
  i{
    font-size: 3rem;
    position: absolute;
    right: 0;
  }
</style>
