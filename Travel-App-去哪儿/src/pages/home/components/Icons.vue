<template>
    <div class="icons">
      <swiper :options="SwiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="img-wrapper">
              <img :src="item.url">
            </div>
            <div class="keywords">{{item.name}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      SwiperOption: {
        // autoPlay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) pages[page] = [] // 如果为空
        pages[page].push(item)
      })
      return pages
    }
  },
  mounted () {
    // console.log(this.pages)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom: 50%
  .icon
    width: 25%
    padding-bottom: 25%
    height: 0
    float: left
    position: relative
    .img-wrapper
      position: relative
      padding-bottom: 100%
      height: 0
      img
        width: 60%
        position:absolute
        left: 0
        right: 0
        top:0
        bottom: .44rem
        margin: auto
    .keywords
      text-align center
      font-size: .22rem
      height: .44rem
      line-height: .44rem
      position: absolute
      top: 65%
      bottom: 0
      left: 0
      right: 0
      margin: auto
      color: $darkTextColor
      ellipsis()
</style>
