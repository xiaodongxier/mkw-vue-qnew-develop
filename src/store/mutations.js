export default {
  changeMutaCity: function (state, city) {
    console.log(state, city)
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
