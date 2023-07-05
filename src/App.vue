<template>
  <div id="app">
    <router-view/>
    <Foter />
  </div>
</template>


<script>
import Foter from "@/components/Foter.vue"
export default {
    components: {
      Foter
    }
}
</script>

