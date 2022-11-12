<template>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb'

export default {
    data(){
        return{
            title: '',
            activities: [],
            date: null,
            partyleader: '',
            location: [],
            friends: [],
            status: ''
        }
    },
    methods: {
        submit(){
            if(this.$refs.form.validate()){
                const party = {
                    title: this.title,
                    activities: this.activities,
                    date: format(this.date, 'Do MMM YYYY'),
                    partyleader: this.$store.state.user.displayName,
                    location: this.location,
                    friends: this.friends,
                    status: 'ongoing'
                }

                db.collection('parties').add(party)
                .then(() => {
                    console.log('added to db')
                })
            }
        }
    },
    computed: {
        formattedDate(){
            return this.due ? format(this.due, 'Do MMM YYYY') : '';
        }
    }
}
</script>

<style scoped>
.modal {
   position: absolute;
   top: 80px;
   right: 100px;
   bottom: 0;
   left: 0;
   z-index: 10040;
   overflow: auto;
   overflow-y: auto;
}

.modal-open {
    overflow: initial;
}
</style>