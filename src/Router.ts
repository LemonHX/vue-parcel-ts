import VueRouter from "vue-router"
import Vue from "vue"
import HelloWorld from "./components/HelloWorld.vue"

Vue.use(VueRouter)
var router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "*",
            name: "HelloWorld",
            component: HelloWorld
        }
    ]
})

export default router
