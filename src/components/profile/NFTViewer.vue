<script lang="ts">
import NTFItem from "./NFTItem.vue"

export default {
  components: {
    NTFItem
  }
}
</script>

<template>

  <div class="container">

    <nav class="d-flex align-items-center justify-content-between">
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Inventory</button>
        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">On Sale</button>
      </div>
      <h1 class="">NTFs you own : <span>8</span></h1>
    </nav>

    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

        <div class="row tab-content-container">

          <NTFItem v-for="_ in 8"/>

        </div>

      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

        <div class="row tab-content-container">

          <NTFItem v-for="_ in 8"/>
          
        </div>

      </div>
    </div>

  </div>

</template>

<style scoped>
.container {
  background-color: rgba(201, 201, 201, 0.55);
  padding: 25px;
  border-radius: 30px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

  margin-top: 10px;
  font-family: 'Roboto';
  color: grey;

  margin-bottom: 30px;
}
nav > h1 {
  margin: 0;
  font-size: 17px;
}
nav > h1 > span {
  color: rgb(211, 184, 7);
  font-weight: 800;
}
.nav-tabs .nav-link:hover {
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}
.nav-tabs .nav-link.active {
  background-color: transparent;
  border-color: grey;
  /* Hiding line bottom */
  border-bottom: 1px solid rgba(201, 201, 201, 0.5);
}
.nav-tabs .nav-link {
  color: grey;
  border-bottom-color: grey;
  border-radius: 0;
}
.tab-content-container {
  padding-top: 20px;
}
</style>