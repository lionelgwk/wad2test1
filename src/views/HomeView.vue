<template>
  <div class="home">
    <h1>PartyGoers</h1>
  </div>

  <GoogleMap api-key="AIzaSyCTHZllCldMYoM9ByF8AcxKPWvIuFJsTx4" style="width: 100%; height: 500px" :center="center" :zoom="15">
      <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
// @ is an alias to /src

import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
  
  export default defineComponent({
    name: 'HomeView',
    components: { GoogleMap, Marker },
    setup() {
      const center = { lat: 40.689247, lng: -74.044502 };
  
      return { center };
    },
  });
</script>

<style scoped>
  h1 {
    margin-top: 60px;
    color: orange;
    font-weight: bold;
  }
</style>
