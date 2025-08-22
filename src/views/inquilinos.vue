<template>
  <MainLayout>
    <div class="page-wrapper animate__animated animate__fadeIn">
      <router-link to="/registrarinquilinos" class="menu-item">
        <i class="bi bi-people-fill"></i>
        <span>Registrar Inquilino</span>
      </router-link>

      <div class="mt-5 p-4 max-w-2xl mx-auto bg-[#1a1a1a] border border-yellow-500 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-yellow-400 mb-4 text-center">Buscar Inquilino por ID de Usuario</h2>

        <div class="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            v-model="filtroIdUser"
            type="text"
            placeholder="Ingrese ID de usuario"
            class="form-input-local"
          />
          <button @click="buscar" class="custom-button">
            Buscar
          </button>
        </div>

        <div v-if="busquedaRealizada && resultados.length === 0" class="text-center text-gray-400 italic">
          No se encontraron inquilinos con ese ID.
        </div>

        <div v-else class="grid gap-4 mt-5">
          <div
            v-for="(inquilino, index) in resultados"
            :key="index"
            class="resultado-box"
          >
            <h3 class="resultado-title">Inquilino Encontrado</h3>
            <ul class="resultado-list">
              <li><strong>ID Propiedad:</strong> {{ inquilino.id_propiedad }}</li>
              <li><strong>ID Usuario:</strong> {{ inquilino.id_user }}</li>
              <li><strong>Nombre:</strong> {{ inquilino.usuario }}</li>
              <li><strong>Email:</strong> {{ inquilino.correo }}</li>
              <li><strong>Teléfono:</strong> {{ inquilino.telefono }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import MainLayout from '@/layouts/MainLayout.vue'

const filtroIdUser = ref('')
const resultados = ref([])
const busquedaRealizada = ref(false)

async function buscar() {
  busquedaRealizada.value = true
  resultados.value = []

  const id = filtroIdUser.value.trim()

  if (!id) return

  try {
    const response = await axios.get(`http://api-domusaurea.geekcorplab.com/api/inquilino/buscar/${id}`)
    resultados.value = [response.data.data]
  } catch (error) {
    resultados.value = []
    console.error('Error en la búsqueda:', error)
  }
}
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

.page-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.menu-item {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
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
  transition: transform 0.2s ease, background-color 0.3s ease;
}

.menu-item i {
  font-size: 1.5rem;
  margin-bottom: 0.4rem;
  transition: transform 0.3s;
}

.menu-item:hover {
  background-color: #eee200;
  color: #000;
  transform: translateY(-4px);
}

.menu-item:hover i {
  transform: scale(1.15);
  color: #000;
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
