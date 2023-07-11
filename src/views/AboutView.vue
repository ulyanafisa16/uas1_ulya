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
            <div class="mt-5">
              <div class="row">
                <div class="col-md-6">
                  <div class="mt-5">
                    <div class="flex-1"></div>
                    <div class="nama">
                      <div class="card">
                        <img
                          src="../assets/image/brand.jpg"
                          class="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="flex-1">
                    <div class="mt-5"></div>
                    <div class="d-flex h-100 align-self-right">
                      <div class="justify-content-right align-self-center">
                        <h2>
                          <h1 class="skin">Perfect Your Beauty with</h1>
                          <h3>
                            <strong class="label">
                              THE <span>ORIGINOTE</span></strong
                            >
                          </h3>
                        </h2>
                        <p>Brand Choice, Top Awareness sales and Rating 2023</p>
                        <p>BPOM certified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>

          <div class="col-md-6">
            <div class="flex">
              <div class="justify-content-center">
                <div class="align-item-center">
                  <h3> You Can Get It</h3>
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
};
</script>
