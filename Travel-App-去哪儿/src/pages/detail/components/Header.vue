<template>
  <div class="header">
    <router-link
      tag='div'
      to='/'
      class="header-abs iconfont"
      v-show="showAbs"
    >&#xeb99;</router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to='/'>
        <div class="header-back iconfont">&#xeb99;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: { opacity: 0 }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      console.log('scroll')
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity // 限制 不让 opacity 大于1
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    text-align center
    color #fff
    .header-abs
      position absolute
      top .2rem
      left .2rem
      height .8rem
      line-height .8rem
      width .8rem
      border-radius .8rem
      background rgba(0,0,0,.8)
      z-index 11
    .header-fixed
      z-index 11
      background $bgColor
      font-size .32rem
      height $headerHeight
      line-height $headerHeight
      text-align center
      position fixed
      top 0
      left 0
      right 0
      .header-back
        width .64rem
        text-align center
        font-size .4rem
        position absolute
        top 0
        left 0
        color #fff
</style>
