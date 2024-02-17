import {createRouter, createWebHashHistory} from 'vue-router'
 
//import EstudianteActualizar from '../pages/EstudianteActualizar'
//import EstudianteConsultar from '../pages/EstudianteConsultar'
//import EstudianteEliminar from '../pages/EstudianteEliminar'
//import EstudianteGuardar from '../pages/EstudianteGuardar'
//import NoFoundPage from '../pages/NoFoundPage'
 
const routes = [
 
    {
        path: '/actualizar',
    
        component: ()=> import('../page/EstudianteActualizar')
    },
    {
        path: '/consultar/:id',
     
        component: ()=> import('../page/EstudianteConsultar')
    },
    {
        path: '/eliminar',
   
        component: ()=> import('../page/EstudianteEliminar')
    },
    {
        path: '/grabar',
       
        component: ()=> import('../page/EstudianteGuardar')
    },
    {
        path: '/:pathMatch(.*)*',
 
        component: ()=> import('../page/NotFoundPage')
    }
 
 
   
]
 
const router = createRouter({history: createWebHashHistory(),routes } )
 
export default router