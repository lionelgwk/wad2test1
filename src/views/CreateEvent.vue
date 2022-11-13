<template>

  <div id="largefiller"></div>
  
  <input type="text" placeholder="Enter Your Party Name" class="text-align-center" v-model="title">

  <h2>Select your party activites:</h2>
  <NearbyPlaces @add-place="addActivity"></NearbyPlaces>

  <h2>Select your party date:</h2>
  <input type="date" v-model="date">

  <div class="row">
    <div class="col">
      <div class="ui grid">
        <div class="six wide column">
          <h1>Who's In?</h1>
          <div class="ui segment">
            <div class="ui divided items" v-if="selectedFriends.length == 0">
              <div class="item">
                <div class="content">
                  <h2>Looking lonely... Get your mates in!</h2>
                </div>
              </div>
            </div>
            <div class="ui divided items" v-if="selectedFriends.length > 0">
              <div class="item" v-for="friend in selectedFriends" :key="friend">
                <div class="content">
                  <h2>{{friend.name}}</h2>
                  <button  class="btn btn-primary" @click="removeFriend(friend)">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <AddFriends @add-friend="addFriend"></AddFriends>
    </div>

  </div>
  
  <div id="filler"></div>


  <div id="filler"></div>


  <div class="ui grid">
    <div class="six wide column">
      <h1>Activities</h1>
      <div class="ui segment" style="max-height: 500px; overflow:scroll">
        <div class="ui divided items" v-if="activities.length == 0">
          <div class="item">
            <div class="content">
              <div class="header">
                <p>It's looking boring... Add an activity!</p>
              </div>
            </div>
          </div>
          </div>
        <div class="ui divided items" v-if="activities.length > 0">
          <div class="item" v-for="place in activities" :key="place.id">
            <div class="content">
              <div class="header">{{place.name}}</div>
              <div class="meta">{{place.vicinity}}</div>
              <button class="ui button red" @click="removePlace(place)">Add Activity</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="filler"></div>
  <button class="button" @click="submit">Create Party</button>



</template>


<script>

import db from "@/fb";
import NearbyPlaces from '../components/NearbyPlaces.vue';
import { getAuth } from "firebase/auth";
import AddFriends from '../components/AddFriends.vue';

export default {
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
      selectFriend: '', 
      selectedFriends: [],
      added: false,
    }
  },
    
  components: {
    NearbyPlaces,
    AddFriends

  },


  methods: {
    addActivity(place){
      if (!this.activities.includes(place)){
        this.activities.push(place);
      }
    },
    removePlace(place){
      this.activities.splice(this.activities.indexOf(place), 1);
    },
    updateLocation(location) {
      this.location = location;
    },
    addFriend(friend) {
      if (this.selectedFriends.includes(friend)) {
        return
      } else {
        this.selectedFriends.push(friend);
      }
    },
    removeFriend(friend){
      this.selectedFriends.splice(this.selectedFriends.indexOf(friend), 1);
      document.getElementById(friend.email).disabled = false;
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
        friends: this.selectedFriends,
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
  height: 60px;
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


</style>