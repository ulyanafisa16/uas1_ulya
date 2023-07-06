<template>
 
  <div class="card">
    <img :src=" '/assets/image/' + product.gambar[0]" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text"> Harga : Rp. {{ product.harga }}</p>
      <router-link class="btn btn-primary" :to="'/keranjang/' + product.id">View More...</router-link>
    </div>
    </div>

  
</template>

<script>
export default {
 name: "CardView",
 props: ['product'],
 
};
</script>

<style>

</style>