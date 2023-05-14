<template>
  <div class="wrapper">
    <label for="date">Departure date</label>
    <input
      type="date"
      class="date departure-date"
      id="date"
      v-model="arrivalDate"
      @change="setArrival"
    />
  </div>
</template>

<script>
export default {
  name: 'ArrivalDate',
  data() {
    return {
      arrivalDate: false
    }
  },
  methods: {
    setArrival() {
      let arrivalDate = this.arrivalDate
      console.log(arrivalDate)
      this.$store.dispatch('getFlights', arrivalDate);
    }
  }
};
</script>

<style scoped></style>
