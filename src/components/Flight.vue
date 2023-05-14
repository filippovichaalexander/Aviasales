<template>
  <div class="wrapper">
    <h1>Flight Details</h1>
    <h2 class="trip-class">Trip class{{flight.trip_class ? 'Second class' : 'First class'}}</h2>
    <h2 class="origin">Origin City{{flight.origin}}</h2>
    <h2 class="desination">Desination City{{flight.destination}}</h2>
    <p class="depart-date">Depart date{{flight.depart_date}}</p>
    <p class="return-date">Return date{{flight.return_date}}</p>
    <p class="layover">Number of changes{{flight.number_of_changes}}</p>
    <p class="price">Price{{flight.value}}</p>
    <p class="found-at">Flight found at{{flight.found_at}}</p>
    <p class="distance">Distance{{flight.distance}}</p>
    <p class="actual">Flight actual{{flight.actual ? 'Actual' : 'None actual'}}</p>
  </div>
</template>

<script>
export default {
  name: 'Flight',
  props: {
    flight : Object
  },
};
</script>

<style scoped></style>
