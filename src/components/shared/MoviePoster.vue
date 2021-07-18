<template>
  <router-link :to="'/movie/' + movie.id" @click="scrollToTop">
    <div class="movie-card">
      <img class="movie-card__poster" :src="imgURL" :alt="title" />
    </div>
  </router-link>
</template>
<script>
import { computed } from "vue";
export default {
  props: ["movie"],
  setup({ movie }) {
    const imgURL = computed(() => {
      return `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    });
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    return {
      imgURL,
      scrollToTop,
    };
  },
};
</script>
<style lang="scss" scoped>
.movie-card {
  width: 100%;
  height: 100%;
  &__poster {
    width: 100%;
    height: 100%;
  }
}
</style>