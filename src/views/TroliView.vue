<template>
  <div class="troli">
    <Navbar />
    <div class="row">
        <div class="col">
            <h2>Troli</h2>
           <div class="table-responsiv mt-4">
            <div class="table">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Skincare</th>
                    <th scope="col">Jumlah</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Total Harga</th>
                    <th scope="col">Hapus</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                        <th>{{ index + 1 }}</th>
                        <td>
                            <img :src="'../assets/image/' + keranjang.products.gambar" class="img-fluid" width="250"/> 
                        </td>
                        <td>{{ keranjang.products.nama }}</td>
                        <td>{{ keranjang.jumlah_pesanan }}</td>
                        <td>Rp. {{ keranjang.products.harga }}</td>
                        <td>Rp. {{ keranjang.products.harga*keranjangs.jumlah_pesanan }}</td>
                    </tr>
                </tbody>
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
  name: "TroliView",
  components: {
    Navbar,
  },
  data() {
    return {
        keranjangs: []
    }
  },
  methods: {
    setKeranjangs(data){
        this.keranjangs = data;
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>