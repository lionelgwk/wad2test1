<template>
  <body>
    <nav>
      <NavBar></NavBar>
    </nav>
    <router-view/>

    <div ref="mapDiv" style="width: 100%; height: 80vh">
      <GoogleMap></GoogleMap>
    </div>

    <PageFooter></PageFooter>
  </body>
    
</template>


<script>
  /* eslint-disable no-undef */

  import NavBar from './components/NavBar.vue'
  import PageFooter from './components/PageFooter.vue'
  import GoogleMap from './components/GoogleMap.vue'

export default {
  name: 'App',
  components: { NavBar, GoogleMap, PageFooter },

  data (){
    return {

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
