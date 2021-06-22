// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './permission'//引用全局守卫
import router from './router'
import ElementUI from 'element-ui'//引入ui库
import * as echarts from 'echarts'//引入echarts库
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/css/moren.css'//引用全局默认样式
import axios from 'axios'
import store from '../src/vuex/store'
axios.defaults.baseURL = '/api'//设置常态值



Vue.prototype.$axios = axios//赋值给全局对象
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(echarts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
