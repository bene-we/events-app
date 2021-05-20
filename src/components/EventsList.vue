<template>
  <div class="events container mb-6 pb-6">
    <h2 class="subtitle is-3 mb-6">Check out our upcoming events</h2>
    <div class="columns is-multiline">
      <template v-if="!loading">
        <div
          v-for="event in events"
          :event="event"
          :key="event.id"
          class="column is-one-quarter"
        >
          <router-link :to="'/event/' + event.id">
            <EventCard :event="event" />
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import EventCard from '@/components/EventCard.vue'
import { db } from '@/firebase'
import { Event } from '@/models/event.model'

@Component({
  components: {
    EventCard,
  }
})
export default class EventsList extends Vue {

  private loading = false
  private events: Event[] = []

  async created (): Promise<void> {
    this.loading = true
    this.events = await db.getEvents()
    console.log(this.events)
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
.events {
  margin-top: 100px;
  text-align: center;
  @include mobile {
    padding: 0 $gap;
  }
}
</style>