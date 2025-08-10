<template>
    <MainLayout>
        <div class="animate__animated animate__fadeIn container">

        <div class="p-4">
    <h2 class="text-lg font-bold mb-1 mt-5">Buscar propiedad por ID catastral</h2>
    <input
      v-model="id_catastral"
      placeholder="Ingrese el ID catastral"
      class="border px-3 py-2 mb-3 w-full form-input-local"
    />
    <button
      @click="buscar"
      class="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700 custom-btn"
    >
      Buscar
    </button>

    <div v-if="resultado" class="mt-5 resultado-box">
    <h3 class="resultado-title">Datos de la propiedad:</h3>
    <ul class="resultado-list">
      <li><strong>Número Matrícula:</strong> {{ resultado.numero_matricula }}</li>
      <li><strong>ID Catastral:</strong> {{ resultado.id_catastral }}</li>
      <li><strong>Dirección Inmueble:</strong> {{ resultado.direccion_inmueble }}</li>
      <li><strong>Área del Terreno:</strong> {{ resultado.area_terreno }}</li>
      <li><strong>Uso:</strong> {{ resultado.uso }}</li>
      <li><strong>Estrato:</strong> {{ resultado.estrato }}</li>
      <li><strong>Nombre Propietario:</strong> {{ resultado.nombre_propietario }}</li>
      <li><strong>Tipo ID:</strong> {{ resultado.tipo_id }}</li>
      <li><strong>Número ID:</strong> {{ resultado.numero_id }}</li>
      <li><strong>Estado Civil:</strong> {{ resultado.estado_civil }}</li>
      <li><strong>Dirección Propietario:</strong> {{ resultado.direccion_propietario }}</li>
      <li><strong>Teléfono:</strong> {{ resultado.telefono }}</li>
      <li><strong>Correo:</strong> {{ resultado.correo }}</li>
    </ul>
  </div>
  </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import axios from 'axios'
import { ref } from 'vue'

const id_catastral = ref('')
const resultado = ref(null)

const buscar = async () => {
  try {
    const res = await axios.get(`http://144.126.216.130:5173/api/buscar-propiedad/${id_catastral.value}`)
    resultado.value = res.data.data
  } catch (error) {
    console.error("Error al buscar propiedad:", error)
    resultado.value = null
  }
}
</script>


<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
/* Incluye aquí el mismo CSS de tu vista anterior para que coincida */

.container {
    padding-top: 5rem;
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
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.resultado-list strong {
  color: #eee200;
}
</style>
