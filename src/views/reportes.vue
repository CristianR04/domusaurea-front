<template>
  <MainLayout>
    <div class="animate__animated animate__fadeIn">
      <div class="container mt-5 py-5 pt-5" style="height: 140vh; display: flex; flex-direction: column;">
        <h2 class="titulo-principal text-center">Registrar Reporte</h2>

        <div class="form-scroll">
          <form class="row g-4" @submit.prevent="guardarReporte">
            <!-- Información General -->
            <div class="col-12">
              <h5>Datos Generales de la Propiedad</h5>
            </div>

            <div class="col-md-6">
              <label class="form-label">Id de la Propiedad</label>
              <input type="text" class="form-input-local" v-model="formulario.id_propiedad" required />
            </div>

            <div class="col-md-6">
              <label class="form-label">Nombre de la Propiedad</label>
              <input type="text" class="form-input-local" v-model="formulario.nombre_propiedad" required />
            </div>

            <div class="col-md-6">
              <label class="form-label">Dirección</label>
              <input type="text" class="form-input-local" v-model="formulario.direccion" required />
            </div>

            <div class="col-md-6">
              <label class="form-label">Matrícula Inmobiliaria</label>
              <input type="text" class="form-input-local" v-model="formulario.matricula_inmobiliaria" required />
            </div>

            <div class="col-md-3">
              <label class="form-label">Tipo de Propiedad</label>
              <input type="text" class="form-input-local" v-model="formulario.tipo_propiedad" required />
            </div>

            <div class="col-md-3">
              <label class="form-label">Uso del Inmueble</label>
              <input type="text" class="form-input-local" v-model="formulario.uso_inmueble" required />
            </div>

            <div class="col-md-6">
              <label class="form-label">Estado</label>
              <input type="text" class="form-input-local" v-model="formulario.estado" required />
            </div>

            <div class="col-md-3">
              <label class="form-label">ID Inquilino</label>
              <input type="number" class="form-input-local" v-model="formulario.id_inquilino" required />
            </div>

            <div class="col-md-3">
              <label class="form-label">Nombre Inquilino</label>
              <input type="text" class="form-input-local" v-model="formulario.inquilino" required />
            </div>

            <!-- Ingresos -->
            <div class="col-12 mt-4">
              <h5>Ingresos</h5>
            </div>

            <div class="col-md-6">
              <label class="form-label">Arriendo Mensual</label>
              <input type="number" class="form-input-local" v-model="formulario.arriendo_mensual" required />
            </div>

            <div class="col-md-6">
              <label class="form-label">Estado de Pago</label>
              <input type="text" class="form-input-local" v-model="formulario.estado_pago" required />
            </div>

            <!-- Egresos -->
            <div class="col-12 mt-4">
              <h5>Egresos</h5>
            </div>

            <div class="col-md-3">
              <label class="form-label">Mantenimiento</label>
              <input type="number" class="form-input-local" v-model="formulario.mantenimiento" required />
            </div>

            <div class="col-md-3">
              <label class="form-label">Administración</label>
              <input type="number" class="form-input-local" v-model="formulario.administracion" required />
            </div>

            <div class="col-md-3">
              <label class="form-label">Impuestos</label>
              <input type="number" class="form-input-local" v-model="formulario.impuestos" required />
            </div>

            <div class="col-md-3">
              <label class="form-label">Servicios Públicos</label>
              <input type="number" class="form-input-local" v-model="formulario.servicios_publicos" required />
            </div>

            <!-- Saldos -->
            <div class="col-12 mt-4">
              <h5>Saldos</h5>
            </div>

            <div class="col-md-6">
              <label class="form-label">Ingreso Mensual</label>
              <input type="number" class="form-input-local" v-model="formulario.ingreso_mensual" required />
            </div>

            <div class="col-md-6">
              <label class="form-label">Egreso Mensual</label>
              <input type="number" class="form-input-local" v-model="formulario.egreso_mensual" required />
            </div>

            <!-- Seguimiento -->
            <div class="col-12 mt-4">
              <h5>Seguimiento</h5>
            </div>

            <div class="col-12">
              <label class="form-label">Contrato</label>
              <input type="text" class="form-input-local" v-model="formulario.contrato" required />
            </div>

            

            <div class="col-12">
              <label class="form-label">Observaciones</label>
              <textarea class="form-input-local" rows="4" v-model="formulario.observaciones"></textarea>
            </div>

            <!-- Botón -->
            <div class="text-center mt-4">
              <button class="btn custom-btn px-5 mb-5 text-black" type="submit">
                Guardar Reporte
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import MainLayout from '@/layouts/MainLayout.vue'

const formulario = reactive({
  id_propiedad:'',
  nombre_propiedad: '',
  direccion: '',
  matricula_inmobiliaria: '',
  tipo_propiedad: '',
  uso_inmueble: '',
  estado: '',
  id_inquilino: '',
  inquilino: '',
  arriendo_mensual: '',
  estado_pago: '',
  mantenimiento: '',
  administracion: '',
  impuestos: '',
  servicios_publicos: '',
  ingreso_mensual: '',
  egreso_mensual: '',
  contrato: '',
  observaciones: ''
})

const guardarReporte = async () => {
  try {
    const response = await axios.post('http://144.126.216.130:8000/api/reportes', formulario)
    console.log('Reporte guardado:', response.data)
    // Aquí puedes redirigir o mostrar mensaje
  } catch (error) {
    console.error('Error al guardar el reporte:', error)
  }
}
</script>


<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
/* Chrome, Safari, Edge, Opera */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.form-input-local {
  background-color: white !important;
  border: 2px solid #eee200 !important;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #000;
  width: 100%;
  outline: none;
  box-shadow: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-input-local:focus {
  border-color: #d4af37;
  box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.2);
}

.titulo-principal {
  font-size: 2.5rem;
  font-weight: bold;
  color: #f5d100; /* dorado */
  margin-top: 5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  letter-spacing: 1px;
  animation: fadeInDown 0.7s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 2rem;
}

.container {
  padding-top: 5rem;
}


.logo {
    width: 80px;
    margin-bottom: 1rem;
}

.title {
    font-size: 2rem;
    font-weight: bold;
        margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #ccc;
}

.menu-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
}

.menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.77);
    border: 2px solid #eee200;
    color: #eee200;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: bold;
    transition: transform 0.2s ease, background-color 0.3s ease;
    width: 140px;
}

.menu-item i {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    transition: transform 0.3s;
}

.menu-item:hover {
    background-color: #eee200;
    color: #000;
    transform: translateY(-5px);
}

.menu-item:hover i {
    transform: scale(1.2);
    color: #000;
}

.navbar-inmo {
    background-color: #ffffff89;
    color: #000;
    padding: 1rem 2rem;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-content {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.navbar-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0;
}

.navbar-links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.nav-link {
    text-decoration: none;
    color: #000;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: transform 0.2s ease, color 0.3s ease;
}

.custom-btn {
  background-color: white;
  color: #eee200;
  border: 2px solid #eee200;
  padding: 0.75rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 12px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.custom-btn:hover {
  background-color: #eee200;
  color: #000;
  transform: scale(1.05);
}


.nav-link:hover {
    color: #333;
    transform: translateY(-2px);
}

.logout {
    color: red;
}

.logout:hover {
    color: darkred;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* fondo oscuro transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* asegurarse de que esté encima de todo */
}

.modal-content {
  background-image: url('/src/assets/fondo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 900px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: fadeInScale 0.3s ease;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.archivos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); /* más pequeño el mínimo */
  gap: 1rem;
}


.archivo-card {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  min-width: 0; /* evita que se salga del grid */
}


</style>