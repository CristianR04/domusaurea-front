<template>
  <MainLayout>
  <div class="animate__animated animate__fadeIn ">
    <header class="navbar-inmo fixed-top px-4 py-4">
    <div class="container-fluid navbar-content">
      <h1 class="navbar-title">
        Panel Inmobiliario
      </h1>
      <nav class="navbar-links">
        <router-link to="/inicio" class="nav-link logout">
          <i class="bi bi-box-arrow-right"></i> Cerrar sesión
        </router-link>
      </nav>
    </div>
  </header>
    <div class="d-flex">
      <div class="menu-wrapper">
      <nav class="menu-navbar">
        <h1 class="title text-black">Panel Inmobiliario</h1>
        <p class="subtitle text-black">Administra tus propiedades y clientes fácilmente.</p>

        <div class="menu-grid">
          <router-link to="/recordatorios2" class="menu-item">
            <i class="bi bi-calendar-event"></i>
            <span>Recordatorios</span>
          </router-link>

          <router-link to="/registrar_pagos" class="menu-item">
            <i class="bi bi-cash-stack"></i>
            <span>Registrar pagos</span>
          </router-link>

          <router-link to="/contratos2" class="menu-item">
            <i class="bi bi-file-earmark-text"></i>
            <span>Contratos</span>
          </router-link>
        </div>
        
      </nav>
    </div>
    </div>
  </div>

  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
.menu-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
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
</style>
