/* 
包含n个接口请求函数的模块
每个函数的返回值都是promise对象
*/
import ajax from './ajax'

//根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax({
  //longitude 经度   longitude 纬度
  url: `/position/${latitude},${longitude}`
})

//获取食品分类列表
export const reqCategory = () => ajax('/index_category', {
  headers: {
    //标识需要token验证
    needToken: true
  }
})

//获取商铺列表
export const reqShops = ({longitude, latitude}) => ajax.get('/shops', {
  params: {
    latitude,
    longitude
  },
  headers: {
    //标识需要token验证
    needToken: true
  }
})

//发送短信验证码的接口
export const reqSendCode = (phone) => ajax({
  url: "/sendcode",
  params: {
    phone
  }
})

//用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax({
  url: '/login_pwd',
  method: 'POST',
  data: {
    name,
    pwd,
    captcha
  }
})

//手机号验证码登录
export const reqSmsLogin = ({phone, code}) => ajax({
  url: '/login_sms',
  method: 'POST',
  data: {
    phone,
    code
  }
})

//自动登录
export const reqAutoLogin = () => ajax('/auto_login',{
  headers: {
    //标识需要token验证
    needToken: true
  }
})

export const reqGoods = () => ajax('/goods')
export const reqInfo = () => ajax('/info')
export const reqRatings = () => ajax('/ratings')
