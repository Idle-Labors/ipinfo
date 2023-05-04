<template>
  <div class="relative">
    <Header @searchValue="getInfo" :ipData="ipData" />
    <Map :locationData="locationData" />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Map from '../components/Map.vue'

export default {
  components: {
    Header,
    Map
  },
  data() {
    return {
      ipData: {},
      locationData: {}
    }
  },
  methods: {
    async getInfo(searchValue) {
      try {
        //in a production application this key would be obscured in an env variable
        const key = '13ed460d5a9b406e86acb630501372f1'
        const reqData = await fetch(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${key}&ip=${searchValue}`
        )
        const data = await reqData.json()
        this.ipData = data
        this.locationData = { lat: data.latitude, long: data.longitude }
      } catch (error) {
        console.log('Error')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
