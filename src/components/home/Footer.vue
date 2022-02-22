<template>

  <footer>

    <div class="container">

      <div class="row justify-content-md-center">

        <div class="col-md-7">
          <hr>
        </div>

        <div class="w-100"></div>

        <div class="col-md-7 icons">

          <a href="#" target="_blank" class="link-light">
            <i class="bi bi-discord"></i>
          </a>
          <a href="#" target="_blank" class="link-light">
            <i class="bi bi-twitter"></i>
          </a>

        </div>

        <div class="w-100"></div>

        <div class="col-md-7 footer-text">

          <a href="#" target="_blank" class="link-light">
            CGV
          </a>
          &
          <a href="#" target="_blank" class="link-light">
            CGU
          </a>

        </div>

      </div>

    </div>

  </footer>

</template>

<style scoped>
footer {
  background: center top / auto 100% url(@/assets/images/backgrounds/Footer-Home.png) no-repeat;
  filter: drop-shadow(0 0 0.80rem black);
  height: 30vh;
  color: white;
  font-size: 20px;

  margin-top: 100px;
}
@media (max-height: 839.98px), (max-width: 900px) { 
  footer {
    position: relative;
    background: center top / 100% 100% url(@/assets/images/backgrounds/Footer-Home.png) no-repeat;
  }
}
hr {
  border-top: 3px solid #9138fd;
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
</style>
