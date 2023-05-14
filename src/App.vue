<template>
  <div id="app">
    <DeparturePoint />
    <ArrivalPoint />
    <SearchBtn />
    <!-- <DepartureDate />
    <ArrivalDate /> -->
    <FlightList />
  </div>
</template>

<script>
import ArrivalPoint from './components/ArrivalPoint.vue';
import DeparturePoint from './components/DeparturePoint.vue';
import SearchBtn from './components/SearchBtn.vue';
// import ArrivalDate from './components/ArrivalDate.vue';
// import DepartureDate from './components/DepartureDate.vue';
import FlightList from './components/FlightList.vue';

export default {
  name: 'App',
  components: {
    ArrivalPoint,
    DeparturePoint,
    SearchBtn,
    // ArrivalDate,
    // DepartureDate,
    FlightList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
