<template>
  <div class="product">
  <div class="card">
    <img :src=" '/assets/image/' + product.gambar[0]" class="card-img-top" alt="..." />
    <div class="card-body">
      <b-col>
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text"> Price : Rp. {{ product.harga[0] }}</p>
      <router-link class="btn btn-primary" :to="'/keranjang/' + product.id">View More...</router-link>
    </b-col>
      <b-col class="text-right">
    <s>RP.{{ product.harga[1] }}</s>
  </b-col>
      <div class="mt-2">
        <div class="rating-container">
  <b-form-rating
    icon-empty="heart"
    icon-half="heart-half"
    icon-full="heart-fill"
    variant="danger"
  ></b-form-rating>
</div>
</div>
    </div>
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