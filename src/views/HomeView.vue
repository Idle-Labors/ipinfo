<template>
  <div class="relative">
<Header @searchValue="getInfo" :ipData="ipData"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  components: {
    Header
  },
  data () {
    return {
      ipData: {}
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
        console.log(data)
        this.ipData = data
      } catch (error) {
        console.log('No bueno')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>