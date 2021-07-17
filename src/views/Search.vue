<template>
  <section class="found__movies container">
    <h1>Results</h1>
    <div class="movies">
      <MoviePosterComponent
        v-for="foundmovie in foundmovies"
        :movie="foundmovie"
        :key="foundmovie.id"
      />
    </div>
  </section>
</template>
<script>
import MoviePosterComponent from "@/components/shared/MoviePoster.vue";
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";
export default {
  components: { MoviePosterComponent },
  setup() {
    const route = useRoute();
    const foundmovies = ref([]);

    const getMovies = async () =>
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${env.apikey}&language=en-US&page=1&include_adult=false&query=${route.query.q}&append_to_response=videos,credits,release_dates,similar,images`
      )
        .then((response) => response.json())
        .then((data) => {
          foundmovies.value = data.results.filter(
            (item) => item.poster_path != null
          );

          console.log(foundmovies);
        });

    watchEffect(() => {
      getMovies();
    });

    return {
      foundmovies,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>