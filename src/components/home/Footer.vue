<script lang="ts" setup>
import FooterHome from "@/assets/images/backgrounds/Footer-Home.png"
import FooterRoadmap from "@/assets/images/backgrounds/Footer-Roadmap.png"

const props = defineProps(['background'])
const FooterImage = ((props["background"] == "Home") ? FooterHome : FooterRoadmap);
</script>
<template>

  <footer :style=" { backgroundImage: `url(${FooterImage})` }">

    <div class="container">

      <div class="row justify-content-md-center">

        <aos-vue 
          animation="zoom-in-down" duration="350" offset="-650"
          class="col-md-7">

          <hr>
        </aos-vue>

        <div class="w-100"></div>

        <aos-vue 
          animation="zoom-in-up" duration="350" offset="-700"
          class="col-md-7 icons">

          <a href="#" target="_blank" class="link-light">
            <i class="bi bi-discord"></i>
          </a>
          <a href="#" target="_blank" class="link-light">
            <i class="bi bi-twitter"></i>
          </a>

        </aos-vue>

        <div class="w-100"></div>

        <aos-vue
          animation="zoom-in-up" duration="350" offset="-700"
          class="col-md-7 footer-text">

          <a href="#" target="_blank" class="link-light">
            CGV
          </a>
          &
          <a href="#" target="_blank" class="link-light">
            CGU
          </a>

        </aos-vue>

      </div>

    </div>

  </footer>

</template>

<script lang="ts">
export default {
  props: ["hrColor"],
  name: "Footer",
  data() { 
    return { 
      hrColor: this.hrColor
    }
  }
}
</script>

<style scoped>
footer {
  background-position: center top;
  background-size: auto 100%;
  background-repeat: no-repeat;
  filter: drop-shadow(0 0 0.80rem black);
  height: 30vh;
  color: white;
  font-size: 20px;

  margin-top: 100px;
}
@media (max-height: 839.98px), (max-width: 900px) { 
  footer {
    position: relative;
    background-size: 100% 100%;
  }
}
hr {
  border-top: 3px solid v-bind(hrColor);
  border-radius: 500px;
  opacity: 0.8;
}
.container {
  padding-top: 120px;
}
.icons {
  font-size: 40px;
  text-align: center;
}
.icons > a {
  margin: 0 15px;
}
.footer-text {
  margin-top: 5px;

  text-align: center;
  font-size: 15px;

  color: rgb(95, 95, 95);
  font-family: 'Roboto';
}
.footer-text > a {
  text-decoration: none;
  
  color: rgb(95, 95, 95);
}
@media (min-height: 1200px) {
  .container {
    padding-top: 25%;
  }
}
</style>
