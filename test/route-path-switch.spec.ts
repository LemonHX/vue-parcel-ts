import { mount, createLocalVue } from '@vue/test-utils'
// @ts-ignore
import HelloWorld from '../src/components/HelloWorld.vue'
import Buefy from 'buefy'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas'
})
localVue.use(Vuex)

describe('helloworld.normal.spec.ts', () => {
    test('这是一个普通的<del>高中生</del>', () => {
        const wrapper = mount(HelloWorld, {
            localVue,
            mocks: {
                $route: {
                    path: '/'
                }
            }
        })
        expect(wrapper.isVueInstance()).toBeTruthy()
        expect(wrapper.vm.$route.path === '/').toBeTruthy()
    })
})

describe('helloworld.route.spec.ts', () => {
    test('它的路由是我们设定的 / ', () => {
        const wrapper = mount(HelloWorld, {
            localVue,
            mocks: {
                $route: {
                    path: '/'
                }
            }
        })
        expect(wrapper.vm.$route.path === '/').toBeTruthy()
    })
})

describe('helloworld.vuex.spec.ts', () => {
    test('一开始时他的VUEX计数是0', () => {
        const wrapper = mount(HelloWorld, {
            localVue,
            mocks: {
                $route: {
                    path: '/'
                }
            }
        })
        expect(wrapper.vm.count === 0).toBeTruthy()
    })
})