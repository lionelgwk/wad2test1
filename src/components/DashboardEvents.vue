<template>
    <p>test</p>
</template>

<script>
// import db from '@/fb';

export default{
    data(){
        return {
            parties: []
        }
    },
    methods:{

    },
    // created():
    //     db.collection('parties').onSnapshot(res => {
    //         const changes = res.docChanges();
    //         changes.forEach(change => {
    //             if (change.type === 'added'){
    //                 this.parties.push({
    //                     ...change.doc.data(),
    //                     id: change.doc.id
    //                 })
    //             }
    //         })
    //     })
    // }
}
</script>

<style></style>