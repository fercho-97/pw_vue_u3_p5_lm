<template>
  <h1>Página Eliminar</h1>

  <input type="text" name="" id="" v-model="id" />
  <button @click="eliminar">Eliminar</button>
</template>

<script>

import {
  consultarEstudianteFachada,
  insertarFachada,
  actualizarFachada, eliminarFachada
} from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async eliminar() {
      await eliminarFachada(this.id);
    },
  },
};
</script>

<style>
</style>