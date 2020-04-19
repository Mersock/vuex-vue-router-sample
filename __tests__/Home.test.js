import {shallowMount,createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '../src/views/Home.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Component', () => {
  let getters
  let store
  beforeEach(() => {
    getters = {
      animalsCount: () => [],
      getAllCats: () => [],
      getAllDogs: () => []
    }

    store = new Vuex.Store({
      getters
    })
  })

  test('test', () => {
    const wrapper = shallowMount(Home, { store, localVue })
    console.log(wrapper)
    expect(true).toBe(true)
  })
})
