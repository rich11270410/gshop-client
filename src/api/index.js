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
export const reqCategory = () => ajax('/index_category')

//获取商铺列表
export const reqShops = ({longitude, latitude}) => ajax.get('/shops', {
  params: {
    latitude,
    longitude
  }
})

