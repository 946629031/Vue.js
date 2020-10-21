<template>
  <div class="header">
    <router-link to='/'>
      <div class="header-back iconfont">&#xeb99;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default{
  name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl';
  .header
    z-index 3
    position relative
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    font-size .32rem
    background $bgColor
    color #fff
    .header-back
      width .64rem
      text-align center
      font-size .4rem
      position absolute
      top 0
      left 0
      color #fff
</style>
