import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    count: 0
  },
  mutations:{
    increment(){
      this.state.count++
    }
  }
})
store.commit('increment')
export default store;