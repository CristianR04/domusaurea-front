<template>
  <MainLayout>
    <div class="container py-5 animate__animated animate__fadeIn">
      <form class="row justify-content-center" @submit.prevent="guardarRecordatorio">
        <div class="col-12 mb-4">
          <h3 class="text-center titulo-principal">Recordatorio de Pago</h3>
        </div>

        <!-- ID USER -->
        <div class="col-md-6 mb-3">
          <label class="form-label">ID Usuario</label>
          <input
            type="number"
            class="form-input-local"
            v-model="form.id_user"
            required
          />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">ID Propiedad</label>
          <input
            type="number"
            class="form-input-local"
            v-model="form.id_propiedad"
            required
          />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Concepto</label>
          <input
            type="text"
            class="form-input-local"
            v-model="form.concepto"
            placeholder="Ej: Arriendo, Servicios, etc."
            required
          />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Monto</label>
          <input
            type="number"
            step="0.01"
            class="form-input-local"
            v-model="form.monto"
            placeholder="$"
            required
          />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Fecha del Recordatorio</label>
          <input
            type="date"
            class="form-input-local"
            v-model="form.fecha_recordatorio"
            required
          />
        </div>

        <div class="col-md-6 mb-3 d-flex align-items-center">
          <input
            type="checkbox"
            id="repetirMensualmente"
            class="me-2"
            v-model="form.repetir_mensualmente"
          />
          <label for="repetirMensualmente" class="form-label mb-0">
            ¿Repetir Mensualmente?
          </label>
        </div>

        <div class="col-12 mb-3">
          <label class="form-label">Notas</label>
          <textarea
            class="form-input-local"
            rows="3"
            v-model="form.notas"
            placeholder="Opcional..."
          ></textarea>
        </div>

        <div class="text-center mt-4">
          <button class="btn custom-btn px-5 mb-5 text-black">
            Guardar Recordatorio
          </button>
        </div>
      </form>
    </div>
  </MainLayout>
</template>

<script setup>
import { reactive } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import axios from 'axios'

const hoy = new Date().toISOString().split('T')[0]

const form = reactive({
  id_user: '',
  id_propiedad: '',
  concepto: '',
  monto: '',
  fecha_recordatorio: hoy,
  repetir_mensualmente: false,
  notas: ''
})

const guardarRecordatorio = async () => {
  try {
    const response = await axios.post('http://api-domusaurea.geekcorplab.com/api/cxp/recordatorios', form)
    console.log('Recordatorio guardado:', response.data)
  } catch (error) {
    console.error('Error al guardar recordatorio:', error.response?.data || error.message)
  }
}
</script>



<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
.menu-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 2rem;
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

textarea.form-input-local {
  resize: vertical;
}

input[type='checkbox'] {
  width: 18px;
  height: 18px;
  appearance: none;
  background-color: #fff;
  border: 2px solid #eee200;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
}

/* Estilo cuando está marcado */
input[type='checkbox']:checked {
  background-color: #eee200;
}

/* Dibujar el "check" manualmente */
input[type='checkbox']:checked::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 6px;
  width: 4px;
  height: 10px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
input[type='checkbox'] {
  width: 18px;
  height: 18px;
  appearance: none;
  background-color: #fff;
  border: 2px solid #eee200;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
}

/* Estilo cuando está marcado */
input[type='checkbox']:checked {
  background-color: #eee200;
}

/* Dibujar el "check" manualmente */
input[type='checkbox']:checked::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 6px;
  width: 4px;
  height: 10px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

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

.titulo-principal {
  font-size: 2.5rem;
  font-weight: bold;
  color: #f5d100; /* dorado */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  letter-spacing: 1px;
  animation: fadeInDown 0.7s ease-out;
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
</style>
