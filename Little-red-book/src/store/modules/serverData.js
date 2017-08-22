import {
  GET_HOME_DATA,
  GET_FIND_DATA,
  GET_BUY_DATA,
  RENDER_DETAIL,
  HIDDEN_DETAIL_COP
} from '../mutation-types'
import axios from 'axios'

const state = {
  homeData: [],
  findData: {},
  buyData: {
    product: []
  },
  detailItem: {},
  showDetail: false
}

const getters = {
  getHomeData: (state) => state.homeData,
  getFindData: (state) => state.findData,
  getBuyData: (state) => state.buyData,
  getDetailItem: (state) => state.detailItem,
  getShowDetail: (state) => state.showDetail
}

const actions = {
  pullHomeData ({ commit }, type) {
    return new Promise((resolve, reject) => {
      axios.get('http://sevenlove.site/api/homeData')
        .then(data => data.data.homeData)
        .then(data => {
          commit(GET_HOME_DATA, {
            data,
            type
          })
          resolve()
        }).catch(err => {
          reject(err)
          throw new Error(err)
        })
    })    
  },
  pullFindData ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('http://sevenlove.site/api/findData')
        .then(data => data.data)
        .then(data => {
          commit(GET_FIND_DATA, data)
          resolve()
        }).catch(err => {
          reject(err)
          throw new Error(err)
        })
    })    
  },
  pullBuyData ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('http://sevenlove.site/api/buyData')
        .then(data => data.data)
        .then(data => {
          commit(GET_BUY_DATA, data)
          resolve()
        }).catch(err => {
          reject(err)
          throw new Error(err)
        })
    })    
  }
}

const mutations = {
  [ GET_HOME_DATA ] (state, dataObj) {
    if (dataObj.type === 'all') {
      state.homeData = [
        dataObj.data.slice(0, Math.ceil(dataObj.data.length / 2)),
        dataObj.data.slice(Math.ceil(dataObj.data.length / 2))
      ]
    } else {
      let arr = dataObj.data.filter(item => item.type === dataObj.type)
      state.homeData = [
        arr.slice(0, Math.ceil(arr.length / 2)),
        arr.slice(Math.ceil(arr.length / 2))
      ]
    }    
  },
  [ GET_FIND_DATA ] (state, dataObj) {
    state.findData = dataObj
  },
  [ GET_BUY_DATA ] (state, dataObj) {
    state.buyData = {
      ...dataObj,
      product: [
        dataObj.product.slice(0, Math.ceil(dataObj.product.length / 2)),
        dataObj.product.slice(Math.ceil(dataObj.product.length / 2))
      ]
    }
  },
  [ RENDER_DETAIL ] (state, item) {
    state.showDetail = true
    state.detailItem = item
  },
  [ HIDDEN_DETAIL_COP ] (state) {
    state.showDetail = false
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}