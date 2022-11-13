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

  
  <header class="header-2">
    <div class="page-header min-vh-100"
      loading="lazy">
      <div class="container" data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-in-sine"><br>
    <h1><span class="party">Party</span><br>
      Goers</h1>
      <p class="desc">We're here to make planning exciting<br> outings with your friends easier!</p><br>

      <p class="click">Click <router-link :to="{ name: 'signin'}" class="text-danger">here</router-link> to Sign In.</p>
  </div>
    </div>
  </header>


  
</template>




<script>
// @ is an alias to /src 



export default {
    name: 'HomeView',
    components: {
      
  }
}
</script>

<style scoped>

  .container {
    margin-left:10px;
    position: relative;
  }

  h1 {
    padding-top: 180px;
    font-size: 100px;
    text-align: left;
    padding-left:130px;
    font-weight: bold;
    font-family: 'Varela Round', sans-serif;
  }

  .desc {
    font-size: 20px;
    text-align: left;
    padding-left:130px;
    font-family: 'Varela Round', sans-serif;
  }

  .page-header{
    background-image: url('@/assets/partygoers.jpg');
    background-size: cover;
    margin: auto;
    height: 60vh;
    width: 100%;
    font-family: 'Varela Round', sans-serif;
  }

  .click {
    font-size: 20px;
    text-align: left;
    padding-left:130px;
    font-family: 'Varela Round', sans-serif;
  }

.party {
  color:crimson;
  font-family: 'Varela Round', sans-serif;

}

</style>
