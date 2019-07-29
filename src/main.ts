import Vue from 'vue'
import router from './Router'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/scss/materialdesignicons.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import 'animate.css/animate.min.css'
Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconPack: 'mdi'
})

let _ = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
