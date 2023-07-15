<template>
  <div class="container">
    <b-navbar toggleable="lg">
      <div class="logo">
      <a href="#">Originote</a>
    </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <router-link class="nav" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav" to="/keranjang">Product</router-link>
          </li>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content> User </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <li class="nav-item">
            <router-link class="nav" to="/troli">
              <b-icon-bag-fill></b-icon-bag-fill>
              <span class="badge badge-success ml-2"></span>
            </router-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal';

export default {
  name: "NavbarView",

  mounted() {
    const scrollReveal = new ScrollReveal({

    reset: false,
    distance:'80px',
    duration: 2000 ,
    delay: 200,
});

scrollReveal.reveal('.nav-item, .home', {
      duration: 1000,
      delay: 200,
      distance: '200px',
      origin: 'left',
      easing: 'ease-out',
    });
    scrollReveal.reveal('.hero, .card, .footer', {
      duration: 1000,
      delay: 200,
      distance: '200px',
      origin: 'left',
      easing: 'ease-out',
    });
    ScrollReveal().reveal('.container', { interval: 16, reset: false });
    
  },
};
</script>

<style>
.nav-item{
  color: rgb(160, 96, 96);
}
</style>