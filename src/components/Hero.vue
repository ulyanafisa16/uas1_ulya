<template>
  <div class="hero">
    <!--Dekstop-->
    <div class="d-none d-md-block">
    <div class="row mt-4 ">
      <div class="col-md-6">
        <div class="d-flex h-100  align-self-right">
          <div class="justify-content-right align-self-center ">
            <h2>
              <strong>Skincare Menu, </strong>
              <h1>in your gadget</h1>
            </h2>
            <p>Ayo segera Pilih dan Check Out</p>
            <router-link to="/skin" class="btn btn-lg btn-success"
              ><b-icon-arrow-right></b-icon-arrow-right>Pesan</router-link
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


<div class="card-grup">
  <b-card-group deck>
    <b-card title="Title" img-src="../assets/image/gambar6.jpg" img-alt="Image" img-top>
    <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Title" img-src="../assets/image/gambar7.jpg" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Title" img-src="../assets/image/gambar8.jpg" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>
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
              ><b-icon-arrow-right></b-icon-arrow-right>Pesan</router-link
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