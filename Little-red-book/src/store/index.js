import Vue from 'vue'
import Vuex from 'vuex'

import headerState from './modules/headerState'
import serverData from './modules/serverData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    serverData,
    headerState
  }
})