import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld';

Vue.use(VueRouter)

var router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})

export default (router)
