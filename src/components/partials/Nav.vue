<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <strong class="is-size-4">Animal Rescue League</strong>
      </router-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link
          v-if="$auth.isAuthenticated"
          to="/profile"
          class="navbar-item"
        >
          Profile
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- Check that the SDK client is not currently loading before accessing its methods -->
            <div v-if="!$auth.loading">
              <!-- show login when not authenticated -->
              <button
                v-if="!$auth.isAuthenticated"
                @click="login"
                class="button is-dark"
              >
                Log in
              </button>
              <!-- show logout when authenticated -->
              <button
                v-if="$auth.isAuthenticated"
                @click="logout"
                class="button is-dark"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Nav extends Vue {
  login (): void {
    this.$auth.loginWithRedirect({ appState: { targetUrl: process.env.BASE_URL } })
  }

  logout (): void {
    this.$auth.logout({
      returnTo: window.location.origin
    })
  }
}
</script>

<style lang="scss" scoped>
nav {
  margin-top: 25px;
  margin-bottom: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #d88d00;
    }
  }
}
</style>