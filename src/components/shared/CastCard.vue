<template>
  <div class="cast-card">
    <img :src="castdata.photourl" alt="" />
    <p>{{ castdata.name }}</p>
    <p>{{ castdata.character }}</p>
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
<style lang="scss">
.cast-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 200px;
  margin-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>