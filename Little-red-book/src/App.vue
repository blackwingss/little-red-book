<template>
  <div id="app">
    <v-Header></v-Header>
    <v-Search class="v-search" v-show="show"></v-Search>
    <router-view></router-view>
    <v-Detail></v-Detail>
    <v-Footer></v-Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Search from '@/components/Search.vue'
import Detail from '@/components/Detail.vue'
export default {
  components: {
    'v-Header': Header,
    'v-Footer': Footer,
    'v-Search': Search,
    'v-Detail': Detail
  },
  computed: {
    show () {
      return this.$store.getters.getHeaderState.showSearch
    }
  }
}
</script>

<style lang="scss">
html, body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  position: relative;
  color: #000;
  background-color: #f5f8fa;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
a {
  color: transparent;
  text-decoration: none;
}
input {
  border: none;
  outline: none;
}
#app {
  position: absolute;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

::-webkit-scrollbar {
  display: none;
}

</style>
