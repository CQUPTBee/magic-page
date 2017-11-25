/*
 * @Author:huxiaoqing
 * @Date: 2017-11-23 21:08:42
 * @Last Modified by:   asus
 * @Last Modified time: 2017-11-23 21:59:05
 */
import Vue from 'vue'
import Router from 'vue-router'
// import map from './map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'magicPage',
      meta: {},
      component: (resolve) => { require(['../views/index.vue'], resolve) }
    }, {
      path: '*',
      name: '404',
      meta: {},
      component: (resolve) => { require(['../views/']) }
    }
  ]
})
