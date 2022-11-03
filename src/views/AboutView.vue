<template>
  <div class="about">
    <div class="carousel-bg">
      <AboutCarousel></AboutCarousel>
    </div>
  </div>

  <hr>

  <AboutCard></AboutCard>

  <h1> Register here! </h1>
      <p>Enter your email: <input type='text' placeholder="Email" v-model='email'/></p>
      <p>Create a password: <input type='password' placeholder="Password" v-model='password'/></p>
      <p> <button @click="register" class="btn btn-danger"> Create Account </button> </p>
      

</template>

<script>

import AboutCarousel from '../components/AboutCarousel.vue'
import AboutCard from '../components/AboutCard.vue'

export default {
  components:{
    AboutCarousel, AboutCard
  },

  data(){
    return {

    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Oswald&family=Raleway:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Nunito:wght@300&family=Oswald&family=Raleway:wght@200&display=swap');


header {
  display: block;
  position: relative;
  margin-top: -80px;
  margin-left: 0;
  margin-right: 0;
  top: 50%;
  left: 50%;
  font-weight: 200;
  font-size: 3rem;
  color: orange;
  z-index: 999;
  transform: translateX(-50%) ;
}

.perfect {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, cursive;
  font-size: 2rem;
}

.subtitle {
  position: relative;
  font-weight: 400;
  font-size: 1.5rem;
  color: burlywood;
  z-index: 1000;
}

h1 {
  font-weight: bold;
}

.carousel-bg {
  margin-top: 60px;
  background-color:crimson;
}

</style>
