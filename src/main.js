// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui' //新添加1
import 'element-ui/lib/theme-chalk/index.css' //新添加2，避免后期打包样式不同，要放在import App from './App';之前


import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'


import axios from '@/api/http'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)
Vue.use(ElementUI)   //新添加3
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //在main.js中导入store实例
  components: { App },
  template: '<App/>',
  data: {
    //自定义的事件总线对象，用于非父子组件的通信
    Bus: new Vue()
  }
})
