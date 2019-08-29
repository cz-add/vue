// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui' //新添加1
import 'element-ui/lib/theme-chalk/index.css' //新添加2，避免后期打包样式不同，要放在import App from './App';之前
import styles from '@/css/styles.css'
import demo from '@/css/demo.css'
import loaders from '@/css/loaders.css'
import particleground from '@/js/Particleground.js'

import App from './App'
import router from './router'
import $ from 'jquery'

Vue.use(ElementUI)   //新添加3


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
