//封装axios的模块
import axios from 'axios'
import qs from 'qs'
import {MessageBox, Toast} from 'mint-ui'
import store from '../vuex/store'
import router from '../router'

// 创建一个新的Axios的实例(功能上)
const instance = axios.create({
  timeout: 10000, //设置请求超时时间为10
  baseURL: '/api' //所有请求都有一个基础路径
})

//添加请求拦截器
instance.interceptors.request.use((config) => {
  //处理Post请求参数（从对象转换为urlencoding） 请求前
  if (config.method.toUpperCase()==='POST' && config.data instanceof Object) {
    //qs.stringify()将对象 序列化成URL的形式，以&进行拼接
    config.data = qs.stringify(config.data) //username=tom&pwd=123
  }

  //处理token
  const token = store.state.token

  //如果token存在   只要浏览器端有token就携带给服务端
  if (token) {
    //将token添加到请求头中
    //config.headers.Authorization = token
    config.headers['Authorization'] = token

  } else {
    //如果没有token，但请求必须要token

    if (config.headers.checkToken) {
        throw new Error('没有token, 不发请求') //进入失败流程，不发请求
    }   
  }
  
  return config //必须返回config 不然不能发请求
})


//添加响应拦截器：
//成功回调：成功的结果不在是response，而是response.data
//失败回调： 统一处理请求异常
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {

    //1.没有token直接发请求的错误
    //如果error.response没有值
    if (!error.response) { 

      //router.currentRoute 当前路由对应的路由信息对象
      if (router.currentRoute.path!=='/login') {
         Toast(error.message)
         //跳转到登录页面
         router.replace('/login')        
      }
    } else {
      //2.发送请求但是token失效了
      if (error.response.status==401) { //错误状态码为401

        //退出登录
        store.dispatch('logout')

        //如果当前没有在登录界面,自动跳转到登录界面
        //router.currentRoute 当前路由对应的路由信息对象
        if (router.currentRoute.path !== '/login') {
          Toast(error.message)
          //跳转到登录页面
          router.replace('/login')
        }
      } else if (error.response.status==404) { //404错误
        Toast('此资源不存在') 
      }
      
      //其它
      MessageBox('提示', error.message)
    }
      return new Promise(() => {}) //返回一个pending状态的promise
  }
)

export default instance