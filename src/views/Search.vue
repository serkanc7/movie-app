<template>
  <section class="found__movies container">
    <div class="movies">
      <MoviePosterComponent
        v-for="foundmovie in foundmovies"
        :movie="foundmovie"
        :key="foundmovie.id"
        class="found__movie"
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

    /* searchQuery.value = route.query.q; */

    const getMovies = async () =>
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${env.apikey}&language=en-US&page=1&include_adult=false&query=${route.query.q}`
      )
        .then((response) => response.json())
        .then((data) => {
          foundmovies.value = data.results.filter(
            (item) => item.poster_path != null
          );
          console.log(data.results);
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
<style lang="scss">
.movies {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
}
</style>