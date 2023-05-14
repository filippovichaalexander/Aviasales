<template>
    <div class="filters" v-if="flights">
      <select name="tripClass" id="trip-class" v-model="selectedFlightClass">
        <option value="" disabled selected="selected">Select flight class</option>
        <option value="10">All classes</option>
        <option 
        v-for="flightsClass in flightsClasses" 
        :value="flightsClass.trip_class" 
        :key="flightsClass.found_at">
        {{flightsClass.trip_class === 0 ? 'Second class' : 'First class'}}</option>
      </select>
      <select name="changesNumber" id="changes-number" v-model="selectedChanges">
        <option value="" disabled selected="selected">Select changes</option>
        <option value="10">All changes</option>
        <option 
        v-for="change in changes" 
        :value="change.number_of_changes" 
        :key="change.found_at">
        {{ change.number_of_changes === 0 ? 'Direct flight' : 
        change.number_of_changes === 1 ? 'One change' : 
        change.number_of_changes === 2 ? 'Two changes' : 
        change.number_of_changes === 3 ? 'Three changes' : ''}}</option>
      </select>
      <label for="distance">Select distance</label>
      <input type="range" id="distance" v-model="distance" max="10000"/>
      <p class="distance-value">{{this.distance}}</p>
      <button class="filter" @click="filterFlights">Filter flights</button>
    </div>
</template>

<script>

export default {
  data() {
    return {
      selectedFlightClass: false,
      selectedChanges: false,
      distance: 0
    }
  },
  // props: [
  //   filters
  // ],
  components: {
    // Flight,
  },
  name: 'Filters',
  computed: {
    flights() {
      return this.$store.getters.getFlights;
    },
    // filtered computed flights for selectors
    flightsClasses() {
      return this.flights.reduce((acc, obj)=>{
        let exist = acc.find((flightClass) => obj.trip_class === flightClass.trip_class ); 
        if(!exist){
          acc.push(obj);
        }
        return acc;
      },[]).sort(function(a, b){return a-b});
    },
    changes() {
      return this.flights.reduce((acc, obj)=>{
        let exist = acc.find((changesNumber) => obj.number_of_changes === changesNumber.number_of_changes ); 
        if(!exist){
          acc.push(obj);
        }
        return acc;
      },[]).sort(function(a, b){return a-b});
    },
  },
  methods: {
    // filterFlights(filterdItems) {
    //   let filterdItems = {
    //     selectedFlightClass,
    //     selectedChanges
    //   }
    //   this.$store.commit('setFilteredFlights', filterdItems);
    // }
  }
};
</script>

<style scoped></style>
