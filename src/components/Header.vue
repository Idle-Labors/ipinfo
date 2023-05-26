<template>
  <div class="relative z-10">
    <div class="flex flex-col items-center bg-heroImg pb-36 font-rubik text-lg">
      <h1 class="text-white mt-8 mb-4 text-2xl">WHOIS Geolocator</h1>
      <div class="flex flex-auto items-center">
        <input
          type="text"
          class="h-8 w-80 md:mt-0 text-sm rounded-tl-md rounded-bl-md focus:outline-none"
          name="search"
          id="search"
          aria-describedby="helpId"
          placeholder="Search By IP Or Leave Empty For Your IP"
          v-model="searchValue"
          @keydown.enter="getInfo"
        />
        <img
          @click="getInfo"
          src="./icons/icon-arrow.svg"
          alt=""
          srcset=""
          class="bg-black h-8 rounded-r"
        />
      </div>
    </div>
    <div v-if="hasSearched">
      <div
        class="hidden md:inline-flex absolute top-5/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-200 p-2 gap-3 rounded-md"
      >
        <div class="flex-col">
          <p class="font-semibold">IP Address</p>
          <p>{{ truncateIPAddress }}</p>
        </div>
        <div class="flex-col">
          <p class="font-semibold">Organization</p>
          <p>
            {{ truncateOrgAddress }}
          </p>
        </div>

        <div class="flex-col">
          <p class="font-semibold">City</p>
          <p>
            {{ this.ipData.city }}
          </p>
        </div>
        <div class="flex-col">
          <p class="font-semibold">Country</p>
          <p>
            {{ this.ipData.country_name }}
          </p>
        </div>

        <img :src="this.ipData.country_flag" alt="" srcset="" />
      </div>

      <!--Mobile Resolutions-->
      <div class="md:hidden z-10 absolute right-0 top-40 bg-indigo-200 p-2 gap-3 rounded-md">
        <p class="font-semibold">IP Address</p>
        <p>{{ this.ipData.ip }}</p>
        <p class="font-semibold">Organization</p>
        <p>
          {{ this.ipData.organization }}
        </p>
        <p class="font-semibold">City</p>
        <p>
          {{ this.ipData.city }}
        </p>
        <p class="font-semibold">Country</p>
        <p>
          {{ this.ipData.country_name }}
        </p>
        <img :src="this.ipData.country_flag" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ipData: Object
  },
  data() {
    return {
      searchValue: '',
      hasSearched: false
    }
  },
  computed: {
    truncateIPAddress() {
      const ipAddress = this.ipData.ip
      const maxLength = 16
      
      if (ipAddress.length > maxLength) {
        return ipAddress.substring(0, 13) + '...';
      }
      
      return ipAddress;
    },
    truncateOrgAddress() {
      const orgName = this.ipData.organization
      const ipAddress = this.ipData.ip
      const maxLength = 27
      
      if (orgName.length > maxLength && ipAddress.length > 16) {
        return orgName.substring(0, maxLength) + '...';
      }
      
      return orgName;
    }
  },
  
  methods: {
    getInfo() {
      this.$emit('searchValue', this.searchValue)
      this.searchValue = ''
      this.hasSearched = true
    }
  }
}
</script>

<style scoped></style>
