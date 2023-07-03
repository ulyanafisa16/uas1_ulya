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

<div class="gambar">
  <img src="../assets/image/gambar13-rb.png"/>
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