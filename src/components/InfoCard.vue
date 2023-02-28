<template>
    <div class="flex z-10">
        <p>IP Address <br>{{ this.ipData.ip }}</p>
        <p>Organization <br> {{ this.ipData.organization }}</p>
        <p> City <br> {{ this.ipData.city }} </p>
        <p>Country <br> {{ this.ipData.country_name }}</p>
        <img :src=this.ipData.country_flag alt="" srcset="">
    </div>
</template>

<script>
export default {
    props: {
        ipData: Object
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>