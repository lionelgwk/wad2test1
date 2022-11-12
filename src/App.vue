<template>
  <body>
    <div class="filler"></div>
    <nav>
      <NavBar></NavBar>
    </nav>
    <router-view/>



    <PageFooter></PageFooter>
  </body>
    
</template>




<script>
  /* eslint-disable no-undef */

  

  import NavBar from './components/NavBar.vue'
  import PageFooter from './components/PageFooter.vue'
  import VueGeolocation from "vue3-geolocation";
  import GMaps from "vuejs3-google-maps";

  
  

export default {
  name: 'App',
  components: { NavBar, PageFooter },

  data (){
    return {
      VueGeolocation, GMaps
    }
  },
  methods: {

  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Varela+Round&display=swap');

#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.filler {
  height: 80px;
}

</style>
