<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue'

const mensaje = ref('')
const router = useRouter()

const mostrarinicio = () => {
  mensaje.value = 'Inicio de sesión simulado ✅'
  setTimeout(() => {
    router.push('/Menu')
  }, 1000)
}
</script>

<template>
  <AuthLayout>
  <div class="animate__animated animate__fadeIn">
    <div class="rounded p-4 shadow" style="width: 18rem; animate__animated animate__fadeIn ">
      <div class="text-center mb-4">
        <img src="../assets/domusaurea.png" class="logo mb-3 w-100 h-50" alt="Logo" />
        <h2 style="color: #eee200">Iniciar Sesión</h2>
      </div>

      <form @submit.prevent="mostrarinicio">
        <div class="mb-3">
          <label for="email" class="form-label text-white">Correo electrónico</label>
          <input
            type="email"
            class="form-control custom-input"
            id="email"
            placeholder="Ingrese su correo"
            required
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label text-white">Contraseña</label>
          <input
            type="password"
            class="form-control custom-input"
            id="password"
            placeholder="Ingrese su contraseña"
            required
          />
        </div>

        <button type="submit" class="btn custom-button w-100 mt-5">Ingresar</button>
        <p class="mt-3 text-success fw-bold" v-if="mensaje">{{ mensaje }}</p>
      </form>

      <p class="mt-3 text-white">
        ¿No tienes cuenta?
        <router-link to="/Registrar" class="gold-link">Regístrate</router-link>
      </p>
    </div>
  </div>
    
  </AuthLayout>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
.logo {
  height: 80px;
}
</style>
