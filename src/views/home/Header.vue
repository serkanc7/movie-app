<template>
  <section class="home-search">
    <div class="hero container">
      <h1 class="hero__title">Your Favourite Movies. Explained.</h1>
      <p class="hero__text">Figure out what happened! Then find out why.</p>
      <SearchBoxComponent />
    </div>
  </section>
</template>
<script>
import SearchBoxComponent from "@/components/shared/SearchBox.vue";
export default {
  components: { SearchBoxComponent },
  setup() {
    return {
      SearchBoxComponent,
    };
  },
};
</script>
<style lang="scss">
.home-search {
  background: url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
  height: 600px;
  background-repeat: no-repeat;
  background-size: 100% 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  /* @include mq(md, max) {
    display: none;
  } */
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &__title {
    margin-top: 130px;
    color: $white;
    font-size: 40px;
  }

  &__text {
    color: $white;
    font-weight: 200;
    font-size: 22px;
    margin-top: 0;
    margin-bottom: 45px;
  }

  /*   &__search-box {
    margin-top: 45px;
    width: 100%;
    max-width: 400px;
    position: relative;
    display: flex;
  }

  &__input {
    width: 100%;
    border: 3px solid $gray;
    border-right: none;
    padding: 20px;
    height: 20px;
    border-radius: 30px 0 0 30px;
    outline: none;
    color: #9dbfaf;
  }

  &__button {
    width: 40px;
    height: 46px;
    border: 3px solid $gray;
    border-left: none;
    background: white;
    text-align: center;
    color: black;
    border-radius: 0 30px 30px 0;
    cursor: pointer;
    font-size: 20px;
  } */
}
</style>