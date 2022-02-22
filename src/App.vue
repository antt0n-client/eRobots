<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

body {
  min-height: 100vh;
  font-family: "Roboto";
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: center url(@/assets/images/backgrounds/background.png);
  height: 100000px;

  margin: 0;
  padding: 0;
}
</style>
