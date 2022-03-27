<script lang="ts" setup>
import HeaderHome from '@/assets/images/backgrounds/Header-home.png'
import HeaderRoadmap from '@/assets/images/backgrounds/Header-Roadmap.png'

const props = defineProps(['background'])
const HeaderImage = ((props["background"] == "Home") ? HeaderHome : HeaderRoadmap);
</script>

<template>

  <header :style=" { backgroundImage: `url(${HeaderImage})` }" >
    
    <!-- Navbar - same for all pages -->
    <Navbar class="animate__animated animate__fadeInDown animate__faster animate__delay-2s"/>

    <div class="animate__animated animate__zoomIn animate__faster">
      <HomeHeader  v-if="background == 'Home'" />
      <RoadmapHeader v-if="background == 'Roadmap'" />
    </div>

    <StatsHeader class="animate__animated animate__zoomIn animate__faster animate__delay-2s" :color="hrColor"/>

  </header>

</template>

<script lang="ts">
import Navbar from "./navbar/Navbar.vue";
import StatsHeader from "./StatsHeader.vue";
import HomeHeader from "./header/Home.vue";
import RoadmapHeader from "./header/Roadmap.vue";

export default {
  props: ["hrColor"],
  name: "Header",
  components: {
    Navbar,
    StatsHeader,
    HomeHeader,
    RoadmapHeader
  }
}
</script>

<style scoped>
header {
  background-position: center top;
  background-size: auto 100%;
  background-repeat: no-repeat;
  filter: drop-shadow(0 0 0.80rem black);
  height: 110vh;
  color: white;
  font-size: 20px;
  z-index: 0;
}
@media (max-height: 839.98px), (max-width: 900px) { 
  header {
    position: relative;
    background-size: 100% 100%;
  }
}
@media (max-height: 820px), (max-width: 767px) { 
  header {
    height: 150vh;
  }
}
</style>
