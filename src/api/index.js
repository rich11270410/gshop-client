/* 
包含n个接口请求函数的模块
每个函数的返回值都是promise对象
*/
import ajax from './ajax'

export const reqAddress = (longitude, latitude) => ajax({
  //longitude 经度   longitude 纬度
  url: `/position/${latitude},${longitude}`
})

