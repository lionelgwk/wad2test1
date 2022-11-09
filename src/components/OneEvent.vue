<template>
    <div class="myevents px-4"><br>
      <br><br><br>
      <div data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-in-sine">
        <h1>My Parties</h1>
      <p>View all your upcoming events here!</p>
      </div>
      
      <div class="row" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
        <div class="col-lg-4 d-flex justify-content-center">
          <div class="card my-2" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">CCA friends</h5>
          <p class="card-text">19/11/2022</p>
          <MaterialButton
            variant="gradient"
            color="danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            View Party
          </MaterialButton>
          </div>
          </div>
        </div>
        <div class="col-lg-4 d-flex justify-content-center">
          <div class="card my-2" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">Classmates</h5>
          <p class="card-text">27/11/2022</p>
          <MaterialButton
            variant="gradient"
            color="danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            View Party
          </MaterialButton>
          </div>
          </div>
        </div>
        <div class="col-lg-4 d-flex justify-content-center">
          <div class="card my-2" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">Cousins</h5>
          <p class="card-text">03/12/2022</p>
          <MaterialButton
            variant="gradient"
            color="danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            View Party
          </MaterialButton>
          </div>
          </div>
        </div>
    </div>
  </div>
  
  <PopUp v-show="showModal"></PopUp>
  </template>
    <script>
    // @ is an alias to /src
  
    import PopUp from '@/components/PopUp.vue'
    import MaterialButton from "@/components/MaterialButton.vue";
  
    export default {
      name: 'MyEvents',
      components: {
        PopUp,
        MaterialButton
      },
      data() {
        return {
          showModal: false
        }
      }
    }
    </script>    

  <style>
    h1 {
      font-family: 'Varela Round', sans-serif;
      font-weight: bold;

    }

    p {
      font-family: 'Varela Round', sans-serif;
      font-size:20px
    }


  </style>