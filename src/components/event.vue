<template>
  <div class="event">
    <div class="row">
      <div class="col-md-9 offset-md-3">
        <div class="date-time font_display mt-3">
          <slot name="dateTime"></slot>
        </div>
      </div>
      <div class="col-md-3 text-md-right">
        <icon :type="type"></icon>
      </div>
      <div class="col-md-7">
        <div class="title font_display lead mt-2 mb-3" v-if="title">
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
import icon from '@/components/icon'
export default {
  props: [
    'type',
    'title'
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
</style>
