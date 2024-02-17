<template>

<h2>Actualizar Estudiante</h2>

<input type="text" name="" id="" v-model="id"  placeholder="ingresar id">
  <div class="container">
    <div class="form-post">
      <p type="Nombre:">
        <input type="text" name="" id="idnombre" v-model="nombre" />
      </p>
      <p type="Apellido:">
        <input type="text" name="" id="idapellido" v-model="apellido" />
      </p>
      <p type="Genero:">
        <input type="text" name="" id="idgenero" v-model="genero" />
      </p>
      <p type="Fecha Nacimiento:">
        <input
          type="datetime-local"
          name=""
          id="idfechanacimiento"
          v-model="fechaNacimiento"
        />
      </p>
      <p type="Cédula:">
        <input type="text" name="" id="idcedula" v-model="cedula" />
      </p>
      <p type="Quintil:">
        <input type="text" name="" id="idquintil" v-model="rangoEconomico" />
      </p>
      <p type="Facultad:">
        <input type="text" name="" id="idfacultad" v-model="facultad" />
      </p>
      <p type="Carrera:">
        <input type="text" name="" id="idcarrera" v-model="carrera" />
      </p>
      <p type="Gratuidad:">
        <input type="text" name="" id="idgratuidad" v-model="gratuidad" />
      </p>
      <button @click="actualizar">Actualizar</button>
    </div>
  </div>
</template>

<script>
import { actualizarFachada } from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
      genero: null,
      fechaNacimiento: null,
      cedula: null,
      rangoEconomico: null,
      facultad: null,
      carrera: null,
      gratuidad: null,
    };
  },

  methods: {
    async actualizar() {
      const estuBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        cedula: this.cedula,
        rangoEconomico: this.rangoEconomico,
        facultad: this.facultad,
        carrera: this.carrera,
        gratuidad: this.gratuidad,
      };

     await actualizarFachada(this.id, estuBody);
     this.id= null;
      this.nombre = null;
      this.apellido = null;
      this.genero = null;
      this.fechaNacimiento = null;
      this.cedula = null;
      this.rangoEconomico = null;
      this.facultad = null;
      this.carrera = null;
      this.gratuidad = null;
    },
  },
};
</script>

<style>
</style>