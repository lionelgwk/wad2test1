<template>
  <div ref="mapDiv">

    <GoogleMap api-key="AIzaSyCTHZllCldMYoM9ByF8AcxKPWvIuFJsTx4" style="width: 100%; height: 500px" :center="center" :zoom="15">
          <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>

</template>
  
<script>
/* eslint-disable no-undef */
import { defineComponent, onMounted, ref } from "vue";
import {computed} from 'vue'
import { useGeolocation } from '../useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
import { GoogleMap, Marker } from "vue3-google-map";

const GOOGLE_MAPS_API_KEY = 'AIzaSyCTHZllCldMYoM9ByF8AcxKPWvIuFJsTx4'

export default defineComponent({
  name: 'GoogleMaps',
  components: {GoogleMap, Marker},
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
});
</script>