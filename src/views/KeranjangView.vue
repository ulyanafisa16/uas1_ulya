<template>
  <div>
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <Navbar />
          <div class="text-center">
          <h2><strong>Daftar</strong> menu</h2>
        </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-grup mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Skincare kamu.."
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchSkin"
            />
            <div class="input-grup-preopend">
              <span class="input-grup-text" id="basic-addon1"> </span>
            </div>
          </div>
        </div>
      </div>
      <div>
  <b-button variant="outline-primary" @click="searchByCategory('Acne')">Acne Series</b-button>
  <b-button variant="outline-primary">Glowing Kit</b-button>
  <b-button variant="outline-primary">Barrier Kit</b-button>
  <b-button variant="outline-primary">Button</b-button>
</div>
      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <Card :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  name: "KeranjangView",
  components: {
    Navbar,
    Card,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchSkin() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    },
    searchByCategory(category) {
      axios
      .get("http://localhost:3000/products?q=" + category)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>