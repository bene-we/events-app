<template>
  <div class="event-card">
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by2">
          <img :src="event.featuredImage" :alt="`Image for ${event.name}`" />
        </figure>
      </div>
      <div class="card-content has-text-left p-0">
        <div
          class="card-event-when has-text-primary-light has-background-danger is-size-5 px-5 py-2 is-flex is-flex-direction-row is-align-content-center is-justify-content-space-between has-text-weight-bold"
        >
          <span>{{ event.date }}</span>
          <span>{{ event.location }} </span>
        </div>
        <div class="card-content-details p-5">
          <h2 class="is-size-3 has-text-weight-bold">
            {{ event.name }}
          </h2>
          <div class="is-flex">
            <span class="is-text-overflow">{{ event.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Event } from '@/models/event.model'

@Component
export default class EventCard extends Vue {
  @Prop() event!: Event
}
</script>

<style lang="scss" scoped>
.card-image {
  .image {
    height: 200px;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>