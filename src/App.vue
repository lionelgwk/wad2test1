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

  import NavBar from './components/NavBar.vue'
  import PageFooter from './components/PageFooter.vue'



export default {
  name: 'App',
  components: { NavBar, PageFooter },
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
