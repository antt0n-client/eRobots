<template>

  <nav class="navbar navbar-expand-md navbar-light">

    <div class="container">

      <!-- Logo & Name -->
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/creators/torahime.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Elrond Robots
      </a>
      
      <!-- Button for mobile -->
      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-bs-controls="navbarNav" 
              aria-bs-expanded="false" 
              aria-bs-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Items (with Navlink component) -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
            <NavLink link="/" text="Home" />
            <NavLink link="/roadmap" text="RoadMap" />
        </ul>

        <div class="justify-content-end d-flex w-100">
          <button type="button" class="btn btn-custom btn-mint"> 
            <img src="@/assets/icons/shopbag.svg"> 
            Mint
          </button>

          <button type="button" class="btn btn-custom"> 
            <img src="@/assets/icons/profile.svg">  
            Profile
          </button>

          <button type="button" class="btn btn-custom"> 
            <img class="d-inline-block" src="@/assets/icons/thunder.svg"> 
            Login
          </button>
        </div>

      </div>

    </div>
  </nav>

</template>

<script lang="ts">
import NavLink from "./Navlink.vue";

export default {
  name: "Home",
  components: {
    NavLink
  }
}
</script>

<style scoped>
nav {
  color: white;
  font-family: "Roboto";
}
.btn-custom {
  margin: 0 10px;
  border-radius: 10px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(163, 163, 163, 0.2);
  font-size: 18px;
  color: white;
  font-weight: 500;
}
.btn-custom > img {
  margin-right: 3px;
  width: 30px;
  height: 30px;
}
.btn-custom:hover,
.btn-custom:focus,
.btn-custom:active {
  background-color: rgb(255, 255, 255, 0.3);
  border-color: rgb(255, 255, 255, 0.3);
}
.btn-mint {
  border-color: rgba(255, 222, 3, 0.5);
}
.btn-mint:hover,
.btn-mint:focus,
.btn-mint:active {
  background-color: rgba(255, 222, 3, 0.6);
  border-color: rgb(255, 255, 255, 0.5);
  box-shadow: 0px 0px 15px rgba(255, 222, 3, 0.5);
}
</style>