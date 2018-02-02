import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/pages/test'
import defaultPage from '@/pages/default'
// register
import login from '@/pages/register/login'
import register from '@/pages/register/register'
import userProtocol from '@/pages/register/userProtocol'
//saleCar
import concessionCarList from '@/pages/saleCar/concessionCarList'
import carDetail from '@/pages/saleCar/carDetail'

Vue.use(Router)

const router =  new Router({
  routes: [
    // {
    //   path: '/',  // 默认进入路由
    //   redirect: '/home'   //重定向
    // },
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/',
      name: '登陆',
      component: login
    },
    {
      path: '/default',
      name: '默认页面',
      component: defaultPage
    },
    {
      path: '/register',
      name: '注册',
      component: register
    },
    {
      path: '/userProtocol',
      name: '用户协议',
      component: userProtocol
    },
    {
      path: '/concessionCarList',
      name: '汽车优惠列表',
      component: concessionCarList
    },
    {
      path: '/carDetail/:id',
      name: '汽车详情',
      component: carDetail
    },
    {
      path: '**',   // 错误路由
      redirect: '/concessionCarList'   //重定向
    },
  ]
})

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   console.log('navigation-guards');
//   // to: Route: 即将要进入的目标 路由对象
//   // from: Route: 当前导航正要离开的路由
//   // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

//   const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile'];
//   let isLogin = global.isLogin;  // 是否登录
//   // 未登录状态；当路由到nextRoute指定页时，跳转至login
//   if (nextRoute.indexOf(to.name) >= 0) {  
//     if (!isLogin) {
//       console.log('what fuck');
//       router.push({ name: 'login' })
//     }
//   }
//   // 已登录状态；当路由到login时，跳转至home 
//   if (to.name === 'login') {
//     if (isLogin) {
//       router.push({ name: 'home' });
//     }
//   }
//   next();
// });

export default router;
