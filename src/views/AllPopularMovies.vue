<template>
  <section class="allpopular container">
    <h1>Popular Movies</h1>
    <div class="movies">
      <MoviePosterComponent
        v-for="popularmovie in popularmovies"
        :movie="popularmovie"
        :key="popularmovie.id"
      />
    </div>
  </section>
</template>
<script>
import { onMounted, ref } from "vue";
import MoviePosterComponent from "@/components/shared/MoviePoster.vue";
export default {
  components: { MoviePosterComponent },
  setup() {
    const apikey = import.meta.env.VITE_KEY;
    const popularmovies = ref([]);
    const getAllPopularMovies = async () =>
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
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