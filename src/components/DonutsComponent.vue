<template>
  <div>
    <h1>The Donuts component!</h1>
    <div id="total">Number of Donuts: {{ donutsTotal }}</div>
    <ul id="people">
      <li v-for="(person, index) in people" :key="index">{{ person.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Donuts",
  data: function() {
    return {
      donutsTotal: 1,
      people: [
        {
          id: 1,
          name: "Brad"
        },
        {
          id: 2,
          name: "Roger"
        }
      ]
    };
  }
};
</script>