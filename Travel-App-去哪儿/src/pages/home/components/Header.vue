<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xeb99;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xeb9c;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <!-- {{this.doubleCity}} -->
        <!-- {{this.$store.state.city}} -->
        <span class="iconfont arrow-icon">&#xe65c;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<!-- 添加“scoped”属性以仅将CSS限制到此组件 -->
<style lang="stylus" scoped>
    // @import '../../../assets/styles/varibles.styl' // 引入 css变量文件
    // @import '~@/assets/styles/varibles.styl' // 引入 css变量文件
    @import '~styles/varibles.styl' // 引入 css变量文件
    a
      color #fff
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor // 使用css变量
        color: #fff
        font-size: 16px
        .header-left
            width: .64rem
            float: left
            text-align center
        .header-input
            flex: 1
            background: #fff
            height: .64rem
            line-height: .64rem
            margin: .12rem .1rem 0 .1rem
            border-radius: .1rem
            color: #ccc
            text-align center
        .header-right
            text-align center
            min-width: 1.04rem
            padding 0 .1rem
            float: right
            .arrow-icon
              margin-left: -.1rem
</style>
