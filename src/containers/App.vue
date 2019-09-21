<template>
  <div class="App">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
};
</script>

<style lang="stylus" scoped>
.App
  max-width: 1280px
  margin: 0 auto
  font-family: "Roboto", sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
