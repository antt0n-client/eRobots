<template>
    <div class="container head-custom justify-content-md-center">

      <div class="row align-self-center text-center animate__animated animate__zoomIn animate__faster">

        <div class="col-xl-12">
          <h1>Roadmap</h1>
        </div>
        
        <div class="col-xl-12">
          <p>Discover the <span class="text">history of eRobots</span>, from their creation to the first sales.</p>
          <p>Follow the present and see what's in store for the future.</p>
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
h1 {
  font-family: "Robot";
  text-transform: uppercase;
  margin: 0px;
  font-size: 115px;
  background: linear-gradient(90deg, #ffff00, #f5c246);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 70px;

  text-shadow: 0px 0px 15px rgba(255, 255, 0, 0.6);
}
p {
  margin: 0;
  font-size: 24px;
  font-family: Roboto;
}
span.text {
  color: #ffff00;
}
@media (max-width: 900px) {
  h1 {
    font-size: 80px;
  }
  p {
    font-size: 21px;
  }
}
@media (max-width: 450px) {
  h1 {
    font-size: 60px;
  }
  p {
    font-size: 19px;
  }
}
</style>