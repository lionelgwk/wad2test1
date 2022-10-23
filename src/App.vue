<template>
  <nav>
    <NavBar></NavBar>
  </nav>
  <router-view/>

  <h1>{{title}}</h1>
    <p>Welcome!</p>
    <div v-if="showModal">
      <ModalOne theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="#">Click here</a>
          <a href="#">Or click here!</a>
        </template>
        <h1>Hello there!!!</h1>
        <p>We need to get our shit together!</p>
      </ModalOne>
    </div>
    <button @click ="toggleModal">Open Modal</button>
 
    <br>

    <div v-if="showModalTwo">
      <ModalTwo @closeTheModal="toggleModalTwo">
        <template v-slot:hyperlinks>
          <a href="#">Github Repository</a>
          <a href="#">My Instagram</a>
        </template>
        <h1>Are you ready for WAD2?</h1>
        <p>Click here to visit the Github Repository!</p>
      </ModalTwo>

    </div>
    <button @click="toggleModalTwo">Open Modal Two</button>

    <button class="btn btn-primary" data-bs-target="#collapseTarget" data-bs-toggle="collapse">
        Bootstrap collapse
    </button>
    <div class="collapse py-2" id="collapseTarget">
        This is the toggle-able content!
    </div>

    <PageFooter></PageFooter>
    
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'

  import NavBar from './components/NavBar.vue'
  import ModalOne from './components/ModalOne.vue'
  import ModalTwo from './components/ModalTwo.vue'
import PageFooter from './components/PageFooter.vue'



export default {
  name: 'App',
  components: { ModalOne, ModalTwo, NavBar, PageFooter },
  data (){
    return {
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal(){
      return this.showModal = !this.showModal;
    },
    toggleModalTwo(){
      return this.showModalTwo = !this.showModalTwo;
    }
  }
  
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none; 
  border-radius: 4px;
}
</style>
