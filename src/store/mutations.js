/*
 * @Author: huxiaoqing
 * @Date: 2017-11-23 19:53:07
 * @Last Modified by:   asus
 * @Last Modified time: 2017-11-25 15:40:57
 *
 * @discribe 存放mutation
 */
import * as types from './mutationTypes'
const mutations = {
  [types.SET_COMPONENTS] (state, payload) {
    state.pageData.preComponentList.push(payload)
  }
//   ,

//   [types.SET_COMPONENTS_DATA] (state, payload) {
//     let {
//       index,
//       data
//     } = payload
//     state.pageData.preComponentList[index].data = data
//   }
}

export default mutations
