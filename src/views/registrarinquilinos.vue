<template>
  <MainLayout>
    <div class="form-wrapper animate__animated animate__fadeIn ">
      <h2 class="title text-center">Registrar Inquilino</h2>

      <form class="form-grid">
        <div class="form-col">
          <div class="form-group">
            <label for="id_propiedad">ID Propiedad</label>
            <input type="text" id="id_propiedad" placeholder="Ej: 101" />
          </div>

          <div class="form-group">
            <label for="numero_id">Número de Identificación</label>
            <input type="text" id="numero_id" placeholder="Ej: 1234567890" />
          </div>

          <div class="form-group">
            <label for="correo">Correo Electrónico</label>
            <input type="email" id="correo" placeholder="correo@ejemplo.com" maxlength="255" />
          </div>
        </div>

        <div class="form-col">
          <div class="form-group">
            <label for="id_inquilino">ID Inquilino</label>
            <input type="text" id="id_inquilino" placeholder="Ej: 202" />
          </div>

          <div class="form-group">
            <label for="usuario">Usuario</label>
            <input type="text" id="usuario" placeholder="Nombre completo" maxlength="255" />
          </div>

          <div class="form-group">
            <label for="telefono">Teléfono</label>
            <input type="tel" id="telefono" placeholder="Ej: 3001234567" />
          </div>
        </div>

        <div class="form-actions">
          <button type="button" class="btn-submit text-black">Guardar</button>
        </div>
      </form>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
.title {
  font-size: 2.4rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 2rem;
  position: relative;
}

.form-grid {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
}

.form-col {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  color: #111;
  margin-bottom: 0.5rem;
}

.form-group input {
  padding: 0.65rem 0.8rem;
  border: 1.8px solid #eee200;
  background-color: #fdfdfd;
  color: #000;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 5px rgba(238, 226, 0, 0.1);
}

.form-group input:focus {
  border-color: #d6cb00;
  box-shadow: 0 0 0 0.2rem rgba(212, 175, 55, 0.25);
  background-color: #fff;
  outline: none;
}

.form-actions {
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
}

.btn-submit {
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

.btn-submit:hover {
  background-color: #d6cb00;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(238, 226, 0, 0.5);
}
</style>
