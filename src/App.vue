<template>
  <!--  <EstudiantePage/>  -->

  <h1>Universidad Central del Ecuador</h1>

  <router-view />
</template>

<script>
import EstudiantePage from "./page/EstudiantePage.vue";

export default {
  name: "App",
  components: {
    EstudiantePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
