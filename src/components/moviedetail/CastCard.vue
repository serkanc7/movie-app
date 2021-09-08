<template>
  <div class="cast-card">
    <img class="cast-card__img" :src="castdata.photourl" alt="" />
    <div class="cast-card__info">
      <div class="cast-card__name">{{ castdata.name }}</div>
      <div class="cast-card__character">{{ castdata.character }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cast"],
  setup({ cast }) {
    const castdata = {
      name: cast.name,
      character: cast.character,
      photourl: `https://image.tmdb.org/t/p/w300/${cast.profile_path}`,
    };

    return {
      castdata,
    };
  },
};
</script>
<style lang="scss" scoped>
.cast-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.5) 0px 2px 5px 1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  text-align: center;

  &__img {
    width: 100%;
    flex: 4;
  }

  &__info {
    margin-top: 10px;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 16px;
    @include mq(lg, max) {
      height: 50px;
    }
  }

  &__name {
    font-weight: bold;
    margin-bottom: 5px;
  }

  &__character {
    margin-bottom: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>