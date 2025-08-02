// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import Register from '../views/registrar.vue'
import Index from '../views/Index.vue'
import Menu from '../views/Menu.vue'
import propiedades from '../views/propiedades.vue'
import agregarpropiedades from '../views/aggpropiedades.vue'
import inquilinos from '../views/inquilinos.vue'
import registrarinquilinos from '../views/registrarinquilinos.vue'
import registrarcontrato from '../views/registrarcontrato.vue'
import contratos from '../views/contratos.vue'
import reportes from '../views/reportes.vue'
import recordatorios from '../views/recordatorios.vue'
import control_pagos from '../views/control_pagos.vue'
//distintivo inquilinos numero 2
import registrar_pagos from '../views/registrar_pagos.vue'
import contratos2 from '../views/contratos2.vue'
import recordatorios2 from '../views/recordatorios2.vue'
import Menu2 from '../views/menu2.vue'

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/registrar', name: 'Register', component: Register },
  { path: '/inicio', name: 'Login', component: Login },
  { path: '/Menu', name: 'Menu', component: Menu },
  { path: '/propiedades', name: 'Propiedades', component: propiedades },
  { path: '/aggpropiedades', name: 'Agregar_propiedades', component: agregarpropiedades },
  { path: '/inquilinos', name: 'Inquilinos', component: inquilinos },
  { path: '/contratos', name: 'Contratos', component: contratos },
  { path: '/reportes', name: 'Reportes', component: reportes },
  { path: '/recordatorios', name: 'Recordatorios', component: recordatorios },
  { path: '/control_pagos', name: 'Control_pagos', component: control_pagos },
  { path: '/registrarinquilinos', name: 'Registrar_inquilinos', component: registrarinquilinos},
  { path: '/registrarcontrato', name: 'Registrar_contrato', component: registrarcontrato},
  //distintivo inquilinos numero 2
  { path: '/contratos2', name: 'Contratos2', component: contratos2 },
  { path: '/recordatorios2', name: 'Recordatorios2', component: recordatorios2 },
  { path: '/registrar_pagos', name: 'Registrar_pagos', component: registrar_pagos },
  { path: '/menu2', name: 'Menu2', component: Menu2 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
