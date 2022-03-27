import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Bootstrap import
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Animation Import
import AosVue from "aos-vue";
import 'animate.css';

createApp(App)
  .use(router)
  .use(AosVue)
  .mount('#app')
