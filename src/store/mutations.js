import {
  SOME_MUTATION
} from './mutation-types.js'
export default {
  setCollapsed: function(state, payload) {
    state.collapsed = payload.collapsed;
  },	[SOME_MUTATION](state) {
    state.count++
  },setUsername: (state, payload) => {
    debugger
    state.uname = payload.uname;
  }
}
