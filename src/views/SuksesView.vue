<template>
  <div class="container">
    <div class="sukses">
  <Navbar />
  <div class="mt-4">
    <div class="align-item-center text-center">
        <h2>Sukses</h2>
    </div>
  </div>
  <div class="text-center">
  <b-spinner label="Spinning"></b-spinner>
  <b-spinner type="grow" label="Spinning"></b-spinner>
  <b-spinner variant="primary" label="Spinning"></b-spinner>
  <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
  <b-spinner variant="success" label="Spinning"></b-spinner>
  <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
</div>
<hr>
<div class="text-center">
  <h3>Terimakasih</h3>
  <h2>Semoga Senang Untuk Belanja Lagi</h2>
</div>



</div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "SuksesView",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>