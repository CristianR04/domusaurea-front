<template>
  <div class="auth-layout">
    <div class="background-layer"></div> <!-- solo fondo -->
    <div class="content-wrapper d-flex justify-content-center align-items-center">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.auth-layout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* evita scroll */
}

.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../src/assets/fondo1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: -1;
}

.content-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem; /* opcional para que no se pegue a los bordes en móviles */
  overflow: hidden; /* importante para evitar que nada lo desborde */
}

:global(body) {
  margin: 0;
  padding: 0;
  overflow: hidden; /* importante */
  background: none !important;
}
</style>
