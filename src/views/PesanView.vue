<template>
  <div class="pesan">
    <Navbar />
    <div class="mt-5">
    <div class="row">
      <div class="col-md-6">
        <img :src="'/assets/image/' + product.gambar" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <div class="mt-5"></div>
        <h2>{{ product.nama }}</h2>
        <hr>
        <div class="mt-5"></div>
        <h4>Harga: Rp {{ product.harga }}</h4>
        <form class="" v-on:submit.prevent>
            <div class="form-grup">
                <label for="jumlah_pesan">Jumlah Pesan</label>
                <input type="number" class="form-control" v-model="pesan.jumlah_pesan"/>
            </div>

            <div class="mt-4">
            <button type="submit" class="btn btn-success" @click="pesanan">
                <b-icon-cart></b-icon-cart>Pesan</button>
        </div>
        </form>
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
      product: [],
      pesan: []
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pesanan() {
        this.pesan.products = this.product;
        axios
        .post("http://localhost:3000/keranjangs"+ this.pesan)
        .then(() => [
            console.log("Berhasil"),
        ])
        .catch((err) => console.log(err))
    }
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