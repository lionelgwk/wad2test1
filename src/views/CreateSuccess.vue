<template>
    <div @load="explode">
        <div class="row">
            <div class="col-md-6 mx-auto mt-5">
                <div class="payment">
                    <div class="content">
                        <div style="padding-left:300px; padding-top:50px"><ConfettiExplosion v-if="visible"/></div>
                        <h1 class="pt-0">Party Created!</h1>
                        <img src="https://cdn-icons-png.flaticon.com/512/1161/1161670.png">
                        <p>Head over to 'My Parties' to check it out!</p>
                        <router-link :to="{ name: 'myevents'}" class="link">Go to My Parties</router-link>
                    </div>              
                </div>
            </div>
        </div>
        
    </div>

</template>

<script setup>
  import { nextTick, ref } from "vue";
  import ConfettiExplosion from "vue-confetti-explosion";

  const visible = ref(true);

  const explode = async () => {
    await nextTick();
  };
</script>

<script>
export default {
   name: "CreateSuccess"
};
</script>


<style scoped>


    .payment {
        border: 1px solid #f2f2f2;
        height:280px;
        border-radius: 20px;
        box-shadow: 0 0 5pt 0.5pt #D3D3D3;
        margin-top:20%;
        background-color: rgb(255,250,247);
    }
    
    .content{
        text-align: center;
        font-family: 'Varela Round', sans-serif;
        
    }

    .content h1 {
        font-size: 25px;
        padding-top: 25px;
        font-weight: bold;
    }

    .content a{
        width:200px;
        height:35px;
        color:#fff;
        border-radius: 30px;
        padding: 5px 10px;
        background: crimson;
        transition: all ease-in-out 0.3s;
    }

    .content a:hover{
        text-decoration: none;
        background: white;
        color:crimson;
        box-shadow: 0 0 5pt 2pt #D3D3D3;
    }

    img {
        height:40px;
        margin: 5px;
    }

    .link {
        text-decoration: none;
    }
</style>