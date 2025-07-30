<template>
  <div class="main-layout">
    <div class="background-layer"></div>
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.main-layout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/fondo.jpg'); /* ← Usa el alias @ correctamente */
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
  padding: 2rem;
  overflow: auto; /* Si necesitas scroll */
}

:global(body) {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: none !important;
}
</style>
