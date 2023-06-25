<template>
  <div class="hero">
    <!--Dekstop-->
    <div class="d-none d-md-block">
    <div class="row mt-4 ">
      <div class="col-md-6">
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
      <div class="col-md-6">
        <img src="../assets/image/gambar6.jpg" width="100%" />
      </div>
    </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
    <div class="row mt-4 ">
        <div class="col-md-6 mb-3">
        <img src="../assets/image/gambar6.jpg" width="100%" />
      </div>
      <div class="col-md-6">
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
</template>

<script>
export default {
  name: "HeroView",
};
</script>

<style>
</style>