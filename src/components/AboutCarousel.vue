<template>
    <div>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine">
                <div class="text-white flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                        <img src="@/assets/party.avif" class="card-img" alt="...">
                        <div class="card-img-overlay d-flex">
                            <h4 class="card-title align-self-center mx-auto fw-bold">View All Events</h4>
                        </div>
                        </div>
                        <div class="flip-box-back">
                        <img src="@/assets/events.avif" class="back-card-img" alt="...">
                        <div class="card-img-overlay d-flex">
                            <p class="card-text align-self-center mx-auto fw-bold">All of your planned outings stored in once place for easier tracking.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                <div class="text-white flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                        <img src="@/assets/activities.avif" class="card-img" alt="...">
                        <div class="card-img-overlay d-flex">
                            <h4 class="card-title align-self-center mx-auto fw-bold">Activity Recommendations</h4>
                        </div>
                        </div>
                        <div class="flip-box-back">
                        <img src="@/assets/googlesearch.png" class="back-card-img" alt="...">
                        <div class="card-img-overlay d-flex">
                            <p class="card-text align-self-center mx-auto fw-bold">Search for and filter activities around your chosen location.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine">
                <div class="text-white flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                        <img src="@/assets/friends.avif" class="card-img" alt="...">
                        <div class="card-img-overlay d-flex">
                            <h4 class="card-title align-self-center mx-auto fw-bold">Invite Friends</h4>
                        </div>
                        </div>
                        <div class="flip-box-back">
                        <img src="@/assets/addfriend.jpeg" class="back-card-img" alt="...">
                        <div class="card-img-overlay d-flex">
                            <p class="card-text align-self-center mx-auto fw-bold">Select the friends you want to invite when creating your parties.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Varela+Round&display=swap');

h1 {
  position: relative;
  font-family: 'Varela Round', sans-serif;
  color: white;
  z-index: 1000;
  font-size: 3rem;
}

.card-text {
    font-size: 20px;
    padding: 0 10px 0 10px;
}

.card-title {
    color: rgb(255,250,247);
    border-bottom: solid 3px rgb(255,250,247);
}

.card-img {
    border-radius: 10px;

}

.back-card-img {
    opacity: 50%;
    border-radius: 10px;
}


/*Flip card container*/
.flip-box {
  background-color: transparent;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  cursor: pointer;
  margin:10px;
  border-radius: 10px;
}

/* This container is needed to position the front and back side */
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 52.65%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 10px;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-box-front,
.flip-box-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 10px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Style the back side */
.flip-box-back {
  color: black;
  transform: rotateY(180deg);
  font-family: 'Varela Round', sans-serif;
  border-radius: 10px;

}
</style>