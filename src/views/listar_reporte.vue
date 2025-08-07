<template>
  <MainLayout>
    <!-- Botón flotante para redirigir a crear reporte -->
    <router-link to="/reportes" class="floating-button">
      <i class="bi bi-file-earmark-plus"></i>
      <span>Nuevo Reporte</span>
    </router-link>

    <div class="p-4 animate__animated animate__fadeIn">
      <h2 class="text-xl font-bold mb-4">Buscar reportes por propiedad</h2>

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

      <!-- Mostrar reportes -->
      <div v-if="reportes.length > 0" class="mt-6 grid gap-4">
        <div
          v-for="reporte in reportes"
          :key="reporte.id"
          class="resultado-box"
        >
          <h3 class="resultado-title">Reporte de {{ reporte.nombre_propiedad }}</h3>
          <ul class="resultado-list">
            <li><strong>Dirección:</strong> {{ reporte.direccion }}</li>
            <li><strong>Fecha:</strong> {{ new Date(reporte.created_at).toLocaleString() }}</li>
            <li><strong>Inquilino:</strong> {{ reporte.nombre_inquilino }}</li>
          </ul>
          <button
            @click="descargarPDF(reporte.id_propiedad)"
            class="mt-2 custom-button"
          >
            <i class="bi bi-download mr-1"></i> Descargar PDF
          </button>
        </div>
      </div>

      <!-- Sin resultados -->
      <div v-else-if="buscado" class="mt-4 text-red-500">
        No se encontraron reportes para esta propiedad.
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import MainLayout from '@/layouts/MainLayout.vue'

const id_propiedad = ref('')
const reportes = ref([])
const buscado = ref(false)

const buscar = async () => {
  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/reportes?id_propiedad=${id_propiedad.value}`)
    reportes.value = res.data.data
    buscado.value = true
  } catch (error) {
    console.error('Error al buscar reportes:', error)
    reportes.value = []
    buscado.value = true
  }

}

const descargarPDF = (id_propiedad) => {
  const url = `http://127.0.0.1:8000/api/reportes/descargar/${id_propiedad}`
  const a = document.createElement('a')
  a.href = url
  a.download = '' // permite descarga directa
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}



</script>

<style scoped>
.resultado-box {
  background-color: rgba(26, 26, 26, 0.9);
  border: 2px solid #d4af37;
  border-radius: 12px;
  padding: 1.5rem;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.resultado-title {
  font-size: 1.5rem;
  color: #d4af37;
  margin-bottom: 1rem;
  font-weight: bold;
}

.resultado-list {
  list-style-type: none;
  padding: 0;
}

.resultado-list li {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.resultado-list strong {
  color: #eee200;
}

.custom-button {
  background-color: #d4af37;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: 0.3s;
}

.custom-button:hover {
  background-color: #ffce3d;
}

.custom {
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 6px;
}
</style>


<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

/* Botón fijo arriba a la derecha */
.floating-button {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 2px solid #eee200;
  color: #eee200;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
  width: 120px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  z-index: 1000;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

.floating-button i {
  font-size: 1.5rem;
  margin-bottom: 0.4rem;
  transition: transform 0.3s;
}

.floating-button:hover {
  background-color: #eee200;
  color: #000;
  transform: translateY(-4px);
}

.floating-button:hover i {
  transform: scale(1.15);
  color: #000;
}

.custom {
  padding: 0.6rem 1rem;
  border: 2px solid #eee200;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  width: 220px;
  background-color: white;
}

.custom:focus {
  border-color: #c5b800;
  box-shadow: 0 0 0 2px rgba(238, 226, 0, 0.2);
}

.custom-button {
  background-color: white;
  border: 2px solid #eee200;
  color: #eee200;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  align-items: center;
  transition: all 0.3s ease;
}

.custom-button:hover {
  background-color: #eee200;
  color: #000;
  transform: translateY(-2px);
}

.resultado-box {
  background-color: rgba(26, 26, 26, 0.9);
  border: 2px solid #d4af37;
  border-radius: 12px;
  padding: 1.5rem;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.resultado-title {
  font-size: 1.5rem;
  color: #d4af37;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: center;
}

.resultado-list {
  list-style-type: none;
  padding: 0;
}

.resultado-list li {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.resultado-list strong {
  color: #eee200;
}

</style>
