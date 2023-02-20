import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  admin_main
} from './admin_main';
const Login = () => import('../views/Login.vue');

Vue.use(VueRouter)

let routes = [];
routes = [{
    path: '/admin_main',
    redirect: '/admin_main/main'
  },
  //管理员的路由
  admin_main,
  //教师的路由
  // teacher_main,
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isPublic: true //使用可以直接访问
    }
  }
]

if (localStorage.a_token) {
  routes.push({
    path: '/',
    redirect: '/admin_main'
  })
}
const router = new VueRouter({
  mode: 'history',
  routes
})
//to:  即将要进入的目标 路由对象
//from: 当前导航正要离开的路由
//next()：接着走
router.beforeEach((to, form, next) => {
  //每次路由跳转之前，去本地看看有没有管理员的token，但是teacher的存在也可以
  if (!to.meta.isPublic && !localStorage.a_token ) {
    return next('/login');
  }

  next();
})
export default router