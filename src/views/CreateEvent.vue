<template>

  <div id="largefiller"></div>
  
  <input type="text" placeholder="Enter Your Party Name" class="text-align-center">
  <div id="filler"></div>




  <div id="filler"></div>
  <div class="row">
    <div class="col">
      <h2>Select your friends:</h2>
    </div>
    <div class="col">
      <h2>Name of Party Host:</h2>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <select class="select" aria-label="Default select example" v-model="selectFriend">
        <option v-for="friend in friends" :key="friend" selected>{{friend}}</option>
      </select>
      <button class="button" v-on:click="addFriend()">Add friend</button>
    </div>
      
    <div class="col">
      <div id="filler"></div>
      user
    </div>
  </div>
  
  <div id="filler"></div>
  <h2>Select your party activites:</h2>
  <NearbyPlaces></NearbyPlaces>

  <div id="filler"></div>
  <h2>Select your party date:</h2>
  <input type="date" v-model="date">

  <div id="filler"></div>
  <button class="button" @click="submit">Create Party</button>



</template>


<script>

import db from "@/fb";
import NearbyPlaces from '../components/NearbyPlaces.vue';
import { getAuth } from "firebase/auth";

export default {
  created(){

  },
  name: 'CreateEvent',
  data() {
    return  {
      title: '',
      activities: [],
      date: null,
      partyLeader: '',
      partyLeaderName: '',
      address: [],
      friends: [],
      eventStatus: '',
      selectFriend: '', 
      selectedFriends: [],
    }
  },
    
  components: {
    NearbyPlaces,
  },


  methods: {
    updateLocation(location) {
      this.location = location;
      console.log(this.location);
    },
    addFriend() {
      if (this.selectedFriends.includes(this.selectFriend)) {
        return
      } else {
        this.selectedFriends.push(this.selectFriend);
      }
      console.log(this.selectedFriends);
    },
    submit(){
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user.email);
      const party = {
        title: this.title,
        activities: this.activities,
        date: this.date,
        partyLeader: user.email,
        partyLeaderName: user.email.split('@')[0],
        address: this.address,
        friends: this.friends,
        eventStatus: 'ongoing'
      }

      db.collection('parties').add(party)
        .then(() => {
            console.log('added to db')
        })
      
      console.log(this.title);
      console.log(this.activities);
      console.log(this.date);
      console.log(this.partyLeader);
      console.log(this.address);
      console.log(this.friends);
      console.log(this.eventStatus);
      }
    }
  }

</script>

<style>

#largefiller {
  height: 100px;
}


#filler {
  height: 20px;
}

input[type="date"] {
  border-radius: 10px;
  padding:10px;
  font-family: 'Varela Round', sans-serif;
}


input[type="text"] {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
  font-family: 'Varela Round', sans-serif;
  font-size:40px;
  text-align: center;
}


.button {
  background-color: crimson;
  font-family: 'Varela Round', sans-serif;
  color:white;
  border-radius:10px;
  margin-left:10px
}

select {
  width: 150px;
  font-family: 'Varela Round', sans-serif;
  height: 40px;
  border-radius: 10px;
  padding:5px;
  margin-right:10px;
}

.row {
  margin-bottom:10px
}


.toast-wrapper {
    position: fixed;
    width: 100%;
    top: 20px;
  }
.toast {
  padding: 20px;
  color: white;
  background: #ff0062;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
  max-width: 400px;
  margin: 0 auto;
}


/* .toast-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}

.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.toast-enter-active {
  transition: all 0.3s ease;
} */

</style>