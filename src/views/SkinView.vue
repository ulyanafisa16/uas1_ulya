<template>
 
 <div class="atas">
      <Navbar />
      <h2>Daftar Produk</h2>
<div>
  

  <b-container fluid class="p-5 bg-light">
  <b-row>
    <b-col>
      <b-img thumbnail fluid :src="require ('@/assets/image/gambar7.jpg')" alt="Image 1"></b-img>
      <p>Serum</p>
    </b-col>
    <b-col>
      <b-img thumbnail fluid :src="require ('@/assets/image/gambar12.jpg')" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid :src="require ('@/assets/image/gambar8.jpg')" alt="Image 3"></b-img>
    </b-col>
  </b-row>
</b-container>
  

    </div>

    <div>

<b-container fluid class="p-5 bg-light">
<b-row>
  <b-col>
    <b-img thumbnail fluid :src="require ('@/assets/image/gambar15.jpg')" alt="Image 1"></b-img>
    <p>Sunskrin</p>
  </b-col>
  <b-col>
    <b-img thumbnail fluid :src="require ('@/assets/image/gambar3.jpg')" alt="Image 2"></b-img>
  </b-col>
  <b-col>
    <b-img thumbnail fluid :src="require ('@/assets/image/gambar10.jpg')" alt="Image 3"></b-img>
  </b-col>
</b-row>
</b-container>


  </div>
  </div>
      

</template>
  
  <script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbar.vue'
  
  export default {
    name: 'SkinView',
    components: {
      Navbar,
      
    },
  }
  </script>

  <style >
  
  </style>
  