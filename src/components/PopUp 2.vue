<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal container" @click.stop>
        <h6 class="text-align-center">CCA friends</h6>
        <p><span style="font-weight: bold;">Date:</span>19/11/2022</p>
        <p><span style="font-weight: bold;">Friends invited:</span> Lionel Goh, Ivan Yeo</p>
        <button class="button">Back</button> 
      </div>
      <div class="close" @click="$emit('close-modal')">      
  
      </div>
    </div>
    
  </transition>
</template>

<script>
export default {}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
  z-index: 1;
  text-align: center;
}

p {
  /* font-weight: 500; */
  font-size: 16px;
  margin: 20px 0;
  text-align: center;
}

.button {
  background-color: crimson;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
  text-decoration: None;
  display:flex;
  justify-content: center;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>