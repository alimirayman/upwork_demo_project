<template>
  <div id="program" class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="lead my-5">
            Das Kellertheater im Vogelsang ist ein Kleintheater in Altdorf. Seit 1969 wird vom Theater für die Kleinen bis zum Musikevent für die Grossen eine Menge geboten.
          </div>
        </div>
      </div>
      <event></event>
    </div>
  </div>
</template>

<script>
  import {
    loadComponent
  } from "../helpers/importer";

  export default {
    data () {
      return {
        msg: ''
      }
    },
    components: {
      event: loadComponent('event')
    }
  }
</script>

<style scoped lang="scss">

</style>
