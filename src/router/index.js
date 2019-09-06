import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Sign from '@/views/Sign'
import AppMain from '@/views/AppMain'
import user from '@/views/sys/user'
import zd from '@/views/safety/zd'
import zdzj from '@/views/safety/zdzj'
import bjsj from '@/views/safety/bjsj'
import prole from '@/views/safety/prole'
import prolezj from '@/views/safety/prolezj'


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
      },{
        path: '/safety/zd',
        name: 'zd',
        component: zd
      },{
        path: '/safety/zdzj',
        name: 'zdzj',
        component: zdzj
      },{
        path: '/safety/bjsj',
        name: 'bjsj',
        component: bjsj
      },{
        path: '/safety/prole',
        name: 'prole',
        component: prole
      },{
        path: '/safety/prolezj',
        name: 'prolezj',
        component: prolezj
      }]
    }
  ]
})
