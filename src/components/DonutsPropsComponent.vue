<template>
  <div>
    <h1>The Donuts props component!</h1>
    <div id="total">Number of Donuts: {{ donutsTotal }}</div>
    <ul id="people">
      <li v-for="(person, index) in people" :key="index">{{ person.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DonutsProps",
  props: {
    donutsTotal: {
      type: Number,
      required: true,
      default: 1
    },
    people: {
      type: Array,
      required: false
    }
  }
};
</script>