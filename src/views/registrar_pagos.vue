<template>
  <MainLayout>
    <div class="animate__animated animate__fadeIn">
      <div class="container mt-5 py-5 pt-5" style="height: 130vh; display: flex; flex-direction: column;">
        <h2 class="titulo-principal text-center">Registrar Pagos</h2>

        
        <!-- FORMULARIO -->
        <div class="form-scroll">
          <form class="row g-4">
            <div class="col-12">
              <h5>Información del pago</h5>
            </div>

            <div class="col-md-6">
              <label class="form-label">Propiedad Asociada</label>
              <select class="form-input-local" required>
                <option disabled value="">Seleccione propiedad</option>
                <option>Propiedad 1</option>
                <option>Propiedad 2</option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label">Servicio</label>
              <input type="text" class="form-input-local" placeholder="Ej: Agua, Luz" required />
            </div>

            <div class="col-md-6">
              <label class="form-label">Concepto</label>
              <input type="text" class="form-input-local" placeholder="Ej: Pago de Julio" required />
            </div>

            <div class="col-md-3">
              <label class="form-label">Monto</label>
              <input type="number" step="0.01" class="form-input-local" required />
            </div>

            <div class="col-md-3">
                <label class="form-label">Fecha de Pago</label>
                <input type="date" class="form-input-local" required />
            </div>

            <div class="text-center mb-3">
                <button type="button" @click="modalAbierto = true" class="btn btn-sm custom-btn text-black">
                    Agregar soporte
                </button>
            </div>


            <div class="col-12">
              <label class="form-label">Observaciones</label>
              <textarea class="form-input-local" rows="3" placeholder="Escriba cualquier observación..."></textarea>
            </div>

            <div class="text-center mt-4">
              <button class="btn custom-btn px-5 text-black">Guardar Pago</button>
            </div>
          </form>
        </div>
      </div>

      <!-- MODAL -->
<div v-if="modalAbierto" class="modal-overlay">
  <div class="modal-content">
    <h5 class="mb-3">Subir Documento</h5>

    <div class="archivo-card">
      <label class="form-label">Archivo</label>
      <input
        type="file"
        class="form-control mb-2 mt-2"
        accept=".jpg,.jpeg,.png,.pdf,.docx,.zip"
        required
        @change="e => archivo.archivo = e.target.files[0]"
      />

      <label class="form-label">Descripción</label>
      <input
        type="text"
        class="form-control"
        v-model="archivo.descripcion"
        placeholder="Descripción del archivo"
      />
    </div>

    <div class="text-end mt-4">
      <button class="btn btn-secondary me-2" @click="modalAbierto = false">
        Cancelar
      </button>
      <button class="btn btn-success" @click="guardarArchivo">
        Guardar
      </button>
    </div>
  </div>
</div>

    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'

const modalAbierto = ref(false)

const archivo = ref({
  archivo: null,
  descripcion: ''
})

const guardarArchivo = () => {
  if (!archivo.value.archivo || !archivo.value.descripcion) {
    alert('Por favor, complete todos los campos.')
    return
  }

  console.log('Archivo guardado:', archivo.value)

  modalAbierto.value = false
}
</script>


<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

/* modal estilo */
.modal-fondo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-contenido {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  animation: fadeIn 0.3s ease-out;
}

/* número y textarea */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
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
  color: #f5d100;
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
  max-width: 500px;
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

</style>
