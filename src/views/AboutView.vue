<template>
  <div class="about">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mt-5 text-center">
            <hr>
            <h1>ORIGINOTE</h1>
            <hr>
            <div class="gambar">
      <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    class="mt-4"
  >
    <b-carousel-slide
      caption="First Slide"
      img-src="../assets/image/gambar16.jpg" 
      class="carousel-image"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="../assets/image/gambar4.jpg"
      class="carousel-image"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="../assets/image/gambar17.jpg"
      class="carousel-image"
    ></b-carousel-slide>
  </b-carousel>
</div>
<br>

<div class="mt-5">
  <h2>ini adalah</h2>
  <br>
  <div class="col-md-6">
    <div class="mt-5">
            <div class="flex-1"></div>
            <div class="nama">
              <div class="card">
                <img src="../assets/image/gambar15.jpg" class="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
</div>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
export default {
 name: "AboutView",
 components: {
      Navbar,
 },

};
</script>
