<template>
    <div v-for="party in parties" :key="party" class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ party.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ party.date }}</h6>
            <p class="card-text">{{party.partyLeaderName}}</p>
            <p class="card-text">{{party.eventStatus}}</p>
        </div>
    </div>
</template>

<script>
import db from '@/fb';

export default{
    data(){
        return {
            parties: []
        }
    },
    methods:{
        sortBy(prop){
            this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
        }
    },
    created(){
        db.collection('parties').onSnapshot(res => {
            const changes = res.docChanges();
            changes.forEach(change => {
                if (change.type === 'added'){
                    this.parties.push({
                        ...change.doc.data(),
                        id: change.doc.id
                    })
                }
            })
        })
        console.log(this.parties)
    }
}
</script>

<style></style>