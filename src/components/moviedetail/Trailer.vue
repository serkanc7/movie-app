<template>
  <div class="popup">
    <div class="popup__inner">
      <div class="popup__top">
        <div class="popup__text">Play Trailer</div>
        <button class="popup__close" @click="toggleTrailer">
          <img src="@/assets/svg/close.svg" alt="" />
        </button>
      </div>
      <iframe
        :src="trailer"
        class="popup__video"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  props: ["toggleTrailer", "trailer"],
  setup() {},
};
</script>
<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.9);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;

  &__inner {
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: stretch;

    padding-right: 150px;
    padding-left: 150px;

    @include mq(md, max) {
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  &__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__text {
    color: white;
  }

  &__close {
    padding: 0;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }

  &__video {
    width: 100%;
    height: 600px;
    @include mq(xl, max) {
      height: 500px;
    }
    @include mq(lg, max) {
      height: 400px;
    }
    @include mq(sm-mid, max) {
      height: 300px;
    }
  }
}
</style>