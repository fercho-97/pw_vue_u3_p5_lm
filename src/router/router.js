import { createRouter, createWebHashHistory } from 'vue-router'

import EstudianteActualizar from '../page/EstudianteActualizar.vue'

import EstudianteConsultar from '../page/EstudianteConsultar.vue'

import EstudianteEliminar from '../page/EstudianteEliminar.vue'

import EstudianteGuardar from '../page/EstudianteGuardar.vue'

const routes = [

    {
        path: '/actualizar',
        component: EstudianteActualizar

    },
    {
        path: '/consultar',
        component: EstudianteConsultar

    },
    {
        path: '/eliminar',
        component: EstudianteEliminar

    },
    {
        path: '/guardar',
        component: EstudianteGuardar

    },


]

const router =  createRouter({history: createWebHashHistory(), routes});


export default router