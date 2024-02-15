<template>
  <h1>Componente Estudiante</h1>
  <input type="text" name="" id="" v-model="id" />
  <button @click="consultarPorId">Consultar</button>

  <input type="text" name="" id="" v-model="nombre" />


  <input type="text" name="" id="" v-model="apellido">
  <button @click="insertar">Insertar</button>
</template>

<script>
import {
  consultarEstudianteFachada,
  insertarFachada,
} from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
    };
  },

  methods: {
    async consultarPorId() {
      const data = await consultarEstudianteFachada(this.id);
      this.nombre = data.nombre;

      console.log("desde componente:");
      console.log(data);
    },
    async insertar() {
      const estuBody = {
        nombre: "Vianca",
        apellido: this.apellido,
        genero: "F",
        fechaNacimiento: "1997-03-10T00:00:00",
        cedula: "1121",
        rangoEconomico: "alto",
        facultad: "Ingenieria",
        carrera: "Sistemas",
        gratuidad: "False",
      };

      await insertarFachada(estuBody);
    },
  },
};
</script>

<style>
</style>