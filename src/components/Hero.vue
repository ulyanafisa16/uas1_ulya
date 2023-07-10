<template>
  <div class="hero">
    <!--Dekstop-->
    <div class="d-none d-md-block">
    <div class="row mt-4 ">
      <div class="col-md-6">
        <div class="d-flex h-100  align-self-right">
          <div class="justify-content-right align-self-center ">
            <h2>
              <strong class="skin">Skincare Menu, </strong>
              <h1>in your gadget</h1>
            </h2>
            <p>Ayo segera Pilih dan Check Out</p>
            <router-link to="/keranjang" class="btn btn-lg btn-success"
              ><b-icon-arrow-right></b-icon-arrow-right>  Eksplore</router-link
            >
          </div>
        </div>
      </div>
      <!-- <div class="col-md-6">
        <img src="../assets/image/gambar13.jpg" width="80%" />
      </div> -->
<div class="shadow p-3 mb-5 bg-body rounded  col-6">
<div >
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
    </div>
    </div>



   


    <!-- mobile -->
    <div class="d-sm-block d-md-none">
    <div class="col-md-6">
        
        <!-- <img src="../assets/image/gambar6.jpg" width="100%" /> -->
    <div class="row mt-4">
      <div class="co-md-6 mb 3">
        <div class="d-flex h-100">
          <div class="justify-content-center align-self-center">
            <h2>
              <strong>Skincare Menu, </strong>
              <h1>in your gadget</h1>
            </h2>
            <p>Ayo segera Pilih dan Check Out</p>
            <router-link to="/" class="btn btn-lg btn-success"
              ><b-icon-arrow-right></b-icon-arrow-right>Order</router-link
            >
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  
</div>
</template>

<script>
export default {
  name: "HeroView",
};
</script>

<style>
</style>