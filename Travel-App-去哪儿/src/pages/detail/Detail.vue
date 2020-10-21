<template>
  <div>
    <detail-banner :sightName='sightName' :bannerImg='bannerImg' :gallaryImgs='gallaryImgs'></detail-banner>
    <detail-header></detail-header>
    <detail-list :list='categoryList'></detail-list>
    <div class="height"></div>
  </div>
</template>

<script>
import detailBanner from './components/Banner'
import detailHeader from './components/Header'
import detailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  mounted () {
    this.getDetailData()
  },
  methods: {
    getDetailData () {
      axios.get('/api/detail.json?id=' + this.$route.params.id)
        .then(this.getDetailDataSuccess)
    },
    getDetailDataSuccess (res) {
      if (res.data.ret && res.data.data) {
        let data = res.data.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.height
  height 20rem
</style>
