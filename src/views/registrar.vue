<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import AuthLayout from '../layouts/AuthLayout.vue'

const router = useRouter()
const mensaje = ref('')
const error = ref('')

const formulario = reactive({
  rol: '',
  name: '',
  tel: '',
  email: '',
  password: ''
})

const registrar = async () => {
  mensaje.value = ''
  error.value = ''

  try {
    await axios.post('http://127.0.0.1:8000/api/registro-user', {
      rol: formulario.rol,
      nombre: formulario.name,
      telefono: formulario.tel,
      correo: formulario.email,
      contrasena: formulario.password
    })

    mensaje.value = '¡Registro exitoso ✅!'
    setTimeout(() => {
      router.push('/')
    }, 1500)
  } catch (err) {
    error.value = 'Error al registrar. Verifique los datos.'
    console.error('Error en el registro:', err)
  }
}
</script>

<template>
  <AuthLayout>
    <div class="animate__animated animate__fadeIn d-flex justify-content-center">
      <div class="rounded p-4 shadow w-100" style="max-width: 500px;">
        <div class="text-center mb-4">
          <h2 style="color: #eee200">Registrarse</h2>
        </div>

        <form @submit.prevent="registrar">
          <div class="mb-3">
            <label class="form-label text-white">Rol</label>
            <select class="form-select custom-input" v-model="formulario.rol" required>
              <option disabled value="">Seleccione un tipo</option>
              <option>Propietario</option>
              <option>Inquilino</option>
            </select>
          </div>

          <div class="mb-3">
            <label class="form-label text-white">Nombre de usuario</label>
            <input v-model="formulario.name" type="text" class="form-control custom-input" placeholder="Ej: jdoe123" required />
          </div>

          <div class="mb-3">
            <label class="form-label text-white">Número de teléfono</label>
            <input v-model="formulario.tel" type="text" class="form-control custom-input" placeholder="Ej: 123456789" required />
          </div>

          <div class="mb-3">
            <label class="form-label text-white">Correo electrónico</label>
            <input v-model="formulario.email" type="email" class="form-control custom-input" placeholder="correo@example.com" required />
          </div>

          <div class="mb-5">
            <label class="form-label text-white">Contraseña</label>
            <input v-model="formulario.password" type="password" class="form-control custom-input" placeholder="Ingrese su contraseña" required />
          </div>

          <div class="text-center mt-4">
            <button type="submit" class="btn btn-outline-warning px-5">Registrarse</button>
          </div>
        </form>

        <!-- Mensajes -->
        <div v-if="mensaje" class="alert alert-success text-center mt-3">{{ mensaje }}</div>
        <div v-if="error" class="alert alert-danger text-center mt-3">{{ error }}</div>

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

.custom-input {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 0.5rem;
}
</style>
