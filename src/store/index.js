import { createStore } from 'vuex';

export default createStore({
  state: {
    arrivalPoints: [],
    departurePoints: [],

    selectedDeparture: null,
    selectedArrival: null,

    flights: [],
    // filteredFlights: [],

    token: 'b060afdc4b6c296653c6a16c277c53ef'
  },
  getters: {
    getArrivalPoints: state => state.arrivalPoints,
    getDeparturePoints: state => state.departurePoints,
    getFlights: state => state.flights,
    // getFilteredByClassFlight: state => state.filteredFlights 
  },
  mutations: {
    setArrivalPoints(state, data) {
      state.arrivalPoints = data;
    },
    setDeparturePoints(state, data) {
      state.departurePoints = data;
    },
    setSelectedDeparture(state, data) {
      state.selectedDeparture = data;
    },
    setSelectedArrival(state, data) {
      state.selectedArrival = data;
    },
    setFlights(state, data) {
      state.flights = data;
    },
    setFilteredFlights: (state, data) => {
      
      
      //   // flight classes
      // if(data.selectedFlightClass != 10) {
      //   return this.state.flights.filter(flight => flight.trip_class === selectedFlightClass)
      // } else if(data.selectedFlightClass = 10) {
      //   return this.state.flights = data
      // }
      // //flight changes
      // else if(data.selectedChanges != 10) {
      //   return this.flights.filter(flight => flight.number_of_changes === selectedChanges)
      // } else {
      //   return this.state.flights = data
      // }
    }
  },
  actions: {
    async getArrivalPoints(context, query) {
      const res = await fetch(
        `http://autocomplete.travelpayouts.com/places2?term=${query}&locale=en&&types[]=city&`
      );
      if (res.ok) {
        let result = await res.json();
        context.commit('setArrivalPoints', result);
      }
      return res.ok;
    },
    async getDeparturePoints(context, query) {
      const res = await fetch(
        `http://autocomplete.travelpayouts.com/places2?term=${query}&locale=en&&types[]=city&`
      );
      if (res.ok) {
        let result = await res.json();
        context.commit('setDeparturePoints', result);
      }
      return res.ok;
    },
    async getFlights(context) {
      const res = await fetch(
        `http://api.travelpayouts.com/v2/prices/month-matrix?currency=rub&origin=${context.state.selectedDeparture}&destination=${context.state.selectedArrival}&show_to_affiliates&token=${context.state.token}`,
      );
      // console.log(`answer: ${res}`);
      if (res.ok) {
        let result = await res.json();
        // console.log(`answer: ${result.data}`);
        console.log(`${context.state.selectedDeparture}`);
        context.commit('setFlights', result.data);
      }
      // else{
      //   console.log(res.status)
      // }
      return res.ok;
    },
  },
});






// http://api.travelpayouts.com/v2/prices/month-matrix?currency=rub&origin=LED&destination=MOW&show_to_affiliates&token=b060afdc4b6c296653c6a16c277c53ef

// http://api.travelpayouts.com/v2/prices/month-matrix?currency=rub&origin=LED&destination=HKT&show_to_affiliates=true&token=b060afdc4b6c296653c6a16c277c53ef