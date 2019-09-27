//自定义过滤器模块
/*
功能：对要显示的数据进行特定格式化后在显示
注意：并没有改变原本的数据，可是产生新的对应的数据
*/

import Vue from 'vue'
import moment from 'moment'

//日期格式化过滤器
Vue.filter('date-format', (value, formatString) => {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss'
  return moment(value).format(formatString)
})