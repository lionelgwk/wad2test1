<template>
  <div id="filler"></div>
  <div class="toast-wrapper">
    <div class="toast">
      loading...
    </div>
  </div>
  <NearbyPlaces></NearbyPlaces>
  
  
</template>








<!-- <template>
  <div class="container">
    <div class="pt-5"></div>
    <h3 class="pt-5 font-size-xl mb-3">Choose your location</h3>

    <button class="btn btn-danger mb-4" @click="triggerReady">
      Load Map
    </button>

    <div class="row">
      <div class="col-md-8">
        <div class="map_holder">
          <place-search
            v-bind:ready="ready"
            placeholder="Enter a location"
            loading="Map is loading"
            v-bind:gps_timeout="7000"
            v-bind:fallbackProcedure="fallbackProcedure"
            v-bind:zoom="zoom"
             v-bind:geolocation="geolocation"
            v-bind:address="address"
            v-bind:manually="manually"
            @changed="getMapData"
          >
          </place-search>
        </div>
      </div>
      <div class="col-md-4">
        <h5 class="text-uppercase color-secondary mb-1">Country</h5>
        <div class="mb-3 font-weight-bold">
          {{
            place.country != null
              ? place.country 
              : "Please search for an address before proceeding"
          }}
        </div>

        <h5 class="text-uppercase color-secondary mb-1">Zip code</h5>
        <div class="mb-3">
          <input type="text" v-model="place.zip_code" class="form-control" />
        </div>

        <h5 class="text-uppercase color-secondary mb-1">
          Address
        </h5>
        <div class="mb-3">
          <input type="text" v-model="place.address_description" class="form-control" />
        </div>
        <h5 class="text-uppercase color-secondary mb-1">
          Suggested activities
        </h5>
        <div class="mb-3">
          <textarea
            class="form-control"
            cols="30"
            rows="5"
            v-model="place.suggested_activities"
          ></textarea>
        </div>
        <div class="mt-3">
          <button class="btn btn-danger w-100">Select location</button>
        </div>
      </div>
    </div>
    <h3 class="pt-5 font-size-xl mb-3">Select your friends</h3>

  </div>
</template>


<script>
export default {
  name: "App",
  data() {
    return {
      ready: false, //Add ready:false to stop map from loading, and then when changed to true map will auto load
      fallbackProcedure: "gps", //gps | geolocation | address | manually
      zoom: 17, //Default Zoom
      geolocation: {
        // If GPS and Find by address fails then, map will be positioned by a default geolocation
        lat: 31.73858,
        lng: -35.98628,
        zoom: 2,
      },
      address: {
        query: "Singapore Management University", //If GPS fails, Find by address is triggered
        zoom: 10,
      },
      manually: {
        address_description: "Singapore Management University (SMU)",
        country: "Singapore",
        lat: 1.296568,
        lng: 103.852119,
        zip_code: "S178903",
        zoom: 17,
        suggested_activities: ''
      },
      place: {},
      form_data: {},
    };
  },
  methods: {
    getMapData(place) {
      this.place = place;
      console.log(place);
    },
    triggerReady() {
      this.fallbackProcedure = "manually";
      this.ready = true;
    },
  },
  created() {},
};
</script>

<style lang="css" scoped>
.map_holder {
  width: 100%;
  height: 450px;
  float: left;
}
</style> -->

<script>

// import { ref } from 'vue';
import NearbyPlaces from '../components/NearbyPlaces.vue'
// import ToastBubble from '../components/ToastBubble.vue';

export default {
  name: 'CreateEvent',
  components: {
    NearbyPlaces
  },
  // setup(){
  //   const showToast = ref(true);

  //   return { showToast }
  // }
}
</script>

<style>
#filler {
  height: 100px;
}

.toast-wrapper {
    position: fixed;
    width: 100%;
    top: 20px;
  }
.toast {
  padding: 20px;
  color: white;
  background: #ff0062;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
  max-width: 400px;
  margin: 0 auto;
}


/* .toast-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}

.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.toast-enter-active {
  transition: all 0.3s ease;
} */
</style>