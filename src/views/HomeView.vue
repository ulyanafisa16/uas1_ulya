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
          <router-link to="/keranjang" class="btn btn-success float-right"
            ><b-icon-eye></b-icon-eye>  Lihat semua</router-link
          >
        </div>
      </div>
      <div class="row mb-3">
        <div class="row mb-4">
    <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
      <Card  :product="product"/>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Card from "@/components/Card.vue";
import axios from "axios"

export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    Card,
  },
  data() {
      return {
        products: []
      }
    },
    methods: {
      setProducts(data) {
        this.products = data;
      }
    },
    mounted() {
      axios
        .get("http://localhost:3000/best-products")
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error))
    }
};
</script>
