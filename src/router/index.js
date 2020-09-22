import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Home/index.vue'
import My from '../views/My/index.vue'
import News from '../views/News/index'
import Yun from '../views/Home/yun'
import Ml from '../views/Home/Medical/index'
import Login from '../views/Login/index'
import VerificationCode from '../views/Login/VerificationCode'
import UpdatePassword from '../views/Login/UpdatePassword'
import Perfectmessage from '../views/Login/Perfectmessage'
import perfect from '../views/Login/perfect'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },{
    path: '/yun',
    name: 'Yun',
    component: Yun
  },
  {
    path: '/ml',
    name: 'Ml',
    component: Ml
  },
  {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/verCode',
        name: 'VerificationCode',
        component: VerificationCode
    }, {
        path: '/upd',
        name: 'UpdatePassword',
        component: UpdatePassword
    }, {
        path: '/Perfectmessage',
        name: 'Perfectmessage',
        component: Perfectmessage
    }, {
        path: '/perfect',
        name: 'perfect',
        component: perfect
    }

  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
