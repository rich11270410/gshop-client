//对应shop功能模块的配置
import {
  RECEIVE_USER,
  RECEIVE_TOKEN,
  LOGOUT,
} from '../mutation-types.js'

import {
  reqAutoLogin
} from '../../api'

const state ={
  user: {}, //登录的用户
  token: localStorage.getItem('token_key'), //登录token标识
}

const mutations = {
  [RECEIVE_USER](state, {user}) {
    state.user = user
  },
  [RECEIVE_TOKEN](state, {token}) {
    state.token = token
  },
  [LOGOUT](state) {
    // state.token = null
    state.token = ''
    state.user = {}
  }
}

const actions = {
    //保存用户的同步action
  saveUser({commit}, user) {
    const token = user.token
    //将token保存到localStorage中  localStorage.setItem()存储对象
    localStorage.setItem('token_key', token)
    delete user.token
    commit(RECEIVE_USER, {user})
    commit(RECEIVE_TOKEN, {token})
  },

  //退出登录
  logout({commit}) {
    //清除local中的token
    localStorage.removeItem('token_key')

    //清除state中的user/token
    commit(LOGOUT)
  },

  //自动登录的异步action
  async autoLogin({commit}) {
    const result = await reqAutoLogin()
    if (result.code === 0) {
      const user = result.data
      commit(RECEIVE_USER, {
        user
      })
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}