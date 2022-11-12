
<template>

      <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />

  <!-- Nucleo Icons -->
  <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
  <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />



  <!-- Material Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">

  <!-- CSS Files -->
 

  <link id="pagestyle" href="../assets/css/material-kit.css?v=3.0.4" rel="stylesheet" />
  <ResponsiveContainer
  default-breakpoint="tiny"
  :breakpoints="{small: 576, medium: 768, large: 992, xlarge:1200 }">
 
  <header class="header-2">
  
    <div class="page-header min-vh-100"
      :style="{
        backgroundImage: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      }"
      loading="lazy">
      
      <div class="home"  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine"><br>
    <h1><span class="party">Welcome,<br>{{name}}</span></h1>

      <p class="desc">We're here to make planning exciting<br> outings with your friends easier!</p><br>
      <p class="events">Your upcoming events:</p>
      <ul class="eventlist">
        <li>CCA outing</li>
        <li>Secondary school reunion</li>
        <li>Family gathering</li>
      </ul><br><br>
  

      <p class="click">Click on <router-link :to="{ name: 'myevents'}" class="text-danger">My Parties</router-link> to view more details.</p>
      
  </div>

    </div>
  </header>

</ResponsiveContainer>


</template>


<script>
// @ is an alias to /src 
import { ref } from 'vue';
import { getAuth } from "firebase/auth";
export default {
  setup(){
    const name = ref("");
    const auth = getAuth();
    const user = auth.currentUser;
    if (user){
      name.value = user.email.split('@')[0];
    }
    else{
      name.value = "Partygoer";
    }

    return {name}
  },
    name: 'HomeView',
    components: {
  }
}
</script>

<style scoped>
  h1 {
    padding-top: 110px;
    font-size: 400%;
    text-align: left;
    padding-left:10%;
    font-weight: bold;
    font-family: 'Varela Round', sans-serif;

  }

  .desc {
    font-size: 100%;
    text-align: left;
    padding-left:10%;
    font-family: 'Varela Round', sans-serif;
  }

  .events {
    font-size: 100%;
    text-align: left;
    padding-left:10%;
    font-weight: bold;
    font-family: 'Varela Round', sans-serif;
    color: crimson;
  }

  .eventlist {
    font-size: 100%;
    text-align: left;
    padding-left:15%;
    font-family: 'Varela Round', sans-serif;
  }

  .page-header{
    background-image: url('@/assets/partygoers.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: auto;
    height: 100%;
    width: 100%;
    font-family: 'Varela Round', sans-serif;
  }

  .click {
    font-size: 100%;
    text-align: left;
    padding-left:10%;
    font-family: 'Varela Round', sans-serif;
  }


.party {
  color:crimson;
  font-family: 'Varela Round', sans-serif;

}

</style>
