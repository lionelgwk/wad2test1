<template>
    <h1>Event Details</h1>

    <div class="card" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine">
        <h2>{{title}}</h2>
        <h4>{{description}}</h4>
        <h5>Organised by {{partyLeaderName}}</h5>
        <h3>Places Headed To:</h3>
        <div class="list">
        <ul>
            <li v-for="activity in activities" :key="activity.id">
                <h5>{{activity.name}}</h5>
                <p>{{activity.vicinity}}</p>
            </li>
        </ul>
        </div>
        <div class ="row">
        <div class="col">
        <h3>With:</h3>
        <ul>
            <h5><li v-for="friend in friends" :key="friend.id">{{friend.name}}</li></h5>
        </ul>
        </div>
        <div class="col">
        <h3>Date:</h3>
        <h5>{{date}}</h5>
        <h3>Time:</h3>
        <h5>{{time}}</h5>
        </div>
        </div>

        </div>
</template>

<script>
import db from '@/fb';
import { doc, getDoc } from "firebase/firestore";

export default {
    name: "EventDetails",
    props: ['id'],
    data(){
        return{
            activities: [],
            date: '',
            friends: [],
            partyLeader: '',
            partyLeaderName: '',
            title: '',
            description: '',
            time: '',
        }
    },
    async mounted(){
        const docRef = doc(db, "parties", this.id);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data().activities);
        const collection = docSnap.data();
        this.activities = collection.activities;
        this.date = collection.date;
        this.friends = collection.friends;
        this.partyLeader = collection.partyLeader;
        this.partyLeaderName = collection.partyLeaderName;
        this.title = collection.title;
        this.description = collection.description;
        this.time = collection.time;
    }
}
</script>

<style scoped>
.card{
    border-color: crimson;
    border-style: solid;
    border-radius: 10px;
    box-shadow: 15px 15px 15px black;
    font-family: 'Varela Round', sans-serif;
    margin-inline:auto;
    margin-bottom: 2%;
    align-content: center;
    width: 30rem;
}
 h1{
    font-family: 'Varela Round', sans-serif;
    padding-top: 2%;
    font-weight: bold;
    margin-inline: auto;
 }
 h2{
    padding-top: 2%;
 }
 h3{
    color:crimson
 }
 h5{
    font-weight:bold;
 }
 li{
    list-style:none;
    padding-right:32px;
 }
.inline{
    display: inline-block;
}

</style>