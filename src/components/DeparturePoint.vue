<template>
  <div>
    <div>
      <label for="input">Select arrival point</label>
      <div
        id="input"
        сlass="search-bar"
        :style="{ position: isVisible ? 'absolute' : 'fixed' }"
        @сlick.self="hideList"
      >
        <input
          type="text"
          v-model="searchPoint"
          placeholder="Country, city, arport"  
          @focus="isVisible = true"
          @blur="isVisible = false"
          @input="selectPoint()"                      
        />
        <div class="search-bar-options" v-if="isVisible">
          <div
            v-for="departurePoint in departurePoints"
            :key="departurePoint.id"
            class="search-bar-option"
          >
            <p class="pointer category" @mousedown="choosePoint(departurePoint)">
              {{departurePoint.name}}, {{ departurePoint.country_name }} ({{departurePoint.city_code}})
            </p>
          </div>
          <div v-if="departurePoints.length === 0">
            <p>No results found!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrivalPoint',
  data() {
    return {
      searchPoint: '',
      selectedPoint: false,
      isVisible: false,
    };
  },
  computed: {
    departurePoints() {
      return this.$store.getters.getDeparturePoints;
    },
  },
  methods: {
    selectPoint() {
      this.$store.dispatch("getDeparturePoints", this.searchPoint)
    },
    hideList() {
      this.isVisible = false;
    },
    choosePoint(point) {
      this.searchPoint =`${point.name}, ${point.country_name}, ${point.code}`;
      this.selectedPoint = point.code

      this.$store.commit('setSelectedDeparture', this.selectedPoint);
      // this.$store.dispatch("getFlights")
      this.isVisible = false;
    }
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.category {
  background-color: grey;
}
</style>
