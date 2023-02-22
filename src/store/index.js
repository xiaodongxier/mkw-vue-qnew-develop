import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  // actions: {
  //   changeCity: function (ctx, city) {
  //     console.log(ctx, city)
  //     ctx.commit('changeMutaCity', city)
  //   }
  // },
  mutations: {
    changeMutaCity: function (state, city) {
      console.log(state, city)
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
})
