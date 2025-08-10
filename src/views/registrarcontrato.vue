<template>
  <MainLayout>
    <div class="container-fluid py-4 px-5">
      <h2 class="text-center mb-4 title">Registrar Contrato</h2>

      <form @submit.prevent="registrarContrato">
        <div class="row">
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
            <label class="form-label">Propietario</label>
            <input
              type="text"
              class="form-input-local"
              v-model="form.propietario"
              required
            />
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label">Inquilino</label>
            <input
              type="text"
              class="form-input-local"
              v-model="form.inquilino"
              required
            />
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label">Fecha del contrato</label>
            <input
              type="date"
              class="form-input-local"
              v-model="form.fecha"
              required
            />
          </div>
        </div>

        <!-- Campo de detalles amplio al final -->
        <div class="mb-4">
          <label class="form-label">Detalles del contrato</label>
          <textarea
            class="form-input-local"
            v-model="form.detalles"
            rows="8"
            placeholder="Escribe aquí los detalles del contrato..."
            required
          ></textarea>
        </div>

        <div class="text-center">
          <button type="submit" class="btn-submit">Guardar</button>
        </div>
      </form>
    </div>
  </MainLayout>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import MainLayout from '@/layouts/MainLayout.vue'

const form = reactive({
  id_propiedad: '',
  propietario: '',
  inquilino: '',
  fecha: '',
  detalles: ''
})

const registrarContrato = async () => {
  try {
    await axios.post('http://144.126.216.130:8000/api/contratos/generar', form)
    alert('Contrato registrado correctamente')
  } catch (error) {
    console.error('Error al registrar contrato:', error)
    alert('Hubo un error al registrar el contrato')
  }
}
</script>

<style scoped>
.form-input-local {
  width: 100%;
  padding: 0.65rem 0.8rem;
  border: 2px solid #eee200;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  font-size: 1rem;
  box-shadow: inset 0 0 5px rgba(238, 226, 0, 0.1);
  transition: all 0.3s ease;
}

.form-input-local:focus {
  outline: none;
  border-color: #d6cb00;
  box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.25);
  background-color: #fff;
}

.title {
  font-size: 2.4rem;
  font-weight: 700;
  color: #222;
  position: relative;
}

.btn-submit {
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

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.btn-submit:hover {
  background-color: #d6cb00;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(238, 226, 0, 0.5);
}


</style>
