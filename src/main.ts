import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Custom import
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

//import VueErdJsPlugin from 'vue-erdjs'

const app = createApp(App)

app.use(router)

//Vue.use(VueErdJsPlugin)

app.mount('#app')
