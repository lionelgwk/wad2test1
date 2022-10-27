<template>
  <div class="about">
    <div class="carousel-bg">
      <AboutCarousel></AboutCarousel>
    </div>

    <header>
      <h1>The only right way to meet up with friends.</h1>
    </header>
  </div>


</template>

<script>

import AboutCarousel from '../components/AboutCarousel.vue'

export default {
  components:{
    AboutCarousel
  },

  data(){
    return {

    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');


header {
  display: block;
  position: relative;
  margin-top: -100px;
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

h1 {
  font-weight: bold;
}

.carousel-bg {
  margin-top: 60px;
  background-color: rgb(83, 5, 122);
}

</style>
