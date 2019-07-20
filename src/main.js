
import Vue from 'vue';
import App from './App.vue';
import router from "./Router"
new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
