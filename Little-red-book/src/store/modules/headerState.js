import {
  CHANGE_HEADER_RIGHT_ICON,
  SHOW_SEARCH_COP
} from '../mutation-types'

const state = {
  headerState: {
    showHeader: true,
    iconClass: '',
    showSearch: false
  }
  
}

const getters = {
  getHeaderState: (state) => state.headerState  
}

const mutations = {
  [ CHANGE_HEADER_RIGHT_ICON ] (state, iconClass) {
    state.headerState.iconClass = iconClass
    if (!iconClass) {
      state.headerState.showHeader = false
    } else {
      state.headerState.showHeader = true
    }  
  },
  [ SHOW_SEARCH_COP] (state) {
    state.headerState.showSearch = !state.headerState.showSearch
  }
}

export default {
  state,
  getters,
  mutations
}