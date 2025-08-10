<template>
  <MainLayout>
    <div class="p-4 animate__animated animate__fadeIn">
      <h2 class="text-xl font-bold mb-4">Buscar pagos por propiedad</h2>

      <!-- Campo de búsqueda -->
      <div class="flex items-center gap-2 flex-wrap">
        <input
          v-model="id_propiedad"
          placeholder="Id de la propiedad"
          class="custom text-black"
        />
        <button @click="buscar" class="custom-button">
          <i class="bi bi-search mr-1"></i> Buscar
        </button>
      </div>

      <!-- Mostrar pagos -->
      <div v-if="pagos.length > 0" class="mt-6 grid gap-4">
        <div
          v-for="pago in pagos"
          :key="pago.id_pago"
          class="resultado-box"
        >
          <h3 class="resultado-title">Pago registrado</h3>
          <ul class="resultado-list">
            <li><strong>Servicio:</strong> {{ pago.servicio }}</li>
            <li><strong>Concepto:</strong> {{ pago.concepto }}</li>
            <li><strong>Monto:</strong> ${{ pago.monto }}</li>
            <li><strong>Fecha de pago:</strong> {{ new Date(pago.fecha_pago).toLocaleDateString() }}</li>
          </ul>

          <button
            v-if="pago.archivo_url"
            @click="descargarArchivo(pago.id_pago, pago.nombre_archivo)"
            class="mt-2 custom-button"
          >
            <i class="bi bi-download mr-1"></i> Descargar soporte
          </button>

          <p v-else class="text-sm italic text-red-400 mt-2">Sin archivo adjunto</p>
        </div>
      </div>

      <!-- Sin resultados -->
      <div v-else-if="buscado" class="mt-4 text-red-500">
        No se encontraron pagos para esta propiedad.
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import MainLayout from '@/layouts/MainLayout.vue'

const id_propiedad = ref('')
const pagos = ref([])
const buscado = ref(false)

const buscar = async () => {
  try {
    const res = await axios.get(`http://144.126.216.130:5173/api/pagos/${id_propiedad.value}`)
    pagos.value = res.data.data
    buscado.value = true
  } catch (error) {
    console.error('Error al buscar pagos:', error)
    pagos.value = []
    buscado.value = true
  }
}
const descargarArchivo = async (id_pago, nombre_archivo) => {
  try {
    const response = await axios.get(`http://144.126.216.130:5173/api/pagos/descargar/${id_pago}`, {
      responseType: 'blob',
    })

    const blob = new Blob([response.data], { type: 'application/pdf' })
    const downloadUrl = window.URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = downloadUrl
    a.download = nombre_archivo || 'archivo.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(downloadUrl)
  } catch (error) {
    console.error('Error al descargar el archivo:', error)
    alert('No se pudo descargar el archivo.')
  }
}
/*const descargarArchivo = (url, nombre) => {
  const a = document.createElement('a')
  a.href = url
  a.setAttribute('download', nombre || 'archivo.pdf')
  a.setAttribute('target', '_blank')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}*/
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
