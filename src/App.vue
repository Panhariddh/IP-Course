<template>
  <div class="layout">
    <!-- Header -->
    <HeaderComponent />

    <div class="content">
      <!-- Menu -->
      <MenuComponent />

      <!-- Main Content -->
      <router-view />
    </div>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import MenuComponent from './components/MenuComponent.vue';

export default {
  components: {
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Same styles as before */
.layout {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

.content {
  display: flex;
  flex: 1;
}

</style>
