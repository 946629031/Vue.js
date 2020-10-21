<template>
  <div class="search-wrapper">
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" v-show="keyword" ref='search'>
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key='item.id'
          @click='handleCityClick(item.name)'
        >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default{
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city) // 通过dispatch 方法，调用 vuex 的 actions，并携带city参数
      this.$router.push('/')
      console.log(city)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl';
  .search
    height .92rem
    padding .1rem
    background $bgColor
    box-sizing border-box
    position relative
    z-index 2
    .search-input
      box-sizing border-box
      padding 0 .1rem
      height .62rem
      line-height .62rem
      color #666
      width 96%
      border none
      border-radius .1rem
      text-align center
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      margin auto
  .search-content
    position absolute
    top 1.78rem
    left 0
    right 0
    bottom 0
    background #eee
    z-index 1
    // height 100vh
    .search-item
      background #fff
      font-size .32rem
      line-height .62rem
      padding-left .2rem
      color #666
</style>
