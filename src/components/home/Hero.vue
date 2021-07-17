<template>
  <section class="home-search">
    <div class="hero container">
      <h1 class="hero__title">Your Favourite Movies. Explained.</h1>
      <p class="hero__text">Figure out what happened! Then find out why.</p>
      <a class="hero__link" href="#popular">Discover Movies</a>
    </div>
  </section>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.home-search {
  background: url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
  height: 600px;
  background-repeat: no-repeat;
  background-size: 100% 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  @include mq(md, max) {
    height: 300px;
    background-size: 100% 300px;
  }
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &__title {
    margin-top: 160px;
    color: $white;
    font-size: 40px;
    text-align: center;
    @include mq(md, max) {
      margin-top: 50px;
      font-size: 30px;
    }
    @include mq(sm, max) {
      font-size: 25px;
    }
  }

  &__text {
    color: $white;
    font-weight: 200;
    font-size: 22px;
    margin-top: 0;
    margin-bottom: 45px;
    text-align: center;
    @include mq(md, max) {
      font-size: 18px;
    }
    @include mq(sm, max) {
      font-size: 15px;
    }
  }

  &__link {
    color: $black;
    text-decoration: none;
    border: 2px solid $black;
    background-color: $white;
    padding: 10px 20px;
    border-radius: 15px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;

    &:hover {
      border: 2px solid $white;
      background-color: black;
      color: $white;
    }
    @include mq(sm, max) {
      padding: 5px 10px;
      font-size: 10px;
    }
  }
}
</style>