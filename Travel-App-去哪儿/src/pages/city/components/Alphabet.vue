<template>
  <div class="list">
    <div
      class="item"
      v-for="(item, key) of cities"
      :key="key"
      :ref='key'
      @click='handleLetterClick'
      @touchstart.prevent='handleTouchStart'
      @touchmove='handleTouchMove'
      @touchend='handleTouchEnd'
    >
      {{key}}
    </div>
  </div>
</template>

<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // 获取A字母 到上级层顶部的距离
  },
  computed: {
    letters () {
      const letters = []
      for (var i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      // console.log(e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => { // 利用setTimeout 做函数节流
          let touchY = e.touches[0].clientY
          let index = Math.floor((touchY - 89 - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl';
  .list
    position absolute
    right 0
    top 1.78rem
    bottom 0
    display flex
    flex-direction column
    justify-content center
    width .4rem
    text-align center
    .item
      color $bgColor
      line-height .4rem
      font-size .26rem
</style>
