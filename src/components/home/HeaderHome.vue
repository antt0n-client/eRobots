<template>

  <header>
    
    <!-- Navbar - same for all pages -->
    <Navbar class="animate__animated animate__fadeInDown animate__faster animate__delay-2s"/>

    <HomeHeader v-if="background == 'Home'" />

    <RoadmapHeader v-if="background == 'Roadmap'" />

    <StatsHeader :color="hrColor"/>

  </header>

</template>

<script lang="ts">
import Navbar from "./navbar/Navbar.vue";
import StatsHeader from "./StatsHeader.vue";
import HomeHeader from "./header/Home.vue";
import RoadmapHeader from "./header/Roadmap.vue";

export default {
  props: ["background", "hrColor"],
  name: "Header",
  components: {
    Navbar,
    StatsHeader,
    HomeHeader,
    RoadmapHeader
},
  data() { 
    return { backgroundUrl: "url(/src/assets/images/backgrounds/Header-" + this.background + ".png" }
  }
}
</script>

<style scoped>
header {
  background: center top / auto 100% v-bind(backgroundUrl) no-repeat;
  filter: drop-shadow(0 0 0.80rem black);
  height: 110vh;
  color: white;
  font-size: 20px;
  z-index: 0;
}
@media (max-height: 839.98px), (max-width: 900px) { 
  header {
    position: relative;
    background: center top / 100% 100% v-bind(backgroundUrl) no-repeat;
  }
}

</style>
