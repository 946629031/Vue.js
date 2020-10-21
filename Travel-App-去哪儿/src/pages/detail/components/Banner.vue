<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <div class="detail-banner">
        <img :src="bannerImg" alt="">
      </div>
      <div class="info">
        <div class="title">{{sightName}}</div>
        <div class="icon">
          <span class="image iconfont">&#xe635;</span>
          <span class="number">39</span>
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs='gallaryImgs' v-show="showGallary" @GallayClose='GallayClose'></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import fadeAnimation from 'common/animation/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    fadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    GallayClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    .detail-banner
      height 0
      padding-bottom 55%
    .info
      font-size .3rem
      color #fff
      background-image linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5));
      position absolute
      left 0
      right 0
      bottom 0
      .title
        line-height .8rem
        padding-left .16rem
      .icon
        padding .03rem .08rem
        position absolute
        right .16rem
        bottom .16rem
        width 1.3rem
        text-align center
        border-radius .5rem
        background rgba(0,0,0,.5)
</style>
