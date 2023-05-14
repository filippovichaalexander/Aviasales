<template>
  <div class="wrapper">
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBtn',
  methods: {
    search() {
      this.$store.dispatch("getFlights")
    }
  }
};
</script>

<style scoped></style>
