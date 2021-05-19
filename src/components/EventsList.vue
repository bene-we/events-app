<template>
  <div class="events container is-fluid mb-6 pb-6">
    <h2 class="subtitle is-3 mb-6">Check out our upcoming events</h2>
    <div class="columns is-multiline">
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
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import EventCard from '@/components/EventCard.vue'

@Component({
  components: {
    EventCard,
  }
})
export default class EventsList extends Vue {
  private event = {}
  private events = [
    {
      id: 1,
      name: 'Charity Ball',
      category: 'Fundraising',
      description:
        'Spend an elegant night of dinner and dancing with us as we raise money for for our new rescue farm.',
      featuredImage: 'https://placekitten.com/500/500',
      images: [
        'https://placekitten.com/500/500',
        'https://placekitten.com/500/500',
        'https://placekitten.com/500/500',
      ],
      location: '1234 Fancy Ave',
      date: '12-25-2019',
      time: '11:30',
    },
    {
      id: 2,
      name: 'Rescue Center Goods Drive',
      category: 'Adoptions',
      description:
        'Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.',
      featuredImage: 'https://placekitten.com/g/500/500',
      images: ['https://placekitten.com/500/500'],
      location: '1234 Dog Alley',
      date: '11-21-2019',
      time: '12:00',
    },
  ]
}
</script>

<style lang="scss" scoped>
.events {
  margin-top: 100px;
  text-align: center;
}
</style>