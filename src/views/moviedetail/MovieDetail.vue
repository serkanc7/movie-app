<template>
  <section class="moviedetail container">
    <header class="moviedetail__header">
      <div class="moviedetail__poster">
        <img :src="movie.posterpath" alt="" />
      </div>
      <div class="moviedetail__details">
        <h1 class="moviedetail__title">
          {{ movie.title }}
          <span class="moviedetail__realese-year">{{ movie.releaseyear }}</span>
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
            >{{ movie.rating }}% <img src="@/assets/svg/star.svg" alt=""
          /></span>
          <button class="moviedetail__addfavorite" @click="toggleFavorite">
            <svg
              :class="{ favorite: hasFavourite }"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path
                d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
                stroke="red"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button class="moviedetail__play" @click="toggleTrailer">
            <img src="@/assets/svg/play.svg" alt="" /> Play Trailer
          </button>
          <TrailerComponent
            v-if="buttonTriggered"
            :toggleTrailer="() => toggleTrailer()"
            :trailer="movie.trailer"
          />
        </div>
        <div class="moviedetail__tagline">
          {{ movie.tagline }}
        </div>
        <div class="moviedetail__overview">
          <h2 class="moviedetail__overview-title" v-if="movie.overview">
            Overview
          </h2>
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
          v-for="cast in movie.casts.slice(0, 6)"
          :key="cast.id"
          :cast="cast"
        />
      </div>
    </section>
    <section>
      <h2 v-if="movie.similarmovies">Similar Movies</h2>
      <div class="moviedetail__similarmovies">
        <MoviePosterComponent
          v-for="similarmovie in movie.similarmovies"
          :movie="similarmovie"
          :key="similarmovie.id"
          class="similar__movie"
        />
      </div>

      <!-- <p v-for="similarmovie in movie.similarmovies">
        {{ similarmovie.title }}
      </p> -->
    </section>
  </section>
</template>

<script>
import { reactive, ref, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import CastCardComponent from "@/components/moviedetail/CastCard.vue";
import TrailerComponent from "@/components/moviedetail/Trailer.vue";
import MoviePosterComponent from "@/components/shared/MoviePoster.vue";
import env from "@/env.js";
export default {
  components: { CastCardComponent, TrailerComponent, MoviePosterComponent },
  setup() {
    const route = useRoute();

    const hasFavourite = ref(false);
    const buttonTriggered = ref(false);
    const toggleTrailer = () => {
      buttonTriggered.value = !buttonTriggered.value;
    };

    const toggleFavorite = () => {
      hasFavourite.value = !hasFavourite.value;
    };

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
      trailer: "",
      similarmovies: "",
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
          movie.rating = data.vote_average * 10;
          movie.directors = data.credits.crew.filter((person) => {
            return person.job === "Director";
          });
          movie.releaseyear = `(${data.release_date.slice(0, 4)})`;
          movie.releasedate = data.release_date.split("-").reverse().join("/");
          movie.casts = data.credits.cast.filter(
            (item) => item.profile_path != null
          );

          movie.genres = data.genres;
          movie.runtime = data.runtime;
          movie.trailer = `https://www.youtube.com/embed/${data.videos.results[0].key}`;
          movie.similarmovies = data.similar.results.slice(0, 6);

          console.log(data);
          console.log(movie.rating);
        });

    watchEffect(() => getMovie());

    return {
      movie,
      CastCardComponent,
      TrailerComponent,
      MoviePosterComponent,
      buttonTriggered,
      toggleTrailer,
      toggleFavorite,
      hasFavourite,
    };
  },
};
</script>

<style lang="scss" scoped>
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
    padding: 3px;
    background-color: white;
    border-radius: 5px;
  }

  &__cast-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__similarmovies {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    @include mq(md, max) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .favorite {
    fill: red;
  }
}
</style>