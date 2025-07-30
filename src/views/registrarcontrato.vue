<template>
  <MainLayout>
    <div class="form-wrapper animate__animated animate__fadeIn ">
      <h2 class="title text-center">Registrar Contrato</h2>

      <form class="form-grid" enctype="multipart/form-data">
        <div class="form-col">
          <div class="form-group">
            <label for="propietario">Propietario</label>
            <input type="text" id="propietario" placeholder="Nombre del propietario" />
          </div>

          <div class="form-group">
            <label for="fecha">Fecha del contrato</label>
            <input type="date" id="fecha" />
          </div>

          <div class="form-group">
            <label for="archivo_pdf">Archivo PDF</label>
            <input
          type="file"
          class="form-control mb-2 mt-3"
          accept=".jpg,.jpeg,.png,.pdf,.docx,.zip"
          required
        />
          </div>
        </div>

        <div class="form-col">
          <div class="form-group">
            <label for="inquilino">Inquilino</label>
            <input type="text" id="inquilino" placeholder="Nombre del inquilino" />
          </div>

          <div class="form-group">
            <label for="detalles">Detalles del contrato</label>
            <textarea id="detalles" placeholder="Escribe los detalles del contrato..."></textarea>
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn-submit">Guardar</button>
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

/* Asegura que textarea y file input tengan fondo blanco */
textarea,
input[type="file"] {
  background-color: #fff !important;
  color: #000 !important;
}

/* Opcional: también puedes agregar un poco más de estilo para consistencia */
input[type="file"] {
  padding: 0.45rem;
  border: 1.8px solid #eee200;
  border-radius: 10px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 5px rgba(238, 226, 0, 0.1);
}
textarea {
  border: 2px solid #eee200;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  width: 100%;
  resize: vertical;
  background-color: #fff;
  color: #000;
}

textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px #eee20099;
}


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
  box-shadow: 0 0 8px rgba(238, 226, 0, 0.4);
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
