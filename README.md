# Proyecto-jugueterra-final-react

# Jugueterra 🧸🎲

Sitio web de **Jugueterra**, una plataforma de juguetería orientada a la venta y promoción de productos infantiles, actualmente **en construcción**.

El proyecto está desarrollado como una **Single Page Application (SPA)** utilizando **React**, con integración de **MockAPI** para la simulación de datos de productos y un sistema de **carrito de compras** basado en Context API.

---

## 🚧 Estado del proyecto

⚠️ **Este sitio se encuentra en desarrollo activo.**

Algunas funcionalidades pueden no estar disponibles o estar sujetas a cambios. El objetivo principal en esta etapa es:

* Construcción del catálogo de productos
* Integración de API mock para pruebas
* Desarrollo del flujo de carrito y pago
* Maquetación y experiencia de usuario

---

## 🧩 Tecnologías utilizadas

* **React** (Vite / CRA)
* **React Router DOM** – navegación por rutas
* **Context API** – manejo de autenticación y carrito
* **MockAPI** – simulación de backend (productos)
* **CSS modularizado**

---

## 📦 Funcionalidades actuales

* Página de inicio
* Navegación principal (Navbar)
* Catálogo de productos desde MockAPI (`/tienda`)
* Carrito de compras
* Gestión de cantidades y total
* Autenticación básica
* Rutas protegidas (usuario / admin)

---

## 🛒 Catálogo (MockAPI)

Los productos se consumen desde una API simulada creada en **MockAPI**, con un esquema orientado a juguetería:

* Nombre del producto
* Descripción
* Imagen
* Precio
* Categoría
* Stock

Esto permite trabajar el frontend sin depender de un backend real durante la etapa de desarrollo.

---

## 🗺️ Rutas principales

| Ruta         | Descripción                    |
| ------------ | ------------------------------ |
| `/`          | Inicio                         |
| `/productos` | Listado general                |
| `/tienda`    | Catálogo promocional (MockAPI) |
| `/alquiler`  | Alquiler de juegos             |
| `/carrito`   | Carrito de compras             |
| `/pagar`     | Proceso de pago                |
| `/dashboard` | Panel administrador            |

---

## ▶️ Instalación y ejecución local

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Instalar dependencias
npm install

# Ejecutar proyecto
npm run dev
```

El proyecto se ejecutará en:

```
http://localhost:5173
```

(o el puerto configurado)

---

## 📌 Próximos pasos

* Integración con backend real
* Sistema de pagos
* Optimización SEO
* Panel de administración avanzado
* Mejoras de performance
* Diseño responsive final

---

## 📄 Nota

Este README describe el estado actual del proyecto y puede cambiar a medida que avance el desarrollo.

---

**Jugueterra** – Construyendo una experiencia lúdica digital 🎁
