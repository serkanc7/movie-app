<template>
  <header class="header">
    <div class="container header__container">
      <nav class="header__links">
        <router-link to="/" class="header__logo">flixus</router-link>
        <router-link to="/browse+" class="header__link header__link--browse"
          >Browse+</router-link
        >
        <router-link to="/favourites" class="header__link header__link--fav"
          >Favourites</router-link
        >
      </nav>
      <div class="header__search">
        <SearchBoxComponent />
      </div>
    </div>
  </header>
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

<style lang="scss" scoped>
.header {
  background-color: black;
  &__container {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @include mq(sm-mid, max) {
      flex-direction: column;
      justify-content: stretch;

      align-items: stretch;
    }
  }
  &__links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-width: 250px;
  }

  &__logo {
    text-decoration: none;
    color: $white;
    font-size: 26px;
    font-weight: bold;
    font-style: italic;
  }

  &__link {
    color: $white;
    text-decoration: none;
    &--fav {
      @include mq(sm-mid, max) {
        margin-left: auto;
      }
    }
    &--browse {
      @include mq(sm-mid, max) {
        margin-left: 20px;
      }
    }
  }
  &__search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @include mq(sm-mid, max) {
      margin-top: 20px;
    }
  }
}
</style>
