<template>
  <MainLayout>
    <div class="page-wrapper animate__animated animate__fadeIn ">
      <router-link to="/registrarcontrato" class="menu-item">
        <i class="bi bi-file-earmark-text"></i>
        <span>Registrar Contrato</span>
      </router-link>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
<style scoped>
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
</style>
