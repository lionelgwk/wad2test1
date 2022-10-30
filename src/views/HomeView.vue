<script setup>
//Vue Material Kit 2 components

// image
const bgImage =
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80";
</script>
<template>
  <header>
    <div
      class="page-header min-vh-100"
      :style="{
        backgroundImage: `url(${bgImage})`
      }"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 col-md-7 d-flex justify-content-center flex-column"
          >
            <h1 class="text-white text-center mb-4">Welcome to <span class="party">Party</span>Goers</h1>
            <p class="text-white opacity-8 lead pe-5 me-5">
              The best way to plan outings with your friends.
            </p>
            <!-- <div class="buttons">
              <MaterialButton color="white" class="mt-4"
                >Get Started</MaterialButton
              >
              <MaterialButton color="none" class="text-white shadow-none mt-4"
                >Read more</MaterialButton
              >
            </div> -->
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
  color: black;
  font-weight: bold;
}

.party {
  margin-top: 60px;
  color: crimson;
  font-weight: bold;
}
</style>
