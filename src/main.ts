import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Custom import
//import VueErdJsPlugin from 'vue-erdjs'

const app = createApp(App)

app.use(router)

//Vue.use(VueErdJsPlugin)

app.mount('#app')
