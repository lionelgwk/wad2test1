<template>
  <div class="about">
    <div class="carousel-bg">
      <AboutCarousel></AboutCarousel>
    </div>

    
  </div>

  <hr>

  <AboutCard></AboutCard>


  <!-- <button class="btn btn-warning" data-aos="fade-up">Start Partying!</button> -->
  <router-link :to="{ name: 'registeraccount'}" class="btn btn-warning" data-aos="fade-up">Start Partying!</router-link>



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
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Oswald&family=Raleway:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Varela+Round&display=swap');



h1 {
  font-weight: bold;
}

.carousel-bg {
  margin-top: 60px;
  background-color: rgb(83, 5, 122);
}


.btn {
  font-family: 'Varela Round', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  color: white;
  background-color: rgb(83, 5, 122);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 9999;
}

</style>
