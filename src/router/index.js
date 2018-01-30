import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/pages/test'
// register
import register from '@/pages/register/register'
import userProtocol from '@/pages/register/userProtocol'
//saleCar
import concessionCarList from '@/pages/saleCar/concessionCarList'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: test
    // },
    {
      path: '/',
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
    }
  ]
})
