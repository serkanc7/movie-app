<template>
  <router-link :to="'/movie/' + movie.id" @click="scrollToTop">
    <div class="movie-card">
      <img class="movie-card__poster" :src="imgURL" :alt="altText" />
    </div>
  </router-link>
</template>
<script>
import { onMounted, ref, computed } from "vue";
import env from "@/env.js";
export default {
  props: ["movie"],
  setup({ movie }) {
    const altText = movie.title;
    const imgURL = computed(() => {
      return `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    });

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    return {
      imgURL,
      altText,
      scrollToTop,
    };
  },
};
</script>
<style lang="scss">
.movie-card {
  width: 100%;
  height: 100%;
  &__poster {
    width: 100%;
    height: 100%;
  }
}
</style>