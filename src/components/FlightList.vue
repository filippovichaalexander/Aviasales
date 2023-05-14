<template>
  <div>
    <h1>Flights list</h1>
    <Filters />
    <Flight v-for="flight in flights" :key="flight.id" :flight="flight" />
  </div>
</template>

<script>
import Flight from './Flight.vue';
import Filters from './Filters.vue';

export default {
  data() {
    return {
      distance: 0
    }
  },
  components: {
    Flight,
    Filters
  },
  name: 'FlightList',
  computed: {
    flights() {
      return this.$store.getters.getFlights;
    },

    // getFilteredByClassFlight
  }
  // props: {
  //   msg: String,
  // },
};
</script>

<style scoped></style>
