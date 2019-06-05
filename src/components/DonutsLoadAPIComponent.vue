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

export default {
  name: "DonutsLoadAPI",
  props: {
    donutsTotal: {
      type: Number,
      required: true,
      default: 1
    }
  },
  data: function() {
    return {
      people: []
    };
  },
  mounted() {
    this.loadPeople();
  },
  methods: {
    loadPeople() {
      axios.get("http://localhost:3000/people").then(res => {
        this.people = res.data;
      });
    }
  }
};
</script>