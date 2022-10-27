<template>
  <p></p>
</template>
  
<script>
/* eslint-disable no-undef */
import { onMounted, ref } from "vue";
import {computed} from 'vue'
import { useGeolocation } from '../useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'

const GOOGLE_MAPS_API_KEY = 'AIzaSyCTHZllCldMYoM9ByF8AcxKPWvIuFJsTx4'


export default {
  name: 'GoogleMap',
  setup(){
    const {coords} = useGeolocation()
    const currPos = computed (() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))

    const loader = new Loader ({apiKey: GOOGLE_MAPS_API_KEY})
    const mapDiv = ref(null)
    onMounted(async () => {
      await loader.load()
      new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 15
      })
    })

    return {currPos, mapDiv}
  }
}
</script>