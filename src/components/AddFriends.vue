<template>
    <div class="ui grid">
        <div class="col">
            <div class="ui segment" style="max-height: 500px; overflow:scroll">
                <div class="ui divided items" v-if="friends.length > 0">
                    <div class="item" v-for="friend in friends" :key="friend">
                        <div class="content">
                            <div class="header">{{friend.name}}</div>
                            <br>
                            <button :id="friend.email" class="ui button blue" @click="addFriend(friend)">Add Friend</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import db from '@/fb';

export default{
    data(){
        return {
            friends: [],
            selectedFriends: []
        }
    },
    emits: ['add-friend'],
    methods:{
        sortBy(prop){
            this.friends.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
        },
        addFriend(friend){
            this.$emit('add-friend', friend);
            this.selectedFriends.push(friend);
            document.getElementById(friend.email).disabled = true;
        }
    },
    mounted(){
        db.collection('users').onSnapshot(res => {
            const changes = res.docChanges();
            changes.forEach(change => {
                if (change.type === 'added'){
                    this.friends.push({
                        ...change.doc.data(),
                        id: change.doc.id
                    })
                }
            })
        })
        console.log(this.friends)
    }
}
</script>

<style scoped>

.content {
    font-family: 'Varela Round', sans-serif;
}
.header {
    font-family: 'Varela Round', sans-serif;
}

.button {
    background-color: rgb(28, 137, 220);
    color:white;
    font-family: 'Varela Round', sans-serif;
    border: none;
    padding:5px 10px 5px 10px;
    font-size: 15px;
    margin-bottom:0px
}
</style>