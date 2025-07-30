<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue'

const mensaje = ref('')
const router = useRouter()

// ✅ Cálculo de fecha máxima para mayores de edad
function calcularFechaMaxima() {
  const hoy = new Date()
  hoy.setFullYear(hoy.getFullYear() - 18)
  return hoy
}

// ✅ Variables reactivas
const fechaMaximaNacimiento = ref(calcularFechaMaxima())
const fechaNacimiento = ref(fechaMaximaNacimiento.value.toISOString().split('T')[0])

// ✅ Bloquear fecha escrita inválida
watch(fechaNacimiento, (nuevaFecha) => {
  if (nuevaFecha && new Date(nuevaFecha) > fechaMaximaNacimiento.value) {
    fechaNacimiento.value = fechaMaximaNacimiento.value.toISOString().split('T')[0]
  }
})

// ✅ Simulación de registro
const registrar = () => {
  mensaje.value = '¡Registro simulado exitoso ✅!'
  setTimeout(() => {
    router.push('/')
  }, 1000)
}
</script>

<template>
  <AuthLayout>
  <div class="animate__animated animate__fadeIn">
    <div class="rounded p-4 shadow" style="width: 100%; max-width: 700px; animate__animated animate__fadeIn ">
      <div class="text-center mb-4">
        <h2 style="color: #eee200">Registrarse</h2>
      </div>

      <form class="container mt-4" @submit.prevent="registrar">
        <div class="row gx-5 gy-3 justify-content-center">
          <!-- Columna izquierda -->
          <div class="col-md-6">
            <label class="form-label text-white">Tipo de usuario</label>
            <select class="form-select custom-input" required>
              <option disabled selected>Seleccione un tipo</option>
              <option>Administrador</option>
              <option>Cliente</option>
            </select>

            <label class="form-label text-white mt-3">Nombre de usuario</label>
            <input type="text" class="form-control custom-input" placeholder="Ej: jdoe123" required />

            <label class="form-label text-white mt-3">Contraseña</label>
            <input type="password" class="form-control custom-input" placeholder="Ingrese su contraseña" required />

            <label class="form-label text-white mt-3">Correo electrónico</label>
            <input type="email" class="form-control custom-input" placeholder="correo@example.com" required />
          </div>

          <!-- Columna derecha -->
          <div class="col-md-6">
            <label class="form-label text-white">Número de teléfono</label>
            <input type="text" class="form-control custom-input" placeholder="Ej: 123456789" required />

            <label class="form-label text-white mt-3">Tipo de identificación</label>
            <select class="form-select custom-input" required>
              <option disabled selected>Seleccione tipo</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>NIT</option>
            </select>

            <label class="form-label text-white mt-3">Número de identificación</label>
            <input type="text" class="form-control custom-input" placeholder="1234567890" required />

            <label class="form-label text-white mt-3">Nombre completo</label>
            <input type="text" class="form-control custom-input" placeholder="Ingrese su nombre" required />
          </div>
        </div>

        <!-- Fecha de nacimiento -->
        <div class="d-flex flex-column align-items-center" style="max-width: 300px; margin: auto;">
          <label class="form-label text-white mt-3">Fecha de nacimiento</label>
          <input
            type="date"
            class="form-control custom-input"
            :max="fechaMaximaNacimiento.toISOString().split('T')[0]"
            v-model="fechaNacimiento"
            required
          />
        </div>

        <!-- Botón -->
        <div class="text-center mt-5">
          <button type="submit" class="btn btn-outline-warning px-5">Registrarse</button>
        </div>
      </form>

      <!-- Enlace inferior -->
      <p class="mt-4 text-white text-center">
        ¿Ya tienes cuenta?
        <router-link to="/inicio" class="gold-link">Iniciar sesión</router-link>
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
