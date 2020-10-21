export default {
  changeCity (state, city) {
    state.city = city // mutations 调用 state, 将其重新赋值

    try {
      localStorage.city = city
    } catch (e) {}
  }
}
