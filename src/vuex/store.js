//vuex最核心管理对象模块: store
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import msite from './modules/msite'
import shop from './modules/shop'
import user from './modules/user'




//声明使用插件
Vue.use(Vuex)

export default new Vuex.Store({
  mutations, //总的mutations
  actions, //总的 actions
  getters,
  modules: {
    msite,
    shop,
    user
  }

})