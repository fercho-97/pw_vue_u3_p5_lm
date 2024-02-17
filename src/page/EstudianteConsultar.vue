<template>
  <h2>Consultar Estudiante por ID</h2>

  <input type="text" name="" id="" v-model="id" />
  <button @click="consultarPorId">Consultar Estudiante</button>

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
            <input
              type="text"
              name=""
              id="idquintil"
              v-model="rangoEconomico"
            />
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
    </div>
  </div>
</template>

<script>
import { consultarEstudianteFachada } from "../helpers/clienteEstudiante.js"

//import Estudiante from "../components/Estudiante.vue";

export default {

  created(){
    console.log(this.$route);
    console.log(this.$route.query);
    this.consulta(this.$route.params.id);
  },
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
   async consultarPorId() {
      const data = await consultarEstudianteFachada(this.id);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.genero = data.genero;
      this.cedula = data.cedula;
      this.fechaNacimiento = data.fechaNacimiento;
      this.rangoEconomico = data.rangoEconomico;
      this.facultad = data.facultad;
      this.carrera = data.carrera;
      this.gratuidad = data.gratuidad;
      console.log("desde componente:");
      console.log(data);
    },

    async consulta(id){
      const data = await consultarEstudianteFachada(id);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.genero = data.genero;
      this.cedula = data.cedula;
      this.fechaNacimiento = data.fechaNacimiento;
      this.rangoEconomico = data.rangoEconomico;
      this.facultad = data.facultad;
      this.carrera = data.carrera;
      this.gratuidad = data.gratuidad;
    },
  },
};
</script>

<style>

</style>