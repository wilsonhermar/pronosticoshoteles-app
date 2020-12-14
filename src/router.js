import vueRouter from 'vue-router'

import App from './App'
import Inicio from './components/inicio'
import Verificacion from './components/verificacion'
import Buscar from './components/buscar'
import Actualizar from './components/actualizar'
import Borrar from './components/borrar'
import Crear from './components/crear'

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
      {
        path: '/test',
        name: "test",
        component: Inicio
     },
     {
      path: '/verificacion',
      name: "verificacion",
      component: Verificacion
     },
     {
      path: '/buscar',
      name: "buscar",
      component: Buscar
     },
     {
      path: '/actualizar',
      name: "actualizar",
      component: Actualizar
     },
     {
      path: '/borrar',
      name: "borrar",
      component: Borrar
     },
     {
      path: '/crear',
      name: "crear",
      component: Crear
     },
  ]
})

export default router