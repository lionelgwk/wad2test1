<template>
    <input type="text" ref="latLngRef" @input="$emit('update:latLng', $event.target.value)" :value="latLng" placeholder="Enter a place">
    <input type="text" ref="addRef" @input="$emit('update:add', $event.target.value)" :value="add" placeholder="Enter a place">
</template>



<script>

/* eslint-disable */

import { ref, onMounted } from 'vue';


export default {
    props:{
        add:{
            type: String,
            default: ''
        },
        latLng:{
            type: String,
            default: ''
        }
    },
    setup(){
        const addRef = ref();
        const latLngRef = ref();

        onMounted(() => {
            const autoComplete = new google.maps.places.Autocomplete(addRef.value, {
                types: ['address'],
                fields: ['address_components', 'geometry']
            });

            autoComplete.addListener('place_changed', () => {
                const place = autoComplete.getPlace();
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();
                latLngRef.value = `${lat}, ${lng}`;
            });
        })
        return { addRef, latLngRef }
    }
}
</script>

<style></style>