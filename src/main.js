import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import loading from './common/images/loading.gif'
import './validate'
import './mock/mockServer'
import './filters'
import store from './vuex/store'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import CartControl from './components/CartControl/CartControl.vue'
import * as API from './api'
import i18n from './i18n'


Vue.use(VueLazyload, { // 内部定义了一个全局指令: lazy
  loading,
})

Vue.config.productionTip = false

//将包含所有接口请求函数方法的对象保存到Vue原型对象上
Vue.prototype.$API = API

//注册全局组件标签
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component('CartControl', CartControl)
Vue.component(Button.name, Button)

Vue.prototype.$eventBus = new Vue()

new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
