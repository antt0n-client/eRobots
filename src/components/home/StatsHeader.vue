<template>
    <div class="container numbers-custom">

        <div class="row justify-content-md-center align-items-center">
        
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
</template>

<script lang="ts">
export default {
  props: ["color"],
  data() {
    return {
      color: this.color
    }
  }
  
}
</script>

<style scoped>
@media (max-height: 820px), (max-width: 767px) { 
  h1 {
    font-size: 19px!important;
  }
  h2 {
    font-size: 17px!important;
  }
  hr {
    margin: 0;
  }
}
@media (max-width: 900px) {
  .numbers-custom {
    text-align: center;
  }
  .numbers-custom > div > div:not(.w-100) {
    margin: 10px 0px;
  }
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
  border-top: 5px solid v-bind(color);
  border-radius: 500px;
}
</style>