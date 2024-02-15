<template>
  <div>
    <h1>Componente Estudiante</h1>

    <div class="container">
      <div class="divisiones">
        <div class="form-get">
          <input type="text" name="" id="" v-model="id" />
          <button @click="consultarPorId">Consultar</button>
          <h2>Esudiante Encontrado con id {{ id }}</h2>
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
              type="text"
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

        <!-- <input type="text" name="" id="" v-model="apellido" />
        <button @click="insertar">Insertar</button>  -->
        <div class="form-post">
          <h2>Nuevo Estudiante</h2>
          <p type="Nombre:">
            <input type="text" name="" id="idnombre" v-model="nombreIng" />
          </p>
          <p type="Apellido:">
            <input type="text" name="" id="idapellido" v-model="apellidoIng" />
          </p>
          <p type="Genero:">
            <input type="text" name="" id="idgenero" v-model="generoIng" />
          </p>
          <p type="Fecha Nacimiento:">
            <input
              type="text"
              name=""
              id="idfechanacimiento"
              v-model="fechaNacimientoIng"
            />
          </p>
          <p type="Cédula:">
            <input type="text" name="" id="idcedula" v-model="cedulaIng" />
          </p>
          <p type="Quintil:">
            <input
              type="text"
              name=""
              id="idquintil"
              v-model="rangoEconomicoIng"
            />
          </p>
          <p type="Facultad:">
            <input type="text" name="" id="idfacultad" v-model="facultadIng" />
          </p>
          <p type="Carrera:">
            <input type="text" name="" id="idcarrera" v-model="carreraIng" />
          </p>
          <p type="Gratuidad:">
            <input
              type="text"
              name=""
              id="idgratuidad"
              v-model="gratuidadIng"
            />
          </p>

          <div class="btn">
            <button @click="insertar">GUARDAR</button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      genero: null,
      fechaNacimiento: null,
      cedula: null,
      rangoEconomico: null,
      facultad: null,
      carrera: null,
      gratuidad: null,

      nombreIng: null,
      apellidoIng: null,
      generoIng: null,
      fechaNacimientoIng: null,
      cedulaIng: null,
      rangoEconomicoIng: null,
      facultadIng: null,
      carreraIng: null,
      gratuidadIng: null,
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
    async insertar() {
      const estuBody = {
        nombre: this.nombreIng,
        apellido: this.apellidoIng,
        genero: this.generoIng,
        fechaNacimiento: this.fechaNacimientoIng,
        cedula: this.cedulaIng,
        rangoEconomico: this.rangoEconomicoIng,
        facultad: this.facultadIng,
        carrera: this.carreraIng,
        gratuidad: this.gratuidadIng,
      };

      await insertarFachada(estuBody);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.divisiones {
  display: grid;
  grid-template-columns: repeat(2, 500px);
}

.form-post {
  width: 340px;
  height: 700px;
  background-color: #d59393;
  border-radius: 8px;
  padding: 20px 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  box-shadow: 0 0 50px -18px #000;
}

.form-get {
  width: 340px;
  height: 700px;
  background-color: #71a9c8;
  border-radius: 8px;
  padding: 20px 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  box-shadow: 0 0 50px -18px #000;
}
p:before {
  content: attr(type);
  display: block;
  margin: 5px 2px;
  font-size: 17px;
  color: #5a5a5a;
}
</style>