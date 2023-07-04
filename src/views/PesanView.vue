<template>
  <div class="pesan">
    <Navbar />
    <div class="container">
      <div class="mt-5">
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="nama">
              <div class="card">
                <img
                  :src="'/assets/image/' + product.gambar[0]"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="mt-5"></div>
            <h2>{{ product.nama }}</h2>
            <hr />
            <div class="mt-5"></div>
            <h4>Harga: Rp {{ product.harga }}</h4>
            <form class="mt-1" v-on:submit.prevent>
              <div class="form-grup">
                <label for="jumlah_pesanan">Jumlah Pesan</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="pesan.jumlah_pesanan"
                />
              </div>

              <div class="mt-4">
                <button type="submit" class="btn btn-success" @click="pesanan">
                  <b-icon-cart></b-icon-cart>Pesan
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
            <div class="nama">
              <div class="card">
                <img
                  :src="'/assets/image/' + product.gambar[1]"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="cardket">
            
            <div class="mt-5">
            <div class="card">
              <div class="col-md-6"> 
                
                   
                    <h2>Keterangan</h2>
                    <hr />
                    <h3>{{ product.keterangan }}</h3>
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
import Navbar from "@/components/Navbar.vue";

import axios from "axios";
export default {
  name: "PesanView",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
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
  },

  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>