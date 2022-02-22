<template>

  <header>
    
    <Navbar />

    <div class="container" style=" display: flex; height: 80vh;">

      <div class="row align-items-center align-self-center animate__animated animate__fadeInUp animate__faster">

        <div class="col-xl-6">
          <img alt="eRobot Logo with baseline" src="@/assets/images/logo/logobaseline.png" width="100%"/>
        </div>

        <div class="col-xl-6">
          <p>The vert first collection of NFTs arrives on Elrond! The eRobots respect Elrond's ideology. Very small quantity, exclusivity and usefulness. <span class="text">25% of our royalties will be donated to the fight against global warming.</span></p>
          <p>No more than 666 eRobots will be minted. Our goal is to revitalize the art market using blockchain. Every eRobots attributes as well as every special robots are individually crafted by our Artist.</p>
        </div>
        
      </div>

    </div>

    <div class="container">

      <div class="row justify-content-md-center align-items-center animate__animated animate__zoomIn animate__faster">
        
        <div class="col-md-8">
          <hr>
        </div>

        <div class="w-100"></div>

        <div class="col-md-3">
          <h1>243+ NFTs</h1>
          <h2>solds</h2>
        </div>

        <div class="col-md-3">
          <h1>178+ NFTs</h1>
          <h2>owners</h2>
        </div>

        <div class="col-md-auto">
          <h1>10+ EGLD</h1>
          <h2>to charity</h2>
        </div>
      </div>

    </div>

  </header>

</template>

<script lang="ts">
import Navbar from "./navbar/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar
  }
}
</script>

<style scoped>
header {
  background: center top / auto 100% url(@/assets/images/backgrounds/Header-Home.png) no-repeat;
  filter: drop-shadow(0 0 0.80rem black);
  height: 110vh;
  color: white;
  font-size: 20px;
}
p {
  top: 25px;
  position:relative;
}
span.text {
  color: #FFCB46;
  font-weight: bold;
  white-space: pre-wrap;
}
h1, h2 {
  font-weight: normal;
  margin: 0;
  letter-spacing: 1px;
}
h1 {
  font-size: 24px;
}
h2 {
  font-size: 20px;
  color: grey;
}
hr {
  border-top: 5px solid #9138fd;
  border-radius: 500px;
}
</style>
