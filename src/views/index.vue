<!-- src/views/Index.vue -->
<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLogin = () => router.push('/login')
const goToRegister = () => router.push('/registrar')
</script>

<template>
  <MainLayout>
    <div class="glass-box text-center text-white p-4 rounded shadow-lg animate__animated animate__fadeIn ">
      <img src="/src/assets/domusaurea.png" alt="Logo" class="logo mb-3 w-50 h-50" />
      <h1 class="display-5 fw-bold mb-3">¡Bienvenido a Domus Aurea!</h1>
      <p class="mb-4 fs-5">
        Administra tus propiedades como propietario o revisa tus estado como inquilino
      </p>
      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <router-link to="/inicio" class="btn custom-button px-4 py-2">Iniciar Sesión</router-link>
        <router-link to="/registrar" class="btn custom-button-outline px-4 py-2">Registrarse</router-link>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
.glass-box {
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  max-width: 600px;
  width: 100%;
}

.logo {
  width: 100px;
  height: auto;
}

.custom-button {
  border: 2px solid #eee200;
  color: #eee200;
  background: transparent;
  font-weight: bold;
}

.custom-button:hover {
  background-color: #c6b800;
  color: #000;
}

.custom-button-outline {
  border: 2px solid #eee200;
  color: #eee200;
  background: transparent;
  font-weight: bold;
}

.custom-button-outline:hover {
  background-color: #eee200;
  color: #000;
}
</style>
