<template>
  <section class="container">
    <h1>Toprated Movies</h1>
    <div class="movies">
      <MoviePosterComponent
        v-for="topratedmovie in topratedmovies"
        :movie="topratedmovie"
        :key="topratedmovie.id"
      />
    </div>
  </section>
</template>
<script>
import { onMounted, ref } from "vue";
import MoviePosterComponent from "@/components/shared/MoviePoster.vue";
import env from "@/env.js";
export default {
  components: { MoviePosterComponent },
  setup() {
    const topratedmovies = ref([]);
    const getAllTopratedMovies = async () =>
      await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${env.apikey}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results);
          topratedmovies.value = data.results;
        });

    onMounted(() => {
      getAllTopratedMovies();
    });

    return {
      topratedmovies,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>