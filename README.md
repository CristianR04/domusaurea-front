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

## 🌐 Despliegue con Nginx en Ubuntu

### 1️⃣ Requisitos previos
- Servidor con **Ubuntu 22.04 LTS** o superior.  
- Acceso SSH con usuario con permisos de administrador.  
- Backend Laravel desplegado y funcionando (ej: en `/var/www/domusaurea-backend`).  
- Nginx y Node.js instalados.

Instalar dependencias necesarias:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install nginx curl git -y
```

Instalar Node.js (última versión LTS):

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

---

### 2️⃣ Clonar y compilar el proyecto
```bash
cd /var/www
sudo git clone https://github.com/CristianR04/domusaurea-front.git
cd domusaurea-front

# Instalar dependencias
npm install

# Compilar para producción
npm run build
```

El contenido final estará en la carpeta `dist/`.

---

### 3️⃣ Configurar Nginx
Crear un archivo de configuración para el frontend:

```bash
sudo nano /etc/nginx/sites-available/domusaurea-front
```

Añadir el siguiente contenido (ajusta el dominio si tienes uno):

```nginx
server {
    listen 80;
    server_name tu-dominio.com;

    root /var/www/domusaurea-front/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    # Proxy hacia el backend Laravel
    location /api {
        proxy_pass http://127.0.0.1:8000/api;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Guardar y cerrar.  

Activar el sitio:

```bash
sudo ln -s /etc/nginx/sites-available/domusaurea-front /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

### 4️⃣ Ajustar variables de entorno
En tu `.env` del frontend pon:

```bash
VITE_API_URL=/api
```

De esta forma, todas las peticiones se dirigirán al backend a través de Nginx.

---

### 5️⃣ Seguridad y HTTPS
Instalar **Certbot** para certificados SSL gratuitos:

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d tu-dominio.com
```

---

✅ Con esto tendrás el **frontend en Vue desplegado en Nginx**, sirviendo contenido estático desde `dist/` y conectándose al backend de Laravel a través del mismo dominio.

---

## 🛠 Troubleshooting

- Si los cambios en `.env` no se reflejan, recuerda volver a ejecutar `npm run build`.  
- Revisa los logs de Nginx en `/var/log/nginx/error.log` si ocurre algún error.  
- Verifica que el backend de Laravel esté corriendo en `127.0.0.1:8000`.

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
