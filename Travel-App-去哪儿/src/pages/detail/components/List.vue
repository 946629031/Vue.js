<template>
  <div class="detail-List">
    <div v-for="(item, index) of list" :key='index' class="item border-bottom">
      <div class="item-title">
        <div class="item-icon"></div>
        {{item.title}}
      </div>
      <div v-if="item.children">
        <detail-list :list='item.children'></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .detail-List
    font-size .32rem
    line-height .8rem
    padding 0 .2rem
    .item-title
      display flex
      align-items center
      .item-icon
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        background-size: .4rem 3rem;
        width: .36rem;
        height: .36rem;
        margin-right: .1rem;
</style>
