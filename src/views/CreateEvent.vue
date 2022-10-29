<template>
  <div class="container">
    <div class="pt-2 font-size-xl mb-3">Create Address</div>

    <button class="btn btn-danger my-4" @click="triggerReady">
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
        <div class="text-uppercase color-secondary mb-1">Address</div>
        <div class="mb-3 font-weight-bold">
          {{
            place.country != null
              ? place.country + ", " + place.city
              : "Please search for an address before proceeding"
          }}
        </div>

        <div class="text-uppercase color-secondary mb-1">Zip code</div>
        <div class="mb-3">
          <input type="text" v-model="place.zip_code" class="form-control" />
        </div>

        <div class="text-uppercase color-secondary mb-1">
          Address description
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            cols="30"
            rows="5"
            v-model="place.address_description"
          ></textarea>
        </div>
        <div class="mt-3">
          <button class="btn btn-danger w-100">Save as Party location</button>
        </div>
      </div>
    </div>
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
        query: "Albania, Tirane", //If GPS fails, Find by address is triggered
        zoom: 10,
      },
      manually: {
        address_description: "21 Dhjetori, Tirana, Albania",
        city: "Tirana",
        country: "Albania",
        lat: 41.3267905,
        lng: 19.8060475,
        state: "Tirana County",
        zip_code: "",
        zoom: 17,
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
</style>