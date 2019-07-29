import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    mobile_menu: false
  },
  mutations: {
    switch_menu_state: state => state.mobile_menu ? state.mobile_menu = false : state.mobile_menu = true,
  }
})

export default store