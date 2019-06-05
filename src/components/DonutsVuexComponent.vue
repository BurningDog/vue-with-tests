<template>
  <div>
    <h1>The Donuts API component!</h1>
    <p>This loads up people from an external database and displays them</p>
    <div id="total">Number of Donuts: {{ donutsTotal }}</div>
    <ul id="people">
      <li v-for="(person, index) in people" :key="index">{{ person.name }}</li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "DonutsLoadAPI",
  computed: {
    ...mapState({
      donutsTotal: state => state.donutsTotal,
      people: state => state.people
    })
  },
  mounted() {
    this.$store.dispatch("loadPeople");
  }
};
</script>