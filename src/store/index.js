//vuex的store实例，并注册上面引入的各大模块
import Vue from 'vue'
import Vuex from 'vuex'


import state from '@/store/state'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import getters from '@/store/getters'

Vue.use(Vuex)

const store = new Vuex.Store({state,getters,actions,mutations})

export default store;