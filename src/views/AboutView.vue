<template>
  <div class="about">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mt-5 text-center">
            <hr />
            <h1>ORIGINOTE</h1>
            <hr />
            <div class="gambar">
              <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                indicators
                class="mt-4"
              >
                <b-carousel-slide
                  caption="First Slide"
                  img-src="../assets/image/gambar16.jpg"
                  class="carousel-image"
                ></b-carousel-slide>
                <b-carousel-slide
                  caption="Second Slide"
                  img-src="../assets/image/gambar4.jpg"
                  class="carousel-image"
                ></b-carousel-slide>
                <b-carousel-slide
                  caption="Third Slide"
                  img-src="../assets/image/gambar17.jpg"
                  class="carousel-image"
                ></b-carousel-slide>
              </b-carousel>
            </div>
            <br />

            <div class="mt-5">
              <h2>ini adalah</h2>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <div class="mt-5">
                    <div class="flex-1"></div>
                    <div class="nama">
                      <div class="card">
                        <video
                          src="../assets/image/vid3.mp4"
                          class="img-fluid"
                          autoplay-control
                        ></video>
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
                          <strong class="skin">Skincare Menu, </strong>
                          <h1>in your gadget</h1>
                        </h2>
                        <p>Ayo segera Pilih dan Check Out</p>
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
