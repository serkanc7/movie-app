<template>
  <HeroComponent />
  <section class="popular" id="popular">
    <div class="container">
      <header class="popular__header">
        <h2 class="category__title">
          <img
            src="@/assets/svg/popular.svg"
            class="category__icon"
            alt="Popular"
          />
          Popular Movies
        </h2>
        <router-link to="/popular" class="category__link"
          >View All &#8594;</router-link
        >
      </header>
      <div class="popular__movies">
        <MoviePosterComponent
          v-for="(popularmovie, index) in popularmovies.slice(0, 9)"
          :movie="popularmovie"
          :key="popularmovie.id"
          :class="[`popular__movie-${index}`]"
          class="popular__movie"
        />
      </div>
    </div>
  </section>
  <section class="toprated">
    <div class="container">
      <header class="toprated__header">
        <h2 class="category__title">
          <img
            src="@/assets/svg/toprated.svg"
            class="category__icon"
            alt="Toprated Movies"
          />
          Top Rated Movies
        </h2>
        <router-link to="/toprated" class="category__link"
          >View All &#8594;</router-link
        >
      </header>
      <div class="toprated__movies">
        <MoviePosterComponent
          v-for="topratedmovie in topratedmovies.slice(0, 6)"
          :movie="topratedmovie"
          :key="topratedmovie.id"
          class="toprated__movie"
        />
      </div>
    </div>
  </section>
</template>

<script>
import HeroComponent from "@/components/home/Hero.vue";
import MoviePosterComponent from "@/components/shared/MoviePoster.vue";
import { onMounted, ref } from "vue";

export default {
  components: { HeroComponent, MoviePosterComponent },
  setup() {
    const apikey = import.meta.env.VITE_KEY;
    const index = ref("");
    const popularmovies = ref([]);
    const topratedmovies = ref([]);

    const getPopularMovies = async () =>
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1&`
      )
        .then((response) => response.json())
        .then((data) => {
          popularmovies.value = data.results;
        });

    const gettopratedMovies = async () =>
      await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          topratedmovies.value = data.results;
        });

    onMounted(() => getPopularMovies());
    onMounted(() => gettopratedMovies());

    return {
      HeroComponent,
      MoviePosterComponent,
      popularmovies,
      topratedmovies,
      index,
    };
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}

.category {
  &__title {
    margin-bottom: 0;
    font-size: 22px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;

    @include mq(sm-mid, max) {
      font-size: 16px;
    }
    @include mq(sm-mid, max) {
      font-size: 14px;
    }
  }

  &__link {
    text-decoration: none;
    color: $gray;
    font-weight: bold;
    @include mq(sm-mid, max) {
      font-size: 14px;
    }

    @include mq(sm, max) {
      font-size: 12px;
    }
  }
}

.popular {
  margin-top: 30px;
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;
  }

  &__movies {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "popular__movie-0 popular__movie-1 popular__movie-2 popular__movie-3 popular__movie-4"
      "popular__movie-0 popular__movie-5 popular__movie-6 popular__movie-7 popular__movie-8";

    @for $i from 0 through 8 {
      .popular__movie-#{$i} {
        grid-area: popular__movie- + $i;
      }

      @include mq(md, max) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 8px;
      }
    }
    @include mq(md, max) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        "popular__movie-0 popular__movie-1 popular__movie-2"
        "popular__movie-3 popular__movie-4 popular__movie-5"
        "popular__movie-6 popular__movie-7 popular__movie-8";
    }
  }
}

.toprated {
  background-color: $toprated-bgcolor;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 30px;
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;
  }

  &__movies {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    @include mq(md, max) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 8px;
    }
  }
}
</style>

