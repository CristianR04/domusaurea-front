# Domus Aurea Frontend

Este repositorio contiene el **frontend** del proyecto **Domus Aurea**, una plataforma web para la gestión inmobiliaria enfocada en propietarios, inquilinos, contratos y pagos.  
El frontend está construido con **Vue 3**, **Vite** y **TailwindCSS**, y se conecta al backend desarrollado en Laravel.

---

## 🚀 Tecnologías principales

- [Vue 3](https://vuejs.org/) con Composition API  
- [Vite](https://vitejs.dev/) como bundler  
- [TailwindCSS](https://tailwindcss.com/) para estilos  
- [Axios](https://axios-http.com/) para comunicación con el backend  
- [Vue Router](https://router.vuejs.org/) para el enrutamiento  
- [Pinia](https://pinia.vuejs.org/) como store de estado global  

---

## 📂 Estructura del proyecto

```
domusaurea-front/
├── public/             # Archivos estáticos
├── src/
│   ├── assets/         # Imágenes, íconos y recursos
│   ├── components/     # Componentes reutilizables de Vue
│   ├── layouts/        # Layouts personalizados por vista
│   ├── router/         # Definición de rutas
│   ├── services/       # Axios y comunicación con el backend
│   ├── store/          # Pinia stores
│   ├── views/          # Vistas principales (Login, Menú, Inquilinos, etc.)
│   ├── App.vue         # Componente raíz
│   └── main.js         # Punto de entrada
├── .env.example        # Variables de entorno
├── package.json        # Dependencias y scripts
├── vite.config.js      # Configuración de Vite
└── tailwind.config.js  # Configuración de TailwindCSS
```

---

## ⚙️ Requisitos previos

- Node.js >= 18  
- npm o yarn  
- Backend (Laravel) en ejecución (https://github.com/CristianR04/domusaurea.git)  

---

## 🔧 Instalación y ejecución local

```bash
# Clonar el repositorio
git clone https://github.com/CristianR04/domusaurea-front.git

# Entrar al directorio
cd domusaurea-front

# Instalar dependencias
npm install

# Copiar archivo de entorno
cp .env.example .env
```

Editar `.env` para apuntar al backend:

```bash
VITE_API_URL=http://localhost:8000/api
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

El frontend quedará disponible en:  
👉 http://localhost:5173/

---

## 📦 Compilación para producción

```bash
npm run build
npm run preview
```

El contenido optimizado se genera en la carpeta `dist/`.

---

## 🐳 Despliegue con Docker

1. Construir la imagen:

```bash
docker build -t domusaurea-frontend .
```

2. Ejecutar el contenedor:

```bash
docker run -d -p 5173:80 --name domusaurea-front domusaurea-frontend
```

---

## 🌐 Integración con el backend

Este frontend consume la API del backend Laravel (repo: [domusaurea](https://github.com/CristianR04/domusaurea.git)).  
Debes asegurarte de que el backend esté corriendo antes de iniciar el frontend.  

Ejemplo de flujo:

1. Backend en http://localhost:8000  
2. Frontend en http://localhost:5173  
3. Peticiones a `http://localhost:8000/api/...`  

---

## 🔎 Troubleshooting

- **CORS error:** Verifica que el backend tenga configurado correctamente CORS.  
- **API no encontrada (404):** Revisa que `VITE_API_URL` apunte a la ruta `/api`.  
- **Problemas en producción:** Usa un reverse proxy con Nginx para unir frontend y backend bajo un mismo dominio.

---

## 👨‍💻 Autor

Proyecto desarrollado por **Cristian Rojas**  
Repositorio frontend: [domusaurea-front](https://github.com/CristianR04/domusaurea-front)
