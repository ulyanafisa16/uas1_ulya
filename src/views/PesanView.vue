<template>
  <div class="pesan">
    <Navbar />
    <VueCarousel />
    <div class="container">
      <div class="mt-5">
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="nama">
              <div class="card">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li v-for="(image, index) in product.gambar" :key="index" :data-target="'#carouselExampleIndicators'" :data-slide-to="index" :class="{ active: index === 0 }"></li>
        </ol>
        <div class="carousel-inner">
          <div v-for="(image, index) in product.gambar" :key="index" class="carousel-item" :class="{ active: index === 0 }">
            <img :src="'/assets/image/' + image" class="d-block w-100" :alt="'Slide ' + (index + 1)">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        </div>
          </div>
          </div>
          </div>

          <div class="col-md-6">
            <div class="mt-5"></div>
            <h2>{{ product.nama }}</h2>
            <hr />
            <div class="mt-5"></div>
            <s>Rp.{{ product.harga[1] }}</s>
            <h4 class="harga">Price: Rp. {{ product.harga[0] }}</h4>
            <form class="mt-1" v-on:submit.prevent>
              <div class="form-grup">
                <label for="jumlah_pesanan">Jumlah Pesanan</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="pesan.jumlah_pesanan"
                />
              </div>

              <div class="mt-4">
                <button type="submit" class="btn btn-success" @click="pesanan">
                  <b-icon-cart></b-icon-cart>   Order Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />

      <div class="mt-5">
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="flex-1"></div>
            <div class="nama">
              <div class="card">
                <img
                  :src="'/assets/image/' + product.gambar[1]"
                  class="img-fluid"
                />  
              </div>
              <div class="mt-4">
                  <h3>Penilaian produk</h3>
                  <h4>4.9</h4> <b-icon-star-fill class="star"></b-icon-star-fill>  <b-icon-star-fill class="star"></b-icon-star-fill>  <b-icon-star-fill class="star"></b-icon-star-fill>  <b-icon-star-fill class="star"></b-icon-star-fill>  <b-icon-star-fill class="star"></b-icon-star-fill>
                  <div class="mt-3">
        <b-progress
          :value="75"
          variant="warning"
          class="w-25 mb-2"
        ></b-progress>
        <b-progress
          :value="50"
          variant="warning"
          class="w-50 mb-2"
        ></b-progress>
        <b-progress 
        :value="75" 
        variant="warning" 
        class="w-75"
        ></b-progress>
      </div>

      <div class="row mb-4">
        <div class="row mb-5">
    <div class="col-md-6 mt-4" v-for="product in products" :key="product.id">
      <Card  :product="product"/>
        </div>
        </div>
      </div>
                </div>    
            </div>
          </div>
          <div class="cardket">
            <div class="mt-5">
             
                <div class="col-md-6"></div>
                  <div class="text-center">
                  <h2>Product Description</h2>
                </div>
                  <hr>
                  <p>{{ product.keterangan[0] }}</p>
                  <br>
                  <p>{{ product.keterangan[1] }}</p>
                  <br>
                  <h2>Benefit</h2>
                  <p>{{ product.keterangan[2] }}</p>
                  <br>
                  <h2>How to Use</h2>
                  <p>{{ product.keterangan[3] }}</p>
                  <br>
                  <h2>Ingredients</h2>
                  <p>{{ product.keterangan[4] }}</p>

                  <div>
              <b-jumbotron
                bg-variant="#9DC7E2"
                text-variant="white"
                border-variant="light"
                style="
                  background-image: url('../assets/image/daun.jpeg');
                  background-size: cover;
                "
              >
                <template #header>The Originote</template>
                <template #lead>
                  This is a simple Skincare, Quick Solution for Healthy Skin
                  Suitable for all skin types of Indonesian women
                </template>
                <hr class="my-2" />
                <router-link
                  to="/keranjang"
                  class="btn btn-success float-center"
                  >Lihat semua</router-link
                >
              </b-jumbotron>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";
import VueCarousel from 'vue-carousel';
import Bootstrap from "bootstrap-vue";

import axios from "axios";
export default {
  name: "PesanView",
  components: {
    Navbar,
    Card,
    VueCarousel

},
  data() {
    return {
      product: {},
      pesan: {},
      products: []
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pesanan() {
      this.pesan.products = this.product;
      axios
        .post("http://localhost:3000/keranjangs", this.pesan)
        .then(() => {
          this.$router.push({ path: "/troli" });
          console.log("Berhasil");
        })
        .catch((err) => console.log(err));
    },
    setProducts(data) {
        this.products = data;
      }
  },

  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));

      axios
        .get("http://localhost:3000/best")
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error))
  
 
    // Inisialisasi carousel Bootstrap setelah komponen dimuat
     new Bootstrap.Carousel(document.getElementById('carouselExampleIndicators'));
  },
  
};
</script>

<style>
</style>