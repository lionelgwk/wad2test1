<template>
    <div class="backdrop" @click.self="closeModalTwo">
        <div class="modal">
            <slot></slot>
            <div class="actions">
                <slot name="hyperlinks"></slot>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        props: ['theme'],
        methods :{
            closeModalTwo(){
                this.$emit('closeTheModal')
            }
        }
    }

</script>

<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    
    .backdrop {
        margin: 0;
        top: 0;
        position: fixed;
        background: rgba(0,0,0,.5);
        width: 100%;
        height: 100%;
    }
    
    .modal h1 {
        color: #03cfb4;
        border: none;
        padding: 0;
    }
    
    .modal p {
        font-style: normal;
    }
    
    .modal .action {
        text-align: center;
        margin: 30px 0px 10px 0px;
        color: #333;
    }
    
    .modal .actions a{
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }
</style>