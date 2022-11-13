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
  loading="lazy">
  <div  data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-in-sine"><br>
<div class = "container"> 
    <h1><span class="party">Party</span><br>
  Goers</h1> <br>
  <p class="desc">We're here to make planning exciting<br> outings with your friends easier!</p><br>

  <p class="click">Click <router-link :to="{ name: 'signin'}" class="text-danger">here</router-link> to Sign In.</p>
</div>
</div>
</div>

</header>

</ResponsiveContainer>  
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
position: relative;
background-color: white;
border-color: crimson;
border-style: solid;
border-radius: 10px;
flood-opacity: 80%;
margin-left:10%;
align-content: flex-start;
width:min-content;
padding-right: 10%;
box-shadow: 15px 15px 15px black;
height:auto;
}

h1 {
padding-top: 10%;
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

.page-header{
background-image: url('@/assets/partygoers.jpg');
background-size: cover;
margin: auto;
/*background-position: center center;
background-repeat: no-repeat;
background-attachment: fixed;*/

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
