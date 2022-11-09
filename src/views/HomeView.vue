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

  <div class="home"><br>
    <h1><span class="party">Party</span>Goers</h1>
  </div>

  <header class="header-2">
    <div class="page-header min-vh-75 relative">
      <span class="mask bg-gradient-primary opacity-4"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto">
            <h1 class="text-white pt-3 mt-n5">Material Kit 2</h1>
            <p class="lead text-white mt-3">Free & Open Source Web UI Kit built over Bootstrap 5. <br/> Join over 1.6 million developers around the world. </p>
          </div>
        </div>
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
  h1 {
    margin-top: 60px;
    font-weight: bold;
    font-family: 'Varela Round', sans-serif;

  }

  .page-header{
    background-image: url('../assets/img/bg2.jpg');
    background-size: cover;
    margin: auto;
    height: 60vh;
    width: 100%;
    font-family: 'Varela Round', sans-serif;

  }

.party {
  color:crimson;
  font-family: 'Varela Round', sans-serif;

}

</style>
