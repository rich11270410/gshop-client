//对应msite功能模块的配置
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
} from '../mutation-types.js'

import {
  reqAddress,
  reqCategory,
  reqShops
} from '../../api'

const state ={
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {}, // 地址信息对象
  categorys: [], // 分类数组
  shops: [] //商家数组
}

const mutations = {
   [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  }
}

const actions = {
  //请求获取当前地址的异步action
  async getAddress({commit,state}) {
    //1.发异步ajax请求
    const {longitude,latitude} = state
    const result = await reqAddress(longitude, latitude)
    //2.发送请求成功后，提交mutation
    if (result.code === 0) {
      const address = result.data
      //同步执行mutation方法
      commit(RECEIVE_ADDRESS, {
        address
      })
    }
  },

  //请求获取商品分类列表的异步action
  async getCategorys({commit,state}) {
    //1.发异步ajax请求
    const result = await reqCategory()
    //2.发送请求成功后，提交mutation
    if (result.code === 0) {
      const categorys = result.data
      //同步执行mutation方法
      commit(RECEIVE_CATEGORYS, {
        categorys
      })
    }
  },

  //请求获取商家列表的异步action
  async getShops({commit,state}) {
    const {longitude,latitude} = state
    //1.发异步ajax请求
    const result = await reqShops({longitude,latitude})
    //2.发送请求成功后，提交mutation
    if (result.code === 0) {
      const shops = result.data
      //同步执行mutation方法
      commit(RECEIVE_SHOPS, {
        shops
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