import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '选择城市'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
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
