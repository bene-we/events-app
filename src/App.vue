<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Nav from './components/partials/Nav.vue'

@Component({
  components: {
    Nav,
  },
})
export default class App extends Vue { }
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}

html,
body,
* {
  box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
