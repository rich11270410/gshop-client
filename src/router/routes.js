import Miste from '../pages/Miste/Miste.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

export default [
  {
    path: '/miste',
    component: Miste,
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
    path: '/',
    redirect: '/miste'
  }
]
