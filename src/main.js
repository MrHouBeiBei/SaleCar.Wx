// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import filters from "./filters";

//全局样式
import "./components/style.css"
import "./components/app.js"
import "./components/JSSDK.js"
import "./components/jquery-3.1.1.min.js"
import "./api/config.js"

// Vue.config.productionTip = false
// Vue.config.silent = true

/* eslint-disable no-new */
Vue.use(MintUI)
Vue.use(Vuex)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
