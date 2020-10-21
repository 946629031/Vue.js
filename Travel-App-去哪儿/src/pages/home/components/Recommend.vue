<template>
    <div>
      <div class="home-recommend-title">热销推荐</div>
      <ul class="home-recommend-list">
        <router-link
          tag='li'
          class="item border-bottom"
          v-for="item of list"
          :key="item.id"
          :to="'/detail/' + item.id"
        >
          <img class="home-recommend-img" :src="item.imgUrl" alt="">
          <div>
            <p class="home-recommend-item-title">{{item.title}}</p>
            <p class="home-recommend-item-desc">{{item.desc}}</p>
            <p class="home-recommend-item-price"><span>{{item.price}}</span>起</p>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
  .home-recommend-title
    background #efefef
    line-height 2.7
    font-size .3rem
    text-align left
    padding 0 .3rem
  .home-recommend-list
    .item
      display flex
      .home-recommend-img
        width 1.9rem
        height 1.9rem
        padding .2rem
      div
        min-width 0
        p
          font-size .3rem
          color #999
          ellipsis()
        .home-recommend-item-title
          font-weight bold
          color #333
          padding-top .2rem
        .home-recommend-item-desc
          line-height .5rem
        .home-recommend-item-price
          line-height .8rem
          span
            color orange
            font-weight bold
            font-size .35rem
            padding-right .1rem
</style>
