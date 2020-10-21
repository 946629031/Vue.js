export default {
  changeCity (ctx, city) {
    ctx.commit('changeCity', city) // 通过 ctx.commit 调用 mutations 里的 changeCity
  }
}
