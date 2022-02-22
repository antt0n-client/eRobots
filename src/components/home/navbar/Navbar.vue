<template>

  <nav class="navbar navbar-expand-xl navbar-dark">

    <div class="container">

      <!-- Logo & Name -->
      <a class="navbar-brand" href="/">
        <img src="@/assets/images/robot.png" width="60" height="60" class="d-inline-block align-top" alt="">
        Elrond Robots
      </a>
      
      <button class="navbar-toggler navbar-toggler x collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
              aria-bs-controls="navbarNav"
              aria-bs-expanded="false" 
              aria-bs-label="Toggle navigation">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      
      
      <!-- Items (with Navlink component) -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
            <NavLink link="/" text="Home" />
            <NavLink link="/roadmap" text="RoadMap" />
        </ul>

        <div class="button-container">

          <RouterLink to="/mint">
            <button type="button" class="btn btn-custom btn-mint animate__animated animate__headShake animate__delay-5s"> 
              <img src="@/assets/icons/shopbag.svg"> 
              Mint
            </button>
          </RouterLink>

          <RouterLink to="/profile">
            <button type="button" class="btn btn-custom"> 
              <img src="@/assets/icons/profile.svg">  
              Profile
            </button>
          </RouterLink>

          <RouterLink to="/login">
            <button type="button" class="btn btn-custom"> 
              <img class="d-inline-block" src="@/assets/icons/thunder.svg"> 
              Login
            </button>
          </RouterLink>
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
  }, 
  mounted() {
    $('.navbar-collapse').on('shown.bs.collapse', function() {
      $('body', 'html').css("overflow", "hidden");
    });
    $('.navbar-collapse').on('hide.bs.collapse', function() {
      $('body', 'html').css("overflow", "auto");
    });

    
    const navbarCollapse = $('.navbar-collapse')
    $( window ).resize(function() {
      if ($( window ).width() > 1199.98) {
        if (navbarCollapse.hasClass('show')) {
          $('body', 'html').css("overflow", "auto");
          navbarCollapse.collapse("hide");
        }
      }
    });

    const navLinks = document.querySelectorAll('.nav-item')
    navLinks.forEach((l) => {
    l.addEventListener('click', () => { 
      navbarCollapse.collapse("hide")
     })
})
  }
}

</script>

<style scoped>
nav {
  font-family: "Roboto";
  font-size: 20px;
}
.navbar-brand {
  display: flex;
  align-items: center;

  text-decoration: underline;
  font-weight: 300;
  font-size: 22px;
  color: #ffde03
}
.navbar-brand > img {
  border-radius: 100%;
  margin-right: 10px;
}
.button-container {
  display: flex;
  width: 100%;
  justify-content: end;
}
@media (max-width: 1199.98px) { 
  .button-container {
    justify-content: center;
    padding-bottom: 25px;
    border-bottom: solid 1px white;
  }
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


/* FullScreen mobile navigation */

.navbar-toggler {
  border: none;
}
.navbar-toggler .icon-bar {
  height: 2px;
  width: 22px;
  border-radius: 1px;
  display: block;
  background-color: #B6B6B6;
	-webkit-transition: all 0.2s;
	transition: all 0.2s;
}
.navbar-toggler .icon-bar + .icon-bar {
    margin-top: 4px;
}

/*---Animation menu (create X)---*/
.navbar-toggler.x .icon-bar:nth-of-type(1) {
	-webkit-transform: translateX(3px) rotate(45deg); /* Safari 3-8 & Chrome 4-35 & Opera 15-22 */
	-ms-transform: translateX(3px) rotate(45deg); /* IE 9 */
  -moz-transform: translateX(3px) rotate(45deg); /* Firefox 3-15 */
  -o-transform: translateX(3px) rotate(45deg); /* Opera 10-14 */
	transform: translateX(3px) rotate(45deg);

	-webkit-transform-origin: 10% 10%;
	-ms-transform-origin: 10% 10%;
  -moz-transform-origin: 10% 10%;
  -o-transform-origin: 10% 10%;
	transform-origin: 10% 10%;
}

.navbar-toggler.x .icon-bar:nth-of-type(2) {
	opacity: 0;
	filter: alpha(opacity=0); /* For IE8 and earlier */
  -moz-opacity:0; /* Older Firefox 1 */
}
.navbar-toggler.x .icon-bar:nth-of-type(3) {
  -webkit-transform: translateX(3px) rotate(-45deg);
	-ms-transform: translateX(3px) rotate(-45deg);
  -moz-transform: translateX(3px)rotate(-45deg);
  -o-transform: translateX(3px) rotate(-45deg);
	transform: translateX(3px) rotate(-45deg);

  -webkit-transform-origin: 10% 90%;
	-ms-transform-origin: 10% 90%;
  -moz-transform-origin: 10% 90%;
  -o-transform-origin: 10% 90%;
	transform-origin: 10% 90%;
}
.navbar-toggler.x.collapsed .icon-bar:nth-of-type(1) {
	-webkit-transform: rotate(0);
	-ms-transform: rotate(0);
  -moz-transform: rotate(0);
  -o-transform: rotate(0);
	transform: rotate(0);
}
.navbar-toggler.x.collapsed .icon-bar:nth-of-type(2) {
	opacity: 1;
	filter: alpha(opacity=100);
  -moz-opacity:1;
}
.navbar-toggler.x.collapsed .icon-bar:nth-of-type(3) {
	-webkit-transform: rotate(0);
	-ms-transform: rotate(0);
  -moz-transform: rotate(0);
  -o-transform: rotate(0);
	transform: rotate(0);
}


@media only screen and (max-width : 1199.98px) {
    #navbarNav{
      height: 100vh !important;
    }
    .button-container {
      margin-top: 25px;
      padding: 0;

      padding-top: 25px;
      border: none;
      border-top: solid 1px white;

      justify-content: space-around;
    }
}

@media only screen and (min-device-width : 1200px) {
    #navbarNav{
        height: auto;
    }
}
</style>

<style>
@media only screen and (max-width : 1199.98px) {
    a.nav-link {
      font-size: 25px;
      margin-top: 25px;
    }
}
</style>
