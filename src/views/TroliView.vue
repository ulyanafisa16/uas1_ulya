<template>
    <div class="container">
  <div class="troli">
    <Navbar />
    <div class="row">
      <div class="col">
        <div class="align-item-center text-center">
          <h2>Troli</h2>
        </div>
        <div class="table-responsiv mt-6 text-center">
          <div class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Price</th>
                <th scope="col">Total Price</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                <th>{{ index + 1 }}</th>
                <td>
                  <img
                    :src="'../assets/image/' + keranjang.products.gambar[0]"
                    class="img-fluid"
                    width="250"
                  />
                </td>
                <td>{{ keranjang.products.nama }}</td>
                <td>{{ keranjang.jumlah_pesanan }}</td>
                <td>Rp. {{ keranjang.products.harga }}</td>
                <td>
                  Rp. {{ keranjang.products.harga * keranjang.jumlah_pesanan }}
                </td>
                <td><b-icon-trash @click="hapusKeranjang(keranjang.id)"></b-icon-trash></td>
              </tr>
              <tr>
                <td colspan="5" align="right">
                  <strong>Grand Total : </strong>
                </td>
                <td>
                  <strong>Rp. {{ totalHarga }}</strong>
                </td>
              </tr>
            </tbody>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-end">
        <div class="col-md-6">
            <form class="mt-1" v-on:submit.prevent>
            <div class="form-grup">
              <label for="nama">Nama : </label>
              <input
                type="text"
                class="form-control"
                v-model="pesan.nama"
              />
            </div>
            <div class="form-grup">
              <div class="mt-1"></div>
              <label for="phone">Phone : </label>
              <input
                type="Number"
                class="form-control"
                v-model="pesan.nomor"
              />
            </div>
            <div class="form-grup">
              <div class="mt-1"></div>
              <label for="alamat">Address : </label>
              <input
                type="text"
                class="form-control"
                v-model="pesan.alamat"
              />
            </div>
            <div class="form-grup">
              <div class="mt-1"></div>
              <label for="pembayaran">Metode Pembayaran : </label>
              <b-form-select
                type="options"
                class="form-select"
                v-model="selected" :options="options"></b-form-select>
            </div>

            <div class="mt-4">
              <button type="submit" class="btn btn-success" @click="chekout">
                <b-icon-cart></b-icon-cart>Chek Out
              </button>
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
  name: "TroliView",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {},
      selected: null,
      options:[
        {value: null, text: 'Pilih Metode Pembayaran.....' },
        {value: "a", text: 'Bayar ditempat (COD)'},
        {value: "a", text: 'Dana'},
        {label:'Transfer Bank',
        options: [
        {value: "a", text: 'Bank BCA'},
        {value: "a", text: 'Bank Mandiri'},
        {value: "a", text: 'Bank BNI'},
        {value: "a", text: 'BAnk BRI'},
        {value: "a", text: 'Bank Syariah Indonesia'},
        {value: "a", text: 'Bank Permata'},
        ]
      }
        
      ]
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.keranjangs = this.keranjangs.filter(
            (keranjang) => keranjang.id!==id
          );
        })
        .catch((error) => console.log(error));
    },
    chekout(){
        if(this.pesan.nama && this.pesan.alamat){
            this.pesan.keranjangs = this.keranjangs;
            axios
            .post("http://localhost:3000/pesanans", this.pesan)
            .then(()=>{

                //hapus keranjang
                this.keranjangs.map(function (item){
                    return axios
                    .delete("http://localhost:3000/keranjangs/" + item.id)
                    .catch((error) => console.log(error));
                });
                this.$router.push({path: "/sukses"})
            });

        }else{
            console.log("error")
        }
    
  }
},
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pesanan;
      }, 0);
    },
  },
};
</script>

<style>
</style>