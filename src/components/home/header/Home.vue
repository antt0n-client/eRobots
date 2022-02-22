<template>
    <div class="container head-custom">

      <div class="row align-items-center align-self-center animate__animated animate__zoomIn animate__faster">

        <div class="col-xl-6">
          <img class="img-fluid" alt="eRobot Logo with baseline" src="@/assets/images/logo/logobaseline.png" width="100%"/>
        </div>
        
        <div class="col-xl-6">
          <p>The vert first collection of NFTs arrives on Elrond! The eRobots respect Elrond's ideology. Very small quantity, exclusivity and usefulness. <span class="text">25% of our royalties will be donated to the fight against global warming.</span></p>
          <p>No more than 666 eRobots will be minted. Our goal is to revitalize the art market using blockchain. Every eRobots attributes as well as every special robots are individually crafted by our Artist.</p>
        </div>
        
      </div>

    </div>
</template>

<style scoped>
.head-custom {
  display: flex; 
  height: 80vh;
}
@media (max-height: 839.98px), (max-width: 900px) { 
  .head-custom {
    height: auto;
    margin-top: 15px;
    margin-bottom: 35px;
  }
}
@media (max-width: 900px) {
  .head-custom {
    font-size: 18px;
  }
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
</style>