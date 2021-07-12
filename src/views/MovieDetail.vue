<template>
  <section class="moviedetail container">
    <header class="moviedetail__header">
      <div class="moviedetail__poster">
        <img :src="movie.posterpath" alt="" />
      </div>
      <div class="moviedetail__details">
        <h1 class="moviedetail__title">
          {{ movie.title }}
          <span class="moviedetail__realese-year"
            >({{ movie.releaseyear }})</span
          >
        </h1>
        <div class="moviedetail__facts">
          <span class="moviedetail__release">{{ movie.releasedate }}</span>
          <span class="moviedetail__dot"></span>
          <span class="moviedetail__genres">
            <span
              class="moviedetail__genre"
              v-for="genre in movie.genres"
              :key="genre.id"
              >{{ genre.name }}</span
            >
          </span>
          <span class="moviedetail__dot"></span>
          <span class="moviedetail__runtime">{{ movie.runtime }} min</span>
        </div>
        <div class="moviedetail__actions">
          <span class="moviedetail__score"
            >61% <img src="@/assets/svg/star.svg" alt=""
          /></span>
          <button class="moviedetail__addfavorite">
            <img src="@/assets/svg/heart.svg" alt="" />
          </button>
          <a href="#" class="moviedetail__play">
            <img src="@/assets/svg/play.svg" alt="" /> Play Trailer</a
          >
        </div>
        <div class="moviedetail__tagline">
          {{ movie.tagline }}
        </div>
        <div class="moviedetail__overview">
          <h2 class="moviedetail__overview-title">Overview</h2>
          <p class="moviedetail__overview-text">
            {{ movie.overview }}
          </p>
          <h2 class="moviedetail__director-title">Director</h2>
          <p
            class="moviedetail__director"
            v-for="director in movie.directors"
            :key="director.id"
          >
            {{ director.name }}
          </p>
        </div>
      </div>
    </header>
    <section class="moviedetail__cast">
      <h2>Top Billed Cast</h2>
      <div class="moviedetail__cast-container">
        <CastCardComponent
          v-for="cast in movie.casts.slice(0, 12)"
          :key="cast.id"
          :cast="cast"
        />
      </div>
    </section>
  </section>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import CastCardComponent from "@/components/shared/CastCard.vue";
import env from "@/env.js";
export default {
  components: { CastCardComponent },
  setup() {
    const route = useRoute();

    let movie = reactive({
      title: "",
      backgroundpath: "",
      posterpath: "",
      directors: "",
      overview: "",
      tagline: "",
      releaseyear: "",
      releasedate: "",
      casts: "",
      genres: "",
      runtime: "",
    });

    const getMovie = async () =>
      await fetch(
        `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${env.apikey}&language=en-US&append_to_response=videos,credits,release_dates,similar,images`
      )
        .then((response) => response.json())
        .then((data) => {
          movie.title = data.title;
          movie.backgroundpath = data.backdrop_path;
          movie.posterpath = `https://image.tmdb.org/t/p/w300/${data.poster_path}`;
          movie.tagline = data.tagline;
          movie.overview = data.overview;
          movie.directors = data.credits.crew.filter((person) => {
            return person.job === "Director";
          });
          movie.releaseyear = data.release_date.slice(0, 4);
          movie.releasedate = data.release_date.split("-").reverse().join("/");
          movie.casts = data.credits.cast.filter(
            (item) => item.profile_path != null
          );

          movie.genres = data.genres;
          movie.runtime = data.runtime;
          console.log(data.credits.cast);

          console.log(data);
          console.log(movie);
        });

    onMounted(() => getMovie());

    return {
      movie,
      CastCardComponent,
    };
  },
};
</script>

<style lang="scss">
.moviedetail {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  &__bg {
    height: 600px;
    background-repeat: no-repeat;
    background-size: 100% 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__header {
    color: $black;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;

    @include mq(md, max) {
      flex-direction: column;
    }
  }
  &__details {
    padding-left: 40px;
  }
  &__facts {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__genres {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    column-gap: 5px;
  }

  &__dot {
    width: 4px;
    height: 4px;
    background-color: black;
    border-radius: 4px;
    margin-left: 5px;
    margin-right: 5px;
  }

  &__actions {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
  }

  &__score {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  &__addfavorite {
    border: none;
    background-color: transparent;
  }

  &__play {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    border: 2px solid;
    color: $black;
    padding: 2px;
  }

  &__cast-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
</style>