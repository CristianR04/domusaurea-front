<template>
  <MainLayout>
    <div class="p-4 animate__animated animate__fadeIn">
      <h2 class="text-xl font-bold mb-2">Buscar contrato por propiedad</h2>
      <div class="flex items-center gap-2 mt-4 flex-wrap">
  <input
    v-model="id_propiedad"
    placeholder="ID de la propiedad"
    class="custom text-black  "
  />
  <button @click="buscar" class="custom-button">
    <i class="bi bi-search mr-1"></i> Buscar
  </button>
</div>


      <div v-if="resultado" class="mt-4 p-4 border rounded bg-gray-50">
        <h3 class="text-lg font-semibold">Contrato encontrado</h3>
        <p><strong>Inquilino:</strong> {{ resultado.inquilino }}</p>
        <p><strong>Archivo:</strong> {{ resultado.id_propiedad }}</p>

        <button @click="descargarContrato(resultado.id_contrato)" class="mt-2 bg-green-600 text-black px-3 py-1 rounded custom-button">
          Descargar contrato
        </button>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import MainLayout from '@/layouts/MainLayout.vue'

const id_propiedad = ref('')
const resultado = ref(null)

const buscar = async () => {
  try {
    const res = await axios.get(`http://144.126.216.130:8000/api/contratos/propiedad/${id_propiedad.value}`)
    resultado.value = res.data.data[0]
  } catch (error) {
    console.error('Error al buscar contrato:', error)
    resultado.value = null
  }
}

const descargarContrato = (id_contrato) => {
  const url = `http://144.126.216.130:8000/api/contratos/descargar/${id_contrato}`
  const a = document.createElement('a')
  a.href = url
  a.download = '' // permite descarga directa
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>

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
