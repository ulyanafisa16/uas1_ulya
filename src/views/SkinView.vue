<template>
  <body>
    <div class="background">
      <Navbar />
      <h2>Daftar Produk</h2>
    </div>
  </body>
</template>
  
  <script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbar.vue'
  
  export default {
    name: 'SkinView',
    components: {
      Navbar,
      
    }
  }
  </script>

  <style scoped>
  .background {
    background-color: rgb(218, 203, 183);
  }

  body{
    background-color: rgb(93, 128, 161);
  }
  </style>
  