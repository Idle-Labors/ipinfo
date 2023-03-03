<template>
  <div class="relative">
<Header @searchValue="getInfo" :ipData="ipData"/>
<Map :locationData="locationData" /> 
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Map from '../components/Map.vue'

export default {
  components: {
    Header,
    Map
  },
  data () {
    return {
      ipData: {},
      locationData: {}
    }
  },
  methods: {
    async getInfo(searchValue) {
      try {
        const key = '32ea1612c7364de2ad4e31a2d1cdcca9'
        const reqData = await fetch(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${key}&ip=${searchValue}` 
        )
        const data = await reqData.json()
        this.ipData = data
        this.locationData = {lat: data.latitude, long: data.longitude}
      } catch (error) {
        console.log('No bueno')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>