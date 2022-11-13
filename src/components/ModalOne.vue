<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal1" :class="{sale: theme === 'sale'}">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>


<script>

    export default {
        props: ['theme'],
        methods: {
            closeModal() {
                this.$emit('close')
            }
        }
    }

</script>

<style>

    .modal1 {
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

    .modal1 h1 {
        color: #03cfb4;
        border: none;
        padding: 0;
    }

    .modal1 p {
        font-style: normal;
    }

    .modal1 .action {
        text-align: center;
        margin: 30px 0px 10px 0px;
        color: #333;
    }

    .modal1 .actions a{
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px; 
    }

    .modal1.sale {
        background: crimson;
        color: white;
    }

    .modal1 .sale h1{
        color: white;
    }

    .modal1 .sale .action {
        color: white;
    }

    .modal1 .sale .actions a{
        color: white;
    }

</style>