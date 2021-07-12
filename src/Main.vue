<template>
  <div class="content">
    <NavbarComponent />
    <router-view />
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
}
</style>
