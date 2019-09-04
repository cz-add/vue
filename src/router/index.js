import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Sign from '@/views/Sign'
import AppMain from '@/views/AppMain'
import user from '@/views/sys/user'


Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/Sign',
      name: 'Sign',
      component: Sign
    },{
      path: '/AppMain',
      name: 'AppMain',
      component: AppMain,
      children: [{
        path: '/sys/user',
        name: 'user',
        component: user
      }]
    }
  ]
})
