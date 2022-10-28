<template>
    <!-- <div class="createevent">
      <div ref="mapDiv">
        <GoogleMap api-key="AIzaSyCTHZllCldMYoM9ByF8AcxKPWvIuFJsTx4" style="width: 100%; height: 500px" :center="center" :zoom="15">
              <Marker :options="{ position: center }" />
        </GoogleMap>
      </div>
    </div> -->

    <div>
      <h4>Position</h4>
      <h5>Latitude: {{currPos.lat.toFixed(2)}}</h5>
      <h5>Longitude: {{currPos.lng.toFixed(2)}}</h5>
    </div>
    <div ref="mapDiv" style="width: 100%; height: 80vh"/>
  </template>
  
<script>
  // @ is an alias to /src

  /* eslint-disable */
  import { onMounted, ref } from "vue";
  import { computed } from 'vue'
  import { useGeolocation } from '../useGeolocation'
  import { Loader } from '@googlemaps/js-api-loader'
  import { GoogleMap, Marker } from "vue3-google-map";
  import { watch } from 'vue'

  const GOOGLE_MAPS_API_KEY = 'AIzaSyCTHZllCldMYoM9ByF8AcxKPWvIuFJsTx4'

  export default ({
    name: 'CreateEvent',
    components: {GoogleMap, Marker},
    setup(){

      const {coords} = useGeolocation()

      

      const currPos = computed (() => ({
        lat: coords.value.latitude,
        lng: coords.value.longitude
      }))
      

      



      const loader = new Loader ({apiKey: GOOGLE_MAPS_API_KEY})
      const mapDiv = ref(null)
      let map = ref(null)

      
      onMounted(async () => {
        await loader.load()
        map = new google.maps.Map(mapDiv.value, {
          center: currPos.value,
          zoom: 15
        })
        
      }),

      watch(currPos, () => {
        map.setCenter(currPos.value)
      })





      return {currPos, mapDiv}
    }
  });
  

</script>
  