import Vue from 'vue'
import router from './Router'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'
Vue.component('vue-fontawesome', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas'
})

let _ = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
