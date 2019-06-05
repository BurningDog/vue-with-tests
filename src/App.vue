<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Donuts/>
    <DonutsProps :donuts-total="donutsTotal" :people="people"/>
    <DonutsLoadAPI :donuts-total="donutsTotal"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Donuts from "./components/DonutsComponent.vue";
import DonutsProps from "./components/DonutsPropsComponent.vue";
import DonutsLoadAPI from "./components/DonutsLoadAPIComponent.vue";
import DonutsVuex from "./components/DonutsVuexComponent.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Donuts,
    DonutsProps,
    DonutsLoadAPI
  },
  data: function() {
    return {
      donutsTotal: 3,
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
