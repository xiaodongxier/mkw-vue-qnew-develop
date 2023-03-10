import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  // actions: {
  //   changeCity: function (ctx, city) {
  //     console.log(ctx, city)
  //     ctx.commit('changeMutaCity', city)
  //   }
  // },
  mutations
})
