<template>
  <div class="container" @click="handleGallayClick">
    <div class="wrapper">
      <swiper :options='swiperOptions'>
        <!-- slides -->
        <swiper-slide v-for="(item, index) of imgs" :key='index'>
          <img class="img" :src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true, // 监听父级变化
        observer: true // 监听自己的变化
      }
    }
  },
  methods: {
    handleGallayClick () {
      this.$emit('GallayClose')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    background #000
    z-index 99
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    .wrapper
      .img
        width 100%
      .swiper-pagination
        font-size .1rem
        color #fff
        bottom -1rem
</style>
