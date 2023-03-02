<template>
  <div class="z-0" id="map"></div>
</template>

<script>
import L from 'leaflet'

export default {
  mounted() {
    const map = L.map('map').setView([51.505, -0.09], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(map)
    L.marker([51.5, -0.09]).addTo(map)
  },

  data() {
    return {}
  }
}
</script>

<style>
#map {
  height: 400px;
}
</style>
