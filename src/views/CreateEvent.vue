<template>

  <div class="bg" id="screen">
    <div id="largefiller"></div>
    
    <input type="text" placeholder="Your Party Name" class="text-align-center" id="partyname" v-model="title"><br><br>
    <input placeholder="Party Date" type="text" onfocus="(this.type = 'date')" id="partydate" v-model="date">
  
    <div id="filler"></div>
    <div id="filler"></div>
  
    <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8 col-sm-12">
      <div class="section">
        <h2>Select your party activites:</h2>
        <NearbyPlaces @add-place="addActivity"></NearbyPlaces>
      </div>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="section">
          <h2>Selected activities:</h2>
          <div class="ui segment" style="max-height: 500px; overflow:scroll">
            <div class="ui divided items" v-if="activities.length == 0">
              <div class="item">
                <div class="content">
                  <div class="header">
                    <h3 class="fst-italic">It's looking boring... Add an activity!</h3>
                  </div>
                </div>
              </div>
              </div>
            <div class="ui divided items" v-if="activities.length > 0">
              <div class="item" v-for="place in activities" :key="place.id">
                <div class="content">
                  <div class="header">{{place.name}}</div>
                  <div class="meta">{{place.vicinity}}</div>
                  <button class="ui button red" @click="removePlace(place)">Remove Activity</button>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
  </div>
  </div>

  <div id="filler"></div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8 col-sm-12">
      <div class="section">
        <AddFriends @add-friend="addFriend"></AddFriends>
      </div>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="section">
          <h2>Who's in?</h2>
          <div class="ui segment">
            <div class="ui divided items" v-if="selectedFriends.length == 0">
              <div class="item">
                <div class="content">
                  <h3 class="fst-italic">It's looking lonely... Get your mates in!</h3>
                </div>
              </div>
            </div>
            <div class="ui divided items" v-if="selectedFriends.length > 0">
              <div class="item" v-for="friend in selectedFriends" :key="friend">
                <div class="content">
                  <h3>{{friend.name}}</h3>
                  <button class="btn btn-primary" @click="removeFriend(friend)">Remove</button>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
  </div>
  </div>
  
  <div id="largefiller"></div>
  <button class="button" @click="submit" id="create">Create Party</button>
    
  
  <div id="largefiller"></div>
  <div id="largefiller"></div>
  <div id="largefiller"></div>
  </div>
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
        added: false
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
          }
        }
      }
    
  
  
  </script>
  
  <style>
  
  .container {
    margin:0
  }
  .bg {
    background-color: rgb(255,250,247);
  }
  
  #largefiller {
    height: 40px;
  }
  
  #filler {
    height: 20px;
  }
  
  .section {
    background-color: white;
    padding:20px;
    border-radius: 10px;
    box-shadow: 0 0 5pt 2pt #D3D3D3;
  }
  
  #partydate {
    padding:10px;
    font-family: 'Varela Round', sans-serif;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid black;
    font-family: 'Varela Round', sans-serif;
    font-size:20px;
    text-align: center;
  }
  
  
  #partyname  {
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
      color:white;
      font-family: 'Varela Round', sans-serif;
      border: none;
      padding:5px 10px 5px 10px;
      font-size: 20px;
      margin-bottom:0px;
      border-radius:10px
  }
  
  button:hover {
      box-shadow: 0 0 5pt 2pt #D3D3D3;
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