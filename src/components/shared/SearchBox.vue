<template>
  <form @submit.prevent="searchMovie()" class="search-box">
    <input
      type="search"
      placeholder="What are you looking for?"
      class="search-box__input"
      v-model="search"
      id="search"
      required
      autocomplete="off"
    />
    <button type="submit" class="search-box__button">
      <svg
        width="24"
        height="24"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5 15.5L19 19"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </form>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const search = ref("");
    const router = useRouter();

    const searchMovie = () => {
      if (search.value) {
        router.replace({
          path: "/search",
          query: { q: search.value },
        });
      }
    };

    return {
      search,
      searchMovie,
    };
  },
};
</script>
<style lang="scss">
.search-box {
  width: 100%;
  max-width: 400px;
  position: relative;
  display: flex;
  @include mq(sm-mid, max) {
    max-width: none;
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
  }
}
</style>