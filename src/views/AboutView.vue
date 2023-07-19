<template>
  <div class="about">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mt-5 text-center">
            <hr />
            <h1 class="the">THE <span class="brand">ORIGINOTE</span></h1>
            <hr />
            <br />
            <div>
              <b-jumbotron
                bg-variant="info"
                text-variant="white"
                border-variant="light"
                style="
                  background-image: url('../assets/image/bg.png');
                  background-size: cover;
                "
              >
                <template #header>The Originote</template>
                <template #lead>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </template>
                <hr class="my-4" />
                <p>
                  It uses utility classes for typography and spacing to space
                  content out within the larger container.
                </p>
                <router-link
                  to="/keranjang"
                  class="btn btn-success float-center"
                  >Lihat semua</router-link
                >
              </b-jumbotron>
            </div>

            <div class="mt-5"></div>
            <div class="align-self-center">
              <div class="justify-content-center align-self-center">
                <h2>
                  <h1 class="skin">Perfect Your Beauty with</h1>
                  <h3>
                    <strong class="label"> THE <span>ORIGINOTE</span></strong>
                  </h3>
                </h2>
                <p>Brand Choice, Top Awareness sales and Rating 2023</p>
                <p>BPOM certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <b-container class="bv-example-row">
        <b-row class="text-center">
          <b-col></b-col>
          <b-col cols="8"
            ><h2><strong>You can Get It</strong></h2></b-col
          >
          <b-col></b-col>
        </b-row>
        <div class="market">
          <div class="mt-5"></div>
          <b-container class="bv-example-row">
            <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="6">
              <b-col
                ><a href="https://shopee.co.id/theoriginoteofficial"
                  >Shopee</a
                ></b-col
              >
              <b-col
                ><a href="https://www.tokopedia.com/theoriginote"
                  >Tokopedia</a
                ></b-col
              >
              <b-col
                ><a
                  href="https://www.lazada.co.id/shop/the-originote/?path=index.htm&spm=a2o4j.searchlist.card.1.604e36f9rRszpw&from=onesearch_brand_124490681"
                  >Lazada</a
                ></b-col
              >
              <b-col
                ><a
                  href="https://www.blibli.com/merchant/the-originote/THO-70072?pickupPointCode=PP-3438425&excludeProductList=false&promoTab=false"
                  >blibli</a
                ></b-col
              >
              <b-col
                ><a href="https://www.tiktok.com/@theoriginote"
                  >Tiktok</a
                ></b-col
              >
              <b-col
                ><a href="https://www.sociolla.com/15608_the-originote"
                  >Sociolla</a
                ></b-col
              >
            </b-row>
          </b-container>
        </div>
      </b-container>
      <div class="mt-4">
        <hr class="garis"/>
      </div>

      <br />
      <div>
        <h5>Rating</h5>
        <b-progress
          :value="75"
          variant="warning"
          class="w-25 mb-2"
        ></b-progress>
        <b-progress
          :value="50"
          variant="warning"
          class="w-50 mb-2"
        ></b-progress>
        <b-progress :value="75" variant="warning" class="w-75"></b-progress>
      </div>

      <div class="mt-5">
        <div class="mb-2">
          <b-row>
            <b-col class="card" mr="3">
              <b-avatar
                src="../assets/image/gambar14.jpg"
                size="6rem"
              ></b-avatar>
              <h2>Vania</h2>
              <div class="mt-3"></div>
              <b-form-rating
                v-model="value"
                variant="warning"
                class="mb-2"
              ></b-form-rating>
            </b-col>
            <b-col class="card" col="4">
              <b-avatar
                src="../assets/image/gambar6.jpg"
                size="6rem"
              ></b-avatar>
              <h2>Vania</h2>
              <div class="mt-3"></div>
              <b-form-rating
                v-model="value"
                variant="warning"
                class="mb-2"
              ></b-form-rating>
            </b-col>
            <b-col class="card" col="4">
              <b-avatar
                src="../assets/image/gamabr11.jpg"
                size="6rem"
              ></b-avatar>
              <h2>Vania</h2>
              <div class="mt-3"></div>
              <b-form-rating
                v-model="value"
                variant="warning"
                class="mb-2"
              ></b-form-rating>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "AboutView",
  components: {
    Navbar,
  },
  data() {
    return {
      value: 3,
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 75,
        height: 75,
        class: "m1",
      },
    };
  },
};
</script>
