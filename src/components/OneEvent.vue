<template>
  
    <div class="myevents px-4"><br>
      <br><br><br>
      <div data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-in-sine">
        <h1>My Parties</h1>
      <p>View all your upcoming parties here!</p>
      </div>
      
      <div class="row" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
        <div v-for="event in events" :key=event class="col-lg-4 d-flex justify-content-center">
          <div class="card my-2" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">{{ event.name }}</h5>
          <p class="card-text">{{ event.date }}</p>
          <MaterialButton
            variant="gradient"
            color="danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            class="button btn-danger"
            style="font-family:'Varela Round', sans-serif"
            > View Party
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
          showModal: false,
          events: [ {
            name: 'CCA outing',
            date: '19/11/2022'
          }, 
          {
            name: 'Secondary school reunion',
            date: '26/11/2022'
          }, 
          {
            name: 'Family gathering',
            date: '04/12/2022'
          } ],
          selected: ''
        }
      }
    }

    </script>    

  <style>
    h1 {
      font-family: 'Varela Round', sans-serif;
    }

    p {
      font-family: 'Varela Round', sans-serif;
      font-size:20px
    }

    button {
      font-family: 'Varela Round', sans-serif;
    }

  </style>