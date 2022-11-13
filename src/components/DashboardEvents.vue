<template>
  <div class="bg">
    <div class="filler"></div>

  <div>
      <h1>Parties You Created</h1>
      <div v-if="myParties.length > 0" class="cards d-flex row justify-content-center">
        <div class="col-3" v-for="party in myParties" :key="party">
          <router-link :to="{ name: 'eventdetails', params: {id: party.id} }" class="card">
            <img :src="imgURL" class="card__image" alt="" />
            <div class="card__overlay">
              <h5 class="card__header"> {{party.title}}</h5>
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path/></svg>
                <img class="card__thumb" :src="avatarURL" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">{{ party.partyLeaderName }}</h3>
                  <span class="card__status">{{ party.date }} {{party.time}}</span>
                </div>
          
              <p class="card__description">{{party.description}}</p>
            </div>
          </router-link>
        </div>
      </div>
      <p v-if="myParties.length == 0">You have not created any parties! Why not <router-link :to="{ name: 'createevent'}" class="text-danger">start one?</router-link></p>
  </div>
  
  <div>
      <h1>Parties You Joined</h1>
      <div v-if="theirParties.length > 0" class="cards d-flex row justify-content-center">
        <div class="col-3" v-for="party in theirParties" :key="party" >
          <router-link :to="{ name: 'eventdetails', params: {id: party.id} }" class="card">
            <img :src="imgURL" class="card__image" alt="" />
            <div class="card__overlay">
              <h5 class="card__header"> {{party.title}}</h5>
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path/></svg>
                <img class="card__thumb" :src="avatarURL" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">{{ party.partyLeaderName }}</h3>
                  <span class="card__status">{{ party.date }}</span>
                </div>
              <p class="card__description">{{party.description}}</p>
            </div>
          </router-link>
        </div>
      </div>
      <p v-if="theirParties.length == 0">You have not joined any parties! Why not be the one to <router-link :to="{ name: 'createevent'}" class="text-danger">invite your friends?</router-link></p>
  </div>
  <div class="filler"></div>
  <div class="filler"></div>
  <div class="filler"></div>

  
</div>
  
  </template>
  
  <script scoped>
  import db from '@/fb';
  import { getAuth } from "firebase/auth";
  
  
  export default{
      data(){
          return {
              myParties: [],
              theirParties: [],
              imgURL: 'https://media.istockphoto.com/photos/festival-event-party-with-hipster-people-blurred-background-picture-id613897214?b=1&k=20&m=613897214&s=170667a&w=0&h=-kMh6hhUXyGXn9sRXXj_Nc4aqalA3jCoqFUGsg3AG2I=',
              avatarURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///+ZmZn6+vqioqKUlJSXl5eQkJCOjo7m5uaKioqfn5/V1dW9vb2np6ft7e3Gxsb29vbf39+2trbS0tKsrKzExMTb29vLy8vr6+uxsbE203S4AAAHW0lEQVR4nO2dWberKgyAizIoDtU67f7/P3p1d/eeDg4EA9qa7+E+3LVOMRsISUjC6UQQBEEQBEEQBEEQBEEQBEEQBEEQBEEgUpRVl9ZaSBUPKCl0nXZVWWz9YQgEUZJq/otgj4jb/9RpEgVbf6Q1QdRl7E009iKo5CzrPlHKorzoeeGe5lNfPmvJBuWVKW4k3R2u2LX8lJnMG6aE2ew9zaRQrMm3/ngDyjqGzd7TTMZ1ubUACyRCwmfvaSalSLYWYoaKyVXi3ZCs2lqQCVptqDuXEFy3WwszQpRhzN8dmUVbC/RCkCqc+bsj1GVXZ0fC7fXnFJzvR+UUmUKXb0BlO7FzqpUHxDRC7kGrBhdMDfOK3H435iH+DnyEhxsbci3SETiN4JuejWeXK/SOPG8n4NWHgL2I160EdLwF/8HDTeQrvAk4iLjByehTwE1E9CvgBiL6FtC/iN4F9K1uNhDQr4iXLQTsRbz4EtCLJTOGL+umtRSQSyl0GIZaSGm5CKQXGzW3+rohcN9GeREEQZFH7RDyt/oZD55GEFp4E1ykr5GlKBUWMorQvb9ooWW4rMa+K6gsFqt7bVPBN6Ga1g9neIDHdWCjAAs476RbhAikW9smg27CpUALPMwjMpcCJtBVJZvF32ygIiqHcdQAuqSMjmiwAcHd6VOoHpWp0c+mQBHd6dMIuEaNdwx0dytX1zbQDzFeTdDV70rZQO1RaX5hXUJ/2ol9GmjYFPIa8OM1bBaFdqFsoNYMh2yWCKrDXFg2sE9gHBbGvUIPInwBE+AnAPUdVE87uD4F6lGRwXZKAFXUAltAqLbjy+baMw10J2KnFoEPZagznrsyJ0zHj2HjMwH1cQqo1xLjBjSga0hADsMbNdRigu6DWQLY4P3wZjb3IynYF8Y89UuoX8jhkc0zVEKFqWuu0E3C4TZHBZUQaFPMUgDH7nU5/EBO4DEuvIgNeJH6kRBxmcJjpD5WKaKvD/WbmB9Ng+hDQV0b5um0YBIrmtFZXDBYnPjwQSz2wjjgMPAA2GqzGAPLNgUbNAPOLe8bOBvRYht68J5uo+BsRIujuAe6gDKbQZA8fQslx8B6LrL6M1qo7DG0zdjQ49guvUNoFAktswpAV+52yQH9IBgCWg8OMf3BwcT7IBiOfmmbHgRIX26tx8AwvqGB0v8R5gE/i3LFPwkxlKmNzfY3vKnpBry1eByiQ5DQ7rD4xTBLa0UWGcpxAY2BPaJMTONqRU2RRUzvHbvj8IaOl1dRF68aAUHCdSUji1f50Ev8FzCuL1amWqJnDD0jESRcW3kneDfl4wTd6qIihSAh9MbiHRm2o5l7bbg+FTfehYRDefb51ecvziiF33uRcOglwJr2viPztmEr+hI8sh8J2W8WtJKCif6/tlnQ7+xKQidgSOimihkLDF26VemBGRjn4doTi8+z8tcxbJoVVqPgMtaX6q8K4ZWhKqG66FiuOfYx7FJr32I4IExc8HLF0YHiW1j6h5KlP8Zj/KSWxz+Kf2jl48swAeZEJVYmHIqPbxGn4domfJJoi5Ew4jSwWJsY9Etjd2ESNIPOAW17lFgbLF6qe4fQfP+98tO7iyDdjVPpBVs7al2qUgMzoVBi3ifILb5YnR9RQpoVId1bAI4LztavmpwBxsO5ezJXplxj5PAU5joV6f7Q+A4Yq2TevNgf6Q7Y9B5faKyMz9x46yMl1BjmYkj7U+KVHzP7Bi1P2MxuizGTIUujyAJaPo3RRkSulTe6rUHLiTLJaxPYLR0MSsYRa4MM0ggkdqF8vjyJiHWIy/mluGnlvyynECHmlxrknOHXkhkcUohV3Ut53hYpwcss5WJh5nkvLVM35YBLCg41V39hxTiZwuVJRP2zLmx7N20O5rc/snKbrXtC8mHemfXbkOueZm1TcLasKXNZtej13DP1h270zMCcrkGvP5y5vhCuFmm/TGdGRR9s2tN31uFgrjrYRRvlyb8mxhXeFNMb0cFgU/X46F7FI1MehpN6/Klt73AbTm5ER8ptoi8GyuXIFBPhBVd928bPREcm241xw81ZI6VxzYYWShgdclRCd9p71NdXLntvFWN/VIc920Y75cQuu+AFY/awwz5Ro72+MHJ2phmR0GWvr1Fl41tCt/3axnru+ZbQcc+9EcvGs4TuH4R406d+JfTQafetf6lXCX30L33LXFAjCV14vChvHz1o3+xTEbrkecH46SN8gF7QB+jnfYCe7Afoq3+AtxG+/32LA7xRcoB3Zk7f/1bQ6QDvPR3gza4DvLt2gLfzDvD+4en737A8HeAd0tP3vyV7OsB7wKfvf9N54Nvf5R749rfVBxKx8ujo//2uFMwIZb2ilwCPa/REIAfkDVMWjZ+EUKzZ3EQzJCivTMFmkit2Lfd2PsxSlBdtWqQtuNSXcj/2izFB1GVDNf6cmGKoyM+66KNm74kgSlJ9ay0g3kTr0WnywdL9oyirLq21kCoeUFLoOu2qT1yYBEEQBEEQBEEQBEEQBEEQBEEQBEEQe+Y/fY1lwV9EArIAAAAASUVORK5CYII='
          }
      },
      methods:{
          sortBy(prop){
              this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
          },
          changeImage(url){
              this.imgURL = url;
          }
      },
      mounted(){
          const auth = getAuth();
          const user = auth.currentUser;
  
  
          db.collection('parties').onSnapshot(res => {
              const changes = res.docChanges();
              changes.forEach(change => {
                  if (change.type === 'added'){
                      if (change.doc.data().partyLeader == user.email){
                          this.myParties.push({
                              ...change.doc.data(),
                              id: change.doc.id
                          })
                      }
                      else {
                          for (var i = 0; i < change.doc.data().friends.length; i++){
                              var involvesUser = false;
                              if (change.doc.data().friends[i].email == user.email){
                                  involvesUser = true;
                              }
                              if (involvesUser){
                              this.theirParties.push({
                                  ...change.doc.data(),
                                  id: change.doc.id
                              })
                          }
                          }
                          
                      }
                      // console.log(change.doc.data().friends.email);
                      console.log(user.email);
                  }
              })
          })
          console.log(this.myParties)
      }
  }
  </script>
  
  <style>
  :root {
    --surface-color: #fff;
    --curve: 40;
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Varela Round', sans-serif;
  }
  
  .bg {
    background-color: rgb(255,250,247);
  }

  body {
    font-family: 'Varela Round', sans-serif;
  }
  
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;
    
  }.card {
  position: relative;
  display: block;
  height: 100%;  
  border-radius: 5px;
  overflow: hidden;
  text-decoration: none;
  max-width: 340px;
}

.card__image {      
  width: 100%;
  height: auto;
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;      
  border-radius: 5px;    
  background-color: var(--surface-color);      
  transform: translateY(100%);
  transition: .2s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 10%;
  border-radius: 5px;    
  background-color: var(--surface-color);
  transform: translateY(-100%);
  transition: .2s ease-in-out;
  color:white;
  background-color: crimson;
}

.card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;      
  z-index: 1;
}

.card__arc path {
  fill: var(--surface-color);
  d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}       

.card:hover .card__header {
  transform: translateY(4);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;      
  border-radius: 5px;      
}

.card__title {
  font-size: 1em;
  margin: 0 0 .3em;
  color: black;
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: 'Varela Round', sans-serif;
  font-size: .8em; 
  color: black;  
}

.card__status {
  font-size: .8em;
  color: black;

}

.card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: black;
  font-family: 'Varela Round', sans-serif;  
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}    
</style>