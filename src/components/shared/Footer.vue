<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__navs">
        <nav class="footer__nav">
          <a class="footer__link footer__link--left" href="#">About</a>
          <a class="footer__link footer__link--left" href="#">Jobs</a>
          <a class="footer__link footer__link--left" href="#">Press</a>
          <a class="footer__link footer__link--left" href="#">News</a>
          <a class="footer__link footer__link--left" href="#">Gift</a>
        </nav>
        <nav class="footer__nav">
          <a class="footer__link footer__link--left" href="#">Legal</a>
          <a class="footer__link footer__link--left" href="#">Cookies</a>
          <a class="footer__link footer__link--left" href="#">Adchoices</a>
        </nav>
      </div>
      <div class="footer__social">
        <nav class="footer__nav">
          <a href="#" class="footer__link footer__link--right">Facebook</a>
          <a href="#" class="footer__link footer__link--right">Twitter</a>
        </nav>
        <div class="footer__copyright">&copy; Serkan Çelik</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  margin: 20px 0;
  padding: 0;
  font-size: 14px;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    @include mq(sm-mid, max) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__link {
    text-decoration: none;
    color: $gray;
    font-weight: bold;

    &--left {
      margin-right: 10px;
    }

    &--right {
      margin-left: 10px;
    }

    @include mq(sm, max) {
      font-size: 12px;
    }
  }

  &__social {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;

    @include mq(sm-mid, max) {
      align-items: center;
    }
  }

  &__nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    @include mq(sm-mid, max) {
      justify-content: center;
    }
  }
}
</style>
