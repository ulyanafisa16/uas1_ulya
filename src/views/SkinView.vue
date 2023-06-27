<template>
 
 <div class="atas">
      <Navbar />
      <h2>Daftar Produk</h2>
      
      <div>
      <input type="text" v-model="searchTerm" placeholder="Masukkan kata kunci...">
      <button @click="search"><b-icon-search></b-icon-search></button>
    </div>
    <Pencarian @perform-search="performSearch"></Pencarian>


<div>
  <b-container fluid class="p-5 bg-satu">
  <b-row>
    <b-col>
      <b-img thumbnail fluid :src="require ('@/assets/image/gambar7.jpg')" alt="Image 1" ></b-img>
      <h3>serum</h3>
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
<b-container fluid class="p-5 bg-dua">
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
    data() {
    return {
       // Menyimpan kata kunci pencarian
      showText: null
    };
  },
  methods: {
      toggleText(index) {
        if(this.showText == index) { 
      this.showText = null;
    } else {
      this.showText = index;
    }
  }
  }

  };

  </script>

  <style >
  
  </style>
  