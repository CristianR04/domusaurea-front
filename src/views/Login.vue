<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue'
import axios from 'axios'

const mensaje = ref('')
const router = useRouter()
const form = reactive({
  email:'',
  password:''
})

const mostrarinicio = async () => {
  mensaje.value = ''
  Error.value = ''

  try {
    // 1. Hacer login
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      correo: form.email,
      contrasena: form.password
    });

    // 2. Guardar token en localStorage
    const token = response.data.token;
    localStorage.setItem('token', token);

    
    const usuario = response.data.user;
    const rol = usuario.rol;

    // 4. Mostrar mensaje
    mensaje.value = 'Inicio de sesión exitoso ✅';

    // 5. Redireccionar según el rol
    setTimeout(() => {
      if (rol === 'propietario') {
        router.push('/Menu');
      } else if (rol === 'inquilino') {
        router.push('/menu2');
      } else {
        router.push('/inicio'); // ruta genérica por defecto
      }
    }, 1000);

  } catch (err) {
    // Manejo de errores
    if (err.response && err.response.status === 409) {
      Error.value = 'Credenciales incorrectas.';
    } else {
      Error.value = 'Error al iniciar sesión.';
    }
    console.error('Error en el login:', err);
  }
};

</script>

<template>
  <AuthLayout>
  <div class="animate__animated animate__fadeIn">
    <div class="rounded p-4 shadow animate__animated animate_FadeIn" style="width: 18rem; ">
      <div class="text-center mb-4">
        <img src="../assets/domusaurea.png" class="logo mb-3 w-100 h-50" alt="Logo" />
        <h2 style="color: #eee200">Iniciar Sesión</h2>
      </div>

      <form @submit.prevent="mostrarinicio">

      
        <div class="mb-3">
          <label for="email" class="form-label text-white">Correo electrónico</label>
          <input
            type="email"
            class="form-control input-custom"
            id="email"
            placeholder="Ingrese su correo"
            v-model="form.email"
            required
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label text-white">Contraseña</label>
          <input
            type="password"
            class="form-control input-custom"
            id="password"
            placeholder="Ingrese su contraseña"
            v-model="form.password"
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
