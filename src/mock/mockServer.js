//使用mockjs定义mock接口的模块
import Mock from 'mockjs'
import data from './data.json' //js对象

//自定义mock接口: goods
Mock.mock('/api/goods', {code: 0, data: data.goods})

//自定义mock接口:info
Mock.mock('/api/info', {code: 0, data: data.info})

//自定义mock接口: ratings
Mock.mock('/api/ratings', {code: 0, data: data.ratings})

//console.log('mockServer...')
//不用向外暴露任何东西