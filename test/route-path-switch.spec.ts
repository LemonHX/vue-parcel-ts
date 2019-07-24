import { mount, createLocalVue } from '@vue/test-utils'
// @ts-ignore
import HelloWorld from '../src/components/HelloWorld.vue'
import Buefy from 'buefy'

const localVue = createLocalVue()
localVue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas'
})

describe('helloworld', () => {
    test('这是一个普通的<del>高中生</del>', () => {
        const wrapper = mount(HelloWorld, {
            localVue,
            mocks: {
                $route: {
                    path: '/'
                }
            }
        })
        // expect(wrapper.isVueInstance()).toBeTruthy()
        expect(wrapper.vm.$route.path === '/').toBeTruthy()
    })
})
