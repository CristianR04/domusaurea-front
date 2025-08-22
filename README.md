# 🏠 Domus Aurea Frontend

Este repositorio contiene el **frontend** de la aplicación inmobiliaria **Domus Aurea**, desarrollada con **Vue 3 + Vite**.  
El sistema está orientado a la gestión de propiedades, propietarios e inquilinos, integrándose con un backend en **Laravel**.

---

## 📂 Estructura del proyecto

```bash
domusaurea-front/
│── public/             # Archivos públicos
│── src/
│   ├── assets/         # Recursos estáticos (imágenes, íconos, estilos globales)
│   ├── components/     # Componentes reutilizables
│   ├── layouts/        # Layouts personalizados (login, index, menú principal)
│   ├── router/         # Rutas de la aplicación (Vue Router)
│   ├── services/       # Lógica para consumo de API (axios)
│   ├── store/          # Manejo de estado (Pinia/Vuex)
│   └── views/          # Vistas principales (Inquilinos, Propietarios, Pagos, etc.)
│── .env.example        # Variables de entorno de ejemplo
│── vite.config.js      # Configuración de Vite
│── package.json        # Dependencias y scripts
```

---

## ⚙️ Instalación y ejecución local

1. Clonar el repositorio:

```bash
git clone https://github.com/CristianR04/domusaurea-front.git
cd domusaurea-front
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
cp .env.example .env
```

Editar `.env`:

```bash
VITE_API_URL=http://localhost:8000/api
```

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en: [http://localhost:5173](http://localhost:5173)

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

---

## 👨‍💻 Autor

Desarrollado por **Cristian Rojas**  
📧 Contacto: *[tu-correo@dominio.com]*
