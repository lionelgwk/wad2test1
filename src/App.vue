<template>
  <body>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
