<template>
  <div class="flex flex-col items-center relative bg-heroImg pb-36 font-rubik text-lg z-0">
    <h1 class="text-white mt-8 mb-4 text-2xl">WHOIS Geolocator</h1>
    <div class="flex flex-auto items-center">
      <input type="text" class="h-8 w-80 md:mt-0 text-sm rounded-tl-md rounded-bl-md focus:outline-none"
      name="search" id="search" aria-describedby="helpId" placeholder="Search By IP Or Leave Empty For Your IP" v-model="searchValue" @keydown.enter="getInfo">
      <img @click="getInfo" src="./icons/icon-arrow.svg" alt="" srcset="" class="bg-black h-8 rounded-r" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    getInfo() {
        this.$emit('searchValue', this.searchValue)
        this.searchValue = ''
    },
}}
</script>

<style scoped>

</style>
