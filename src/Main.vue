<template>
  <div class="content">
    <div>
      <NavbarComponent />
      <router-view :key="route.fullPath" />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/shared/Navbar.vue";
import FooterComponent from "@/components/shared/Footer.vue";
import { useRoute } from "vue-router";
export default {
  components: { FooterComponent, NavbarComponent },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>

<style lang="scss">
.content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
