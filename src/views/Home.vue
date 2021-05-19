<template>
  <div class="home">
    <section class="hero is-fullheight-with-navbar background-image">
      <div class="hero-body">
        <div class="container title-wrapper">
          <h1 class="title">Welcome to the Animal Rescue League</h1>
          <h2 class="subtitle">
            Make sure you check out our upcoming events below
          </h2>
        </div>
      </div>
    </section>
    <EventsList />
    <section
      class="divider has-background-primary mb-6"
      style="height: 80px"
    ></section>
    <SignupForm />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import EventsList from '@/components/EventsList.vue'
import SignupForm from '@/components/SignupForm.vue'

@Component({
  components: {
    EventsList,
    SignupForm
  }
})
export default class Home extends Vue {

  login (): void {
    this.$auth.loginWithRedirect({});
  }
}
</script>

<style lang="scss" scoped>
.background-image {
  background-image: linear-gradient(
      90deg,
      rgba(56, 35, 0, 0.75) 8%,
      rgba(255, 255, 255, 0) 80%
    ),
    url("~@/assets/dog_shelter.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @include mobile {
    background-image: linear-gradient(
        90deg,
        rgba(56, 35, 0, 0.65) 0%,
        rgba(255, 255, 255, 0) 50%
      ),
      url("~@/assets/dog_shelter.jpg");
  }
}

.hero-body {
  @include mobile {
    align-items: stretch !important;
  }
}

.title-wrapper {
  margin-top: -200px;

  @include mobile {
    margin-top: 0;
  }
  .title {
    font-size: 5rem;
    color: white;

    @include mobile {
      font-size: 3rem;
    }
  }

  .subtitle {
    font-size: 2.8rem;
    color: white;

    @include mobile {
      font-size: 1.5rem;
    }
  }
}

.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -150px;
  .button {
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .welcome {
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}
.is-xl {
  font-size: 1.7rem;
}
</style>
