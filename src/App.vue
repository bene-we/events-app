<template>
  <div id="app">
    <Nav />
    <router-view />
    <footer class="footer is-background-secondary has-background-info">
      <div class="content has-text-centered">
        <p class="is-size-4 is-family-sans-serif has-text-info-light">
          &copy; {{ thisYear }} Animal Rescue League LLC
        </p>
      </div>
    </footer>
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
export default class App extends Vue {
  private thisYear = new Date().getFullYear();
}
</script>

<style lang="scss">
html {
  overflow-y: hidden !important;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
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
