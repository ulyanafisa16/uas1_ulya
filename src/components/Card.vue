<template>
  
  <div>
    <div class="card">
      
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
      <div class="card-body">
        <h5 class="card-title">{{ product.nama }}</h5>
        <p class="card-text">Harga: Rp. {{ product.harga }}</p>
        <router-link class="btn btn-primary" :to="'/keranjang/' + product.id">
          <b-icon-cart></b-icon-cart>
          Pesan
        </router-link>
      </div>
    </div>
  

    
  
  
    
  
</template>

<script>
export default {
 name: "CardView",
 props: ['product']
 
};
</script>

<style>

</style>