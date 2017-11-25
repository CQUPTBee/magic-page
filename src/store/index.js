/*
 * @Author: huxiaoqing
 * @Date: 2017-11-23 20:42:05
 * @Last Modified by:   asus
 * @Last Modified time: 2017-11-24 01:57:11
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {}
})

Vue.$store = store

export default store
