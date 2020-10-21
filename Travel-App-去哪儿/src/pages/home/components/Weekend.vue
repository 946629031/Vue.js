<template>
    <div>
      <div class="home-weekend-title">周末去哪儿</div>
      <ul class="home-weekend-list">
        <li class="item border-bottom" v-for="item of list" :key="item.id">
          <div class="home-weekend-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="home-weekend-info">
            <p class="home-weekend-item-title">{{item.title}}</p>
            <p class="home-weekend-item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .home-weekend-title
    background #efefef
    line-height 2.7
    font-size .3rem
    text-align left
    padding 0 .3rem
  .home-weekend-list
    .item
      .home-weekend-img
        padding-bottom 37.088%
        height 0
        img
          width 100%
      .home-weekend-info
        min-width 0
        padding 0 .2rem .5rem
        border-bottom 6px solid #f3f3f3
        p
          font-size .3rem
          color #999
          ellipsis()
        .home-weekend-item-title
          font-weight bold
          color #333
          padding-top .2rem
        .home-weekend-item-desc
          line-height .5rem
        .home-weekend-item-price
          line-height .8rem
          span
            color orange
            font-weight bold
            font-size .35rem
            padding-right .1rem
</style>
