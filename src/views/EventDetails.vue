<template>
    <h1>Event Details Page</h1>
    <p>{{title}}</p>
    <p>Organised by {{partyLeaderName}}</p>
    <ul>
        <li v-for="activity in activities" :key="activity.id">
            <p>{{activity.name}}</p>
            <p>{{activity.vicinity}}</p>
        </li>
    </ul>
    <p>Going with:</p>
    <ul>
        <li v-for="friend in friends" :key="friend.id">{{friend.name}}</li>
    </ul>
    <p>{{date}}</p>
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
            title: ''
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
    }
}
</script>

<style>
</style>