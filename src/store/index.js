import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '周刊'
  },
  actions: {
    changeCity: function (ctx, city) {
      console.log(ctx, city)
      ctx.commit('changeMutaCity', city)
    }
  },
  mutations: {
    changeMutaCity: function (state, city) {
      console.log(state, city)
      state.city = city
    }
  }
})
