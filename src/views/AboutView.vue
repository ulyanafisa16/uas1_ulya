<template>
  <div class="about">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mt-5 text-center">
            <hr />
            <h1 class="depan">THE <span class="brand">ORIGINOTE</span></h1>
            <hr />
            <br />
            <div>
              <b-jumbotron
                bg-variant="info"
                text-variant="white"
                border-variant="light"
                style="
                  background-image: url('../assets/image/gambar9.jpg');
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
    <b-col cols="8"><h2><strong>You can Get It</strong></h2></b-col>
    <b-col></b-col>
  </b-row>
  <div class="market">
  <div class="mt-5"></div>
  <b-container class="bv-example-row">
  <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="6">
    <b-col><a href="https://shopee.co.id/theoriginoteofficial">Shopee</a></b-col>
    <b-col><a href="https://www.tokopedia.com/theoriginote">Tokopedia</a></b-col>
    <b-col><a href="https://www.lazada.co.id/shop/the-originote/?path=index.htm&spm=a2o4j.searchlist.card.1.604e36f9rRszpw&from=onesearch_brand_124490681">Lazada</a></b-col>
    <b-col><a href="https://www.blibli.com/merchant/the-originote/THO-70072?pickupPointCode=PP-3438425&excludeProductList=false&promoTab=false">blibli</a></b-col>
    <b-col><a href="https://www.tiktok.com/@theoriginote">Tiktok</a></b-col>
    <b-col><a href="https://www.sociolla.com/15608_the-originote">Sociolla</a></b-col>
</b-row>
</b-container>
</div>
</b-container>

      <div class="mt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="mt-5">
              <div class="flex-1"></div>
              <div class="nama">
                <div class="card">
                  <img src="../assets/image/brand.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="flex">
              <div class="justify-content-center">
                <div class="align-item-center">
                  <h3>You Can Get It</h3>
                  <br />
                  <div class="col-md-6"></div>
                  <div class="row"></div>
                  <div class="card">
                    <div class="mb-2">
                      <div class="flex-1"></div>
                      <b-avatar
                        src="../assets/image/brand.jpg"
                        size="6rem"
                      ></b-avatar>
                      Heloo world ini rivew from me you can get it
                      <br />
                      <div>
                        <label for="rating-inline">Inline rating:</label>
                        <b-form-rating
                          id="rating-inline"
                          inline
                          value="4"
                        ></b-form-rating>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="col-md-6"></div>
                  <div class="row"></div>
                  <div class="card">
                    <div class="mb-2">
                      <div class="flex"></div>
                      <b-avatar
                        src="https://placekitten.com/300/300"
                        size="6rem"
                      ></b-avatar>
                      Heloo world ini rivew from me you can get it
                      <br />
                      <div>
                        <b-form-rating
                          v-model="value"
                          variant="warning"
                          class="mb-2"
                        ></b-form-rating>
                        <p class="mt-2">Value: {{ value }}</p>
                      </div>
                      <br />
                      <card>
                        <!-- Card body -->
                        <b-row align-v="center">
                          <b-col md="auto">
                            <!-- Avatar -->
                            <a
                              href="javascript:;"
                              class="avatar avatar-xl rounded-circle"
                            >
                              <img alt="Image placeholder" src="" />
                            </a>
                          </b-col>
                          <b-col class="ml--2">
                            <h4 class="mb-0">
                              <a href="javascript:;">John Snow</a>
                            </h4>
                            <p class="text-sm text-muted mb-0">
                              Working remoteley
                            </p>
                            <span class="text-success">● </span>
                            <small>Active</small>
                          </b-col>
                          <b-col md="auto">
                            <base-button type="primary" size="sm"
                              >Add</base-button
                            >
                          </b-col>
                        </b-row>
                      </card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    };
  },
};
</script>
