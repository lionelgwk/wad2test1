<template>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
    <div class="ui grid">
        <div class="six wide column">
            <form class="ui segment large form">
                <div class="field">
                    <div class="ui right icon input large">
                        <input type="text" placeholder="Search for a place" v-model="coordinates">
                        <i class="search link icon" @click="findLocations"></i>
                    </div>
                </div>

                <div class="field">
                    <div class="two fields">
                        <div class="field">
                            <select v-model="type">
                                <option value="restaurant" selected>Restaurants</option>
                                <option value="bar">Bars</option>
                            </select>
                        </div>


                        <div class="field">
                            <select v-model="radius">
                                <option value="1" selected>1 KM</option>
                                <option value="2">2 KM</option>
                                <option value="3">3 KM</option>
                                <option value="4">4 KM</option>
                                <option value="5">5 KM</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button class="ui button pink" @click="findNearby">Find Locations</button>
            </form>

            <div class="ui segment" style="max-height: 500px; overflow:scroll">
                <div class="ui divided items">
                    <div class="item" v-for="place in places" :key="place.id">
                        <div class="content">
                            <div class="header">{{place.name}}</div>
                            <div class="meta">{{place.vicinity}}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="ten wide column segment ui" ref="map">
        </div>
    </div>
</template>

<script> 
import axios from 'axios';

/* eslint-disable */
export default {
    data() {
        return {
            type: "",
            radius: "",
            lat: 0,
            lng: 0,
            places: []
        }
    },
    computed:{
        coordinates(){
            return `${this.lat}, ${this.lng}`;
        }
    },
    methods: {
        findLocations() {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                },
                error => {
                    console.log("Error getting location");
                }
            );
        },
        findNearby(){
            const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.lat},${this.lng}&type=${this.type}&radius=${this.radius * 1000}&key=AIzaSyCTHZllCldMYoM9ByF8AcxKPWvIuFJsTx4`;
            console.log(URL);
            axios.get(URL)
                .then(response => {
                    this.places = response.data.results;
                    this.addLocationsToGoogleMaps();
                })
                .catch( error => {
                    console.log(error.message);
                });
        },
        addLocationsToGoogleMaps(){
            var map = new google.maps.Map(this.$refs["map"],{
                zoom: 15,
                center: new google.maps.LatLng(this.lat, this.lng),
                mapTypeId: google.maps.MapTypeId.ROADMAO
            });

            var infowindow = new google.maps.InfoWindow();

            this.places.forEach(place => {
                const lat = place.geometry.location.lat;
                const lng = place.geometry.location.lng;

                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat,lng),
                    map: map
                });

                google.maps.event.addListener(marker, "click", () => {

                    infowindow.setContent(
                        `<div class="ui header">${place.name}</div>
                        <p>${place.vicinity}</p>`
                    );

                    infowindow.open(map, marker);
                });
            })
        }
    }
}
</script>