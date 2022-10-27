<template>
  <div class="about">
    <div class="carousel-bg">
      <AboutCarousel></AboutCarousel>
    </div>

    <header>
      <h1>The only right way to meet up with friends.</h1>
    </header>
    <div>
      <p class="subtitle">We are your solution to plan the  <span class="perfect">perfect</span>  getaway with your friends!</p>
    </div>
  </div>

  <hr>

  <AboutCard></AboutCard>


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
  font-family: 'Shadows Into Light', cursive;
  font-weight: 200;
  font-size: 3rem;
  color: orange;
  z-index: 999;
  transform: translateX(-50%) ;
}

.perfect {
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
}

.subtitle {
  position: relative;
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  font-size: 1.5rem;
  color: burlywood;
  z-index: 1000;
}

h1 {
  font-weight: bold;
}

.carousel-bg {
  margin-top: 60px;
  background-color: rgb(83, 5, 122);
}

</style>
