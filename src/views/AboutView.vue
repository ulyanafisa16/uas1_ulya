<template>
  <div class="about">
    <Navbar />
    <h1>This is an about page</h1>
    <div>
    <video ref="videoElement" autoplay></video>
    <button @click="startCamera">Start Camera</button>
    <button @click="stopCamera">Stop Camera</button>
  </div>
  </div>

</template>

<script>

import Navbar from '@/components/Navbar.vue'
export default {
 name: "AboutView",
 components: {
      Navbar,
 },
 data() {
    return {
      videoStream: null,
      videoElement: null
    };
  },
  mounted() {
    this.videoElement = this.$refs.videoElement;
  },
  methods: {
    startCamera() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(stream => {
            this.videoStream = stream;
            this.videoElement.srcObject = stream;
          })
          .catch(error => {
            console.error("Error accessing webcam:", error);
          });
      } else {
        console.error("Webcam not supported");
      }
    },
    stopCamera() {
      if (this.videoStream) {
        this.videoStream.getTracks().forEach(track => track.stop());
        this.videoElement.srcObject = null;
      }
    }
  },

};
</script>
