import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

shallowMount(HelloWorld, {
    localVue
})

var $route = {
    path: '/'
}

describe('helloworld', () => {
    test('这是一个普通的<del>高中生</del>', () => {
        const wrapper = shallowMount(HelloWorld, {
            mocks: {
                $route
            }
        })
        // expect(wrapper.isVueInstance()).toBeTruthy()
        expect(wrapper.vm.$route.path === '/').toBeTruthy()
    })
})