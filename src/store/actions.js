/*
 * @Author: huxiaoqing
 * @Date: 2017-11-23 20:48:28
 * @Last Modified by:   asus
 * @Last Modified time: 2017-11-25 15:39:51
 */

import * as types from './mutationTypes'

const actions = {
  setComponents: ({commit}, payload) => {
    commit(types.SET_COMPONENTS, payload)
  }
  // ,
  // setComponentsData: ({commit}, payload) => {
  //   commit(types.SET_COMPONENTS_DATA, payload)
  // }
}

export default actions
