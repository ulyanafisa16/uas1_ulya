<template>
  <div class="container">
    <div class="sukses">
  <Navbar />
  <div class="mt-4">
    <div class="align-item-center text-center">
        <h2>Succeed</h2>
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
  <h3>Thank you</h3>
  <h2>Hope it's nice to shop again</h2>
</div>
<div class="mt-4">
  <div class="align-item-center">
    <div class="text-center"></div>
    <div class="justify-content-center float-center">
    <img src="../assets/image/succes.png" >
</div>
</div>
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