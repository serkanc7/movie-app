<template>
  <section class="allpopular container">
    <h1>Popular Movies</h1>
    <div class="movies">
      <MoviePosterComponent
        v-for="popularmovie in popularmovies"
        :movie="popularmovie"
        :key="popularmovie.id"
        class="allpopular__movie"
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
    const popularmovies = ref([]);
    const getAllPopularMovies = async () =>
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikey}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results);
          popularmovies.value = data.results;
        });

    onMounted(() => {
      getAllPopularMovies();
    });

    return {
      popularmovies,
    };
  },
};
</script>
<style lang="scss" scoped>
.allpopular {
}
</style>