<template>
  <div class="col-12">
    <div class="d-flex flex-column align-item-center">
    <Navbar />
    <h2>Selamat</h2>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
    class="mt-4"
  >
    <b-carousel-slide
      caption="First Slide"
      img-src="../assets/image/gambar16.jpg" 
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="../assets/image/gambar4.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="../assets/image/gambar17.jpg"
    ></b-carousel-slide>
  </b-carousel>
</div>
</div>

</template>



<script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbar.vue'
  
  export default {
    name: 'KeranjangView',
    components: {
        Navbar
    }
  }
  </script>

<style>

</style>