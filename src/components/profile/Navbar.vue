<template>

<nav class="navbar navbar-expand-xl navbar-dark">

    <div class="container">

      <!-- Logo & Name -->
      <a class="navbar-brand" href="/">
        <img src="@/assets/images/logo/logo.png" class="d-inline-block align-top" alt="">
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
        
        <ul class="navbar-nav">
          <li class="nav-item active animated fadeInDown address-box">
            <p>address: <span class="address-text">erd1nz42knvgmxpevepsyvq9dx3wzdgtd6lmu96y28tuupayazgx4fvs3w9d09</span></p>
          </li>
        </ul>

        <div class="button-container">

          <RouterLink to="/logout">
            <button type="button" class="btn btn-custom"> 
              <img class="d-inline-block" src="@/assets/icons/thunder.svg"> 
              Logout
            </button>
          </RouterLink>

        </div>

      </div>

    </div>
  </nav>

</template>

<style scoped>
.container {
  background-color: rgba(201, 201, 201, 0.55);
  padding: 25px;
  border-radius: 30px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
nav {
  font-family: "Roboto";
  font-size: 20px;
  padding-top: 30px;
}
.navbar-brand {
  display: flex;
  align-items: center;

  text-decoration: underline;
  font-weight: 300;
  font-size: 22px;
  color: #ffde03
}
.navbar-nav {
  min-width: 80%;
}
.navbar-brand > img {
  height: 40px;
  border-right: 1px solid rgb(168, 168, 168);
  padding-right: 20px;
}
.address-box {
  font-size: 14px;
}
.address-box > p {
  color: grey;
  margin: 0;
}
span.address-text {
  font-weight: 500;
  color: rgb(211, 184, 7);
  word-break: break-all;
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
  border: 4px solid rgb(236, 205, 1);
  background-color: rgba(163, 163, 163, 0.3);
  font-size: 18px;
  color: rgb(177, 176, 176);
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
  color: white;
  background-color: rgba(163, 163, 163, 1);
  border-color: #FFD700;
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
    .button-container {
      margin-top: 25px;
      padding: 0;

      padding-top: 25px;
      border: none;
      border-top: solid 1px white;

      justify-content: center;
    }
    .address-box { 
      margin-top: 15px;
    }
    .navbar-brand > img { 
      border: none;
      padding: none;
    }
}

</style>

<script lang="ts">
export default {
  mounted() {    
    const navbarCollapse = $('.navbar-collapse')
    $( window ).resize(function() {
      if ($( window ).width() > 1199.98) {
        if (navbarCollapse.hasClass('show')) {
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