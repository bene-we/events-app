<template>
  <div class="event-single">
    <template v-if="!loading">
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">{{ event.name }}</h1>
            <h2 class="subtitle">
              <strong>Date:</strong> {{ event.date }}
              <br />
              <strong>Time:</strong> {{ event.time }}
            </h2>
          </div>
        </div>
      </section>
      <section class="event-content">
        <div class="container">
          <p class="is-size-4 description">{{ event.description }}</p>
          <p class="is-size-4">
            <strong>Location:</strong> {{ event.location }}
          </p>
          <p class="is-size-4">
            <strong>Category:</strong> {{ event.category }}
          </p>
          <div class="event-images columns is-multiline has-text-centered">
            <div
              v-for="(image, index) in event.images"
              :key="index"
              class="column is-one-third"
            >
              <img :src="image" :alt="event.name" />
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { Event } from '@/models/event.model'
import { db } from '@/firebase'

@Component
export default class EventSingle extends Vue {
  private event!: Event
  private loading = false

  async created (): Promise<void> {
    this.loading = true
    const ID = Number(this.$route.params.id)
    let event = await db.getEvent(ID)
    if (event) {
      this.event = event
    }
    this.loading = false
    // ToDo: Add check in case of wrong route id
  }
}
</script>

<style lang="scss" scoped>
.event-single {
  margin-top: 30px;
}
.hero {
  margin-bottom: 70px;
}
.event-images {
  margin-top: 50px;
}
.description {
  margin-bottom: 30px;
}
</style>