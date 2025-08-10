<template>
  <MainLayout>
    <div class="animate__animated animate__fadeIn">
      <div class="container mt-5 py-5 pt-5" style="height: 140vh; display: flex; flex-direction: column;">
        <h2 class="titulo-principal text-center">Agregar Propiedad</h2>

        <div class="form-scroll">
          <form class="row g-4" @submit.prevent="registrarPropiedad">
            <!-- Información del Inmueble -->
            <div class="col-12">
              <h5>Información del inmueble</h5>
            </div>

            <div class="col-md-6">
              <label class="form-label">Número de Matrícula</label>
              <input v-model="form.numero_matricula" type="text" class="form-input-local" required />
            </div>

            <div class="col-md-6">
              <label class="form-label">ID Catastral</label>
              <input v-model="form.id_catastral" type="text" class="form-input-local" required />
            </div>

            <div class="col-md-12">
              <label class="form-label">Dirección del Inmueble</label>
              <input v-model="form.direccion_inmueble" type="text" class="form-input-local" required />
            </div>

            <div class="col-md-6">
              <label class="form-label">Área del Terreno</label>
              <input v-model="form.area_terreno" type="text" class="form-input-local" required />
            </div>

            <div class="col-md-3">
              <label class="form-label">Uso</label>
              <input v-model="form.uso" type="text" class="form-input-local" required />
            </div>

            <div class="col-md-3">
              <label class="form-label">Estrato</label>
              <input v-model="form.estrato" type="text" class="form-input-local" required />
            </div>

            <div class="col-md-12">
              <button type="button" class="btn custom-btn" @click="mostrarModal = true">Agregar Documento</button>
            </div>

            <!-- Datos del Propietario -->
            <div class="col-12 mt-4">
              <h5>Datos del propietario</h5>
            </div>

            <div class="col-md-6">
              <label class="form-label">Nombre del Propietario</label>
              <input v-model="form.nombre_propietario" type="text" class="form-input-local" required />
            </div>

            <div class="col-md-3">
              <label class="form-label">Tipo de Identificación</label>
              <select v-model="form.tipo_id" class="form-input-local" required>
                <option disabled value="">Seleccione</option>
                <option>Cédula</option>
                <option>Pasaporte</option>
                <option>NIT</option>
              </select>
            </div>

            <div class="col-md-3">
              <label class="form-label">Número de ID</label>
              <input v-model="form.numero_id" type="text" class="form-input-local" required />
            </div>

            <div class="col-md-4">
              <label class="form-label">Estado Civil</label>
              <select v-model="form.estado_civil" class="form-input-local" required>
                <option disabled value="">Seleccione</option>
                <option>Soltero(a)</option>
                <option>Casado(a)</option>
                <option>Divorciado(a)</option>
                <option>Viudo(a)</option>
              </select>
            </div>

            <div class="col-md-8">
              <label class="form-label">Dirección del Propietario</label>
              <input v-model="form.direccion_propietario" type="text" class="form-input-local" required />
            </div>

            <div class="col-md-6">
              <label class="form-label">Teléfono</label>
              <input v-model="form.telefono" type="text" class="form-input-local" required />
            </div>

            <div class="col-md-6">
              <label class="form-label">Correo</label>
              <input v-model="form.correo" type="email" class="form-input-local" required />
            </div>

            <div class="text-center mt-4">
              <button class="btn custom-btn px-5 text-black" type="submit">Registrarse</button>
            </div>
          </form>
        </div>

        <!-- MODAL -->
        <div v-if="mostrarModal" class="modal-overlay">
          <div class="modal-content">
            <h5 class="mb-3">Subir Documento(s)</h5>

            <div class="archivos-grid mb-3">
              <div
                v-for="(item, index) in archivos"
                :key="index"
                class="archivo-card"
              >
                <label class="form-label">Archivo {{ index + 1 }}</label>
                <input type="text" class="form-control" v-model="item.id_propiedad" placeholder="ID de la propiedad" required />

                <input type="file" class="form-control mb-2 mt-3" accept=".jpg,.jpeg,.png,.pdf,.docx,.zip" required @change="e => item.archivo = e.target.files[0]"/>

                <label class="form-label">Descripción</label>
                <input type="text" class="form-control" v-model="item.descripcion" placeholder="Descripción del archivo"/>

                <div class="text-end mt-2" v-if="archivos.length > 1">
                  <button class="btn btn-sm btn-danger" @click="eliminarArchivo(index)">
                    Eliminar
                  </button>
                </div>
              </div>
            </div>

            <div class="text-end">
              <button class="btn btn-warning me-2" @click="agregarArchivo">
                + Agregar otro archivo
              </button>
              <button class="btn btn-secondary me-2" @click="mostrarModal = false">
                Cancelar
              </button>
              <button class="btn btn-success" @click="guardarDocumentos">Guardar</button>
            </div>
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

// Formulario principal
const form = ref({
  numero_matricula: '',
  id_catastral: '',
  direccion_inmueble: '',
  area_terreno: '',
  uso: '',
  estrato: '',
  nombre_propietario: '',
  tipo_id: '',
  numero_id: '',
  estado_civil: '',
  direccion_propietario: '',
  telefono: '',
  correo: ''
})

// Documentos
const mostrarModal = ref(false)
const archivos = ref([{ archivo: null, descripcion: '', id_propiedad: '' }])

const agregarArchivo = () => {
  archivos.value.push({ archivo: null, descripcion: '', id_propiedad: '' })
}
const eliminarArchivo = (index) => {
  archivos.value.splice(index, 1)
}

// Envío de propiedad
const registrarPropiedad = async () => {
  try {
    const response = await axios.post('http://144.126.216.130:8000/api/propiedades', form.value)
    alert('Propiedad registrada con éxito')
  } catch (error) {
    console.error(error)
    alert('Error al registrar la propiedad')
  }
}

// Envío de documentos (modal)
const guardarDocumentos = async () => {
  try {
    for (const item of archivos.value) {
      const formData = new FormData()
      formData.append('id_propiedad', item.id_propiedad)
      formData.append('archivo', item.archivo)
      formData.append('descripcion', item.descripcion)

      await axios.post('http://144.126.216.130:8000/api/documentos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }

    alert('Documentos guardados correctamente')
    mostrarModal.value = false
    archivos.value = [{ archivo: null, descripcion: '', id_propiedad: '' }]
  } catch (error) {
    console.error(error)
    alert('Error al guardar los documentos')
  }
}
</script>
.form-scroll {
 max-height: 90vh; /* área de scroll visible (ajustable) */
  overflow-y: auto;
  padding-right: 1rem;
  margin-top: 1rem;
}

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

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
  color: #f5d100; /* dorado */
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

.menu-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 2rem;
}

.container {
  padding-top: 5rem;
}


.logo {
    width: 80px;
    margin-bottom: 1rem;
}

.title {
    font-size: 2rem;
    font-weight: bold;
        margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #ccc;
}

.menu-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
}

.menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.77);
    border: 2px solid #eee200;
    color: #eee200;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: bold;
    transition: transform 0.2s ease, background-color 0.3s ease;
    width: 140px;
}

.menu-item i {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    transition: transform 0.3s;
}

.menu-item:hover {
    background-color: #eee200;
    color: #000;
    transform: translateY(-5px);
}

.menu-item:hover i {
    transform: scale(1.2);
    color: #000;
}

.navbar-inmo {
    background-color: #ffffff89;
    color: #000;
    padding: 1rem 2rem;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-content {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.navbar-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0;
}

.navbar-links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.nav-link {
    text-decoration: none;
    color: #000;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: transform 0.2s ease, color 0.3s ease;
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


.nav-link:hover {
    color: #333;
    transform: translateY(-2px);
}

.logout {
    color: red;
}

.logout:hover {
    color: darkred;
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
  max-width: 900px;
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

.archivos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); /* más pequeño el mínimo */
  gap: 1rem;
}


.archivo-card {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  min-width: 0; /* evita que se salga del grid */
}


</style>
