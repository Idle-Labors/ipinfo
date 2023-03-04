<template>
  <div class="z-0" id="map"></div>
</template>

<script>
import L from 'leaflet'

export default {
  props: {
    locationData: Object
  },
  mounted() {
    this.map = L.map('map').setView([51.505, -0.09], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map)
    L.marker([51.5, -0.09]).addTo(this.map)
  },
  watch: {
    locationData: function (newLocation, oldLocation) {
      this.centerMap(newLocation.lat, newLocation.long)
    }
  },
  data() {
    return {
      map: null
    }
  },
  methods: {
    centerMap(lat, long) {
      this.map.panTo(new L.LatLng(lat, long))
      L.marker([lat, long]).addTo(this.map)
    }
  }
}
</script>

<style>
#map {
  height: 824px;
}
</style>
