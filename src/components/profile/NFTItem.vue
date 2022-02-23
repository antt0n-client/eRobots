<template>
  <div class="col-sm">
    <div class="card">
      <img src="@/assets/images/robot.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Elrond Robots #147</h5>
        <p class="card-text">EROBOTS - #########</p>
      </div>
    </div>
  </div>
</template>
<!--
<script lang="ts">
export default {
  props: ["link", "text"],
}
</script>-->

<style scoped>
.card {
  background-color: #C9C9C9;
  border: 4px solid #C9C9C9;
  border-radius: 10px;
  margin-bottom: 25px;

  min-width: 18rem;
}
.card > img {
  border-radius: 10px;
  width: 100%;
}
.card-body {
  width: 100%;
}
.card-body .card-title {
  color: black;
  font-weight: 900;
  margin: 0;
  font-size: 18px;
}
.card-body .card-text {
  color: black;
  font-size: 14px;
}
</style>
