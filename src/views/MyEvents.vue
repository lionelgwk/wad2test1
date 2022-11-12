  <script setup>
  //Vue Material Kit 2 components
  // import MaterialButton from "@/components/MaterialButton.vue";
  // import Event from '@/components/OneEvent.vue';
  
  // import DashboardEvents from '@/components/DashboardEvents.vue';
  </script>

  <template>
    

    <DashboardEvents></DashboardEvents>

  </template>
  

<script>
import DashboardEvents from '@/components/DashboardEvents.vue';
export default {
    name: 'MyEvents',
    components: {
    // Event
    DashboardEvents,
}
  }
  </script>

<style>
.modal-content {
  font-family: 'Varela Round', sans-serif;
}

html{
  overflow-y: scroll;
}
</style>

<!-- <div class="container py-7">
  <Event/>
  <div class="row mt-5">
    <div class="col-sm-3 col-6 mx-auto">
      

      
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      ><br><br><br><br>
        <div class="modal-dialog container d-flex">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                CCA friends
              </h5>
              <MaterialButton
                color="none"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close">
              </MaterialButton>
            </div>
            <div class="modal-body">
              <h5>Friends:</h5>
              <p>John Lim, Steve Chay, George Tan</p>
              <h5>Date:</h5>
              <p>19/11/2022</p>
              <h5>Location:</h5>
              <p>East Coast Park</p>
              <h5>Activities:</h5>
              <p>Cycling, picnic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->