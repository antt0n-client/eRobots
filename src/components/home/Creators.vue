<template>

  <div class="container">

    <div class="row justify-content-md-center">

        <div class="col-md-auto text-center animated animate__slideInUp animate__faster">
            <h2>The</h2>
            <h1>creators</h1>
        </div>

    </div>

    <div class="row justify-content-md-center text-center">

        <div class="col-lg-4 d-flex align-items-stretch animated animate__fadeInUp animate__fast">

          <div class="card" style="background-color: rgba(255, 166, 65, 0.2);">
            <img class="card-img-top" src="@/assets/images/creators/overgames.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title" id="overgames">@overgames</h5>
              <hr/>
              <p class="card-text">Passionate about programming and crypto. He takes care of the development of the discord bot as well as the communications parts.</p>
            </div>
          </div>

        </div>

        <div class="col-lg-4 d-flex align-items-stretch animated animate__fadeInUp animate__delay-2s animate__fast">
              
          <div class="card" style="background-color: rgba(122, 25, 164, 0.2);">
            <img class="card-img-top" src="@/assets/images/creators/timkyl.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title" id="timkyl">@timkyl2203</h5>
              <hr/>
              <p class="card-text">Passionate about crypto. He takes care of the communications of the project.</p>
            </div>
          </div>
              
        </div>

        <div class="col-lg-4 d-flex align-items-stretch animated animate__fadeInUp animate__delay-1s animate__fast">
              
          <div class="card" style="background-color: rgba(163, 24, 100, 0.2);">
            <img class="card-img-top" src="@/assets/images/creators/torahime.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title" id="torahime">@torahime</h5>
              <hr/>
              <p class="card-text">Passionate about graphic design for 7 years. He takes care of the design of the eRobots and the general graphic appearance of the project.</p>
            </div>
          </div>

        </div>

    </div>

  </div>

</template>

<style scoped>
h1, h2 {
  font-family: "Robot";
  text-transform: uppercase;
  margin: 0px;
  font-size: 35px;
}
h1 {
  font-size: 100px;
  background: linear-gradient(90deg, #0060ff, #00a8ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: -20px;
}
@media (max-width: 600px) {
  h1 {
    font-size: 65px;
  }
}
@media (max-width: 370px) {
  h1 {
    font-size: 45px;
    margin-top: -10px;
  }
}
.card {
  margin: 25px;
  border-radius: 25px;
  border: none;
}
.card > img {
  border-radius: 20px;
}
.card-title {

  margin: -5px;
  
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
}
hr {
  width: 28%;
  margin: 10px auto;
  border-top: 2px solid grey;
  opacity: 80%;
}
/* Must duplicate code */
#overgames {
  background: linear-gradient(90deg, #2037e6, rgb(255, 166, 65));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
#timkyl {
  background: linear-gradient(90deg, rgb(122, 25, 164), #AE3EDE);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
#torahime {
  background: linear-gradient(90deg, rgb(88, 27, 61), rgb(255, 0, 140));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.card-text {
  font-size: 19px;
  line-height: 1.1;
}

</style>