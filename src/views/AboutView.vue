<template>
    <div class="bg">
      <h3>Do these sound familiar?</h3>

      <div class="text-align">
        <AboutCard></AboutCard>
      </div>
  <hr>
    <h3>PartyGoers can help!</h3>
      <AboutCarousel></AboutCarousel><br>

  <router-link :to="{ name: 'registeraccount'}" class="btn btn-danger">Start Partying!</router-link><br><br><br><br>

  </div>
  
</template>

<script>

import AboutCarousel from '@/components/AboutCarousel.vue'
import AboutCard from '@/components/AboutCard.vue'

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



h1 {
  font-weight: bold;
}

.bg {
  background-color: rgb(255,250,247);
  font-family: 'Varela Round', sans-serif;
  min-height: 100%;
}


h3 {
  padding-top: 30px;
  padding-bottom:10px;
  font-weight: bold;
  color:crimson
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
  margin:auto;
}

</style>
