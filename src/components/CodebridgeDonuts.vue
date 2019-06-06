<template>
  <div>
    <div id="total">{{ totalDonuts }}</div>
    <ul id="people">
      <li v-for="(person, index) in people" :key="index">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    total: {
      type: Number,
      required: true,
      default: 4
    }
  },
  data: function() {
    return {
      people: []
    };
  },
  computed: {
    totalDonuts() {
      return this.total >= 0 ? this.total : 0;
    }
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