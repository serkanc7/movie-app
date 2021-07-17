<template>
  <section class="favorites container">
    <h1>Favorite Movies</h1>
    <div class="movies">
      <MoviePosterComponent
        v-for="favoritemovie in favoritemovies"
        :movie="favoritemovie"
        :key="favoritemovie.id"
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
    const favoritemovies = ref([]);
    const getFavoriteMovies = () => {
      favoritemovies.value = JSON.parse(localStorage.getItem("data"));
    };

    onMounted(() => {
      getFavoriteMovies();
    });

    return {
      favoritemovies,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>