import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/shop/shop.vue'
import Goods from '../pages/shop/Goods.vue'
import Info from '../pages/shop/Info.vue'
import Ratings from '../pages/shop/Ratings.vue'

export default [
  {
    path: '/msite',
    component: MSite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: 'goods',
        component: Goods
      },
      {
        path: 'info',
        component: Info
      },
      {
        path: 'ratings',
        component: Ratings
      },
      {
        path: '',
        redirect: '/shop/goods'
      },
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
