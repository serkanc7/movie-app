<template>
  <router-link :to="'/movie/' + movie.id" @click="scrollToTop">
    <div class="movie-card">
      <img class="movie-card__poster" :src="imgURL" :alt="title" />
    </div>
  </router-link>
</template>
<script>
import { computed } from "vue";
export default {
  props: ["movie"],
  setup({ movie }) {
    const imgURL = computed(() => {
      return `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    });
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    return {
      imgURL,
      scrollToTop,
    };
  },
};
</script>
<style lang="scss" scoped>
.movie-card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.8);
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: translateZ(0);
  transition: 0.3s;

  &:after {
    position: absolute;
    content: "";
    z-index: 10;
    width: 200%;
    height: 100%;
    top: -90%;
    left: -20px;
    opacity: 0.1;
    transform: rotate(45deg);
    background: linear-gradient(
      to top,
      transparent,
      #fff 15%,
      rgba(255, 255, 255, 0.5)
    );
    transition: 0.3s;
  }

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px 1.5px rgba(0, 0, 0, 0.6);
    transform: translateY(-3px) scale(1.05) rotateX(15deg);

    &:after {
      transform: rotate(25deg);
      top: -40%;
      opacity: 0.15;
    }
  }

  &__poster {
    width: 100%;
    height: 100%;
  }
}
</style>