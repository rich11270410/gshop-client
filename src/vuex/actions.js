//包含n个用于间接接更新状态数据的方法的对象
//可以包含异步操作/逻辑操作代码
import {
  reqAddress,
  reqCategory,
  reqShops
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  //请求获取当前地址的异步action
  async getAddress ({commit, state}) {
    //1.发异步ajax请求
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    //2.发送请求成功后，提交mutation
    if (result.code === 0) {
      const address = result.data
      //同步执行mutation方法
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  //请求获取商品分类列表的异步action
    async getCategorys ({commit, state}) {
      //1.发异步ajax请求
      const result = await reqCategory()
      //2.发送请求成功后，提交mutation
      if (result.code === 0) {
        const categorys = result.data
        //同步执行mutation方法
        commit(RECEIVE_CATEGORYS, {categorys})
      }
  },

    //请求获取商家列表的异步action
    async getShops ({commit, state}) {
      const {longitude, latitude} = state
      //1.发异步ajax请求
      const result = await reqShops({longitude, latitude})
      //2.发送请求成功后，提交mutation
      if (result.code === 0) {
        const shops = result.data
        //同步执行mutation方法
        commit(RECEIVE_SHOPS, {shops})
      }
  }

}



