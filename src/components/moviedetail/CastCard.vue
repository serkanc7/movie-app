<template>
  <div class="cast-card">
    <img class="cast-card__img" :src="castdata.photourl" alt="" />
    <div class="cast-card__name">{{ castdata.name }}</div>
    <div class="cast-card__character">{{ castdata.character }}</div>
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
  align-items: stretch;
  justify-content: flex-start;
  width: 150px;
  margin-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.5) 0px 2px 5px 1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  text-align: center;

  &__img {
    height: 180px;
  }

  &__name {
    font-weight: bold;
    font-size: 14px;
    margin: 5px 0;
  }

  &__character {
    font-size: 14px;
    margin-bottom: 5px;
  }
}
</style>