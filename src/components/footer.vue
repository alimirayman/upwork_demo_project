<template>
  <div id="footer" class="py-3">
    <div class="container py-5">
      <div class="d-flex justify-content-center position-relative">
        <i class="i_facebook_neg">
          <span class="path1"></span><span class="path2"></span>
        </i>
        <i class="i_insta_neg">
          <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
        </i>
        <i class="i_mail_neg">
          <span class="path1"></span><span class="path2"></span><span class="path3"></span>
        </i>
        <div class="copyright py-3">&copy;2018 <router-link to="/Impressum">Impressum</router-link></div>
      </div>
    </div>
    <div class="text-center font_display">
      <p>Kellertheater im Vogelsang | Postfach 606 | 6460 Altdorf | <a href="mailto:info@kiv.ch">info@kiv.ch</a> | <a
              href="http://www.kiv.ch">www.kiv.ch</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped lang="scss">
#footer {
  background: #000;
  color: var(--white);
  i {
    font-size: 3.2rem;
    padding: 0 13px;
  }
  .copyright {
    position: absolute;
    right: 0;
    a:hover {
      text-decoration: underline;
    }
  }
}
</style>
