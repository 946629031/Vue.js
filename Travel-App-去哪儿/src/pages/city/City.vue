<template>
  <div>
    <city-header></city-header>
    <city-search :cities='cities'></city-search>
    <city-list
      :cities='cities'
      :hot='hotCities'
      :letter='letter'
    ></city-list>
    <city-alphabet
      :cities='cities'
      @change='handleLetterChange'
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default{
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSuccess)
    },
    handleGetCityInfoSuccess (response) {
      let res = response.data
      if (res.ret && res.data) {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang='stylus' scoped>

</style>
