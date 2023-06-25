<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Skincare</strong></h2>
        </div>
  

        <div class="col">
          <router-link to="/skin" class="btn btn-success float-right"
            ><b-icon-eye></b-icon-eye>Lihat semua</router-link
          >
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4 mt-4" >
          </div>
          </div>
          </div>
        </div>
        
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";



export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    
  },
};
</script>
