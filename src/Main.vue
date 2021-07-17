<template>
  <div class="content">
    <div>
      <NavbarComponent />
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/shared/Navbar.vue";
import FooterComponent from "@/components/shared/Footer.vue";
export default {
  components: { FooterComponent, NavbarComponent },
  setup() {
    return {};
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
