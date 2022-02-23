<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import 'animate.css'
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

  margin: 0;
  padding: 0;
}
.container {
  overflow: hidden;
}
</style>

