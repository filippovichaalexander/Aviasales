<template>
  <div class="wrapper">
    <label for="date">Departure date</label>
    <input
      type="date"
      class="date departure-date"
      id="date"
      v-model="departureDate"
      @change="setDate"
    />
  </div>
</template>

<script>
export default {
  name: 'DepartureDate',
  data() {
    return {
      departureDate: false
    }
  },
  methods: {
    setDate() {
      let departureDate = this.departureDate
      console.log(departureDate)
      this.$store.dispatch('getFlights', departureDate);
    }
  }
};
</script>

<style scoped></style>
