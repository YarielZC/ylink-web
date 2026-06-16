# ylink — Frontend Web Application

Este repositorio contiene la interfaz de usuario de **ylink**, un acortador de URLs moderno, rápido y minimalista. La aplicación web está construida con un enfoque estricto en el rendimiento, modularización por componentes y una experiencia de usuario fluida desarrollada exclusivamente en un elegante Modo Claro de alto contraste.

---

## 👨‍💻 Desarrollador

Este proyecto ha sido diseñado y desarrollado por:

- **Yariel Zamora del Cueto** — \_Full-Stack Web Developer / Computer Engineer

---

## 🚀 Características de la Interfaz

- **Autenticación (Módulo Auth):** Vistas limpias y optimizadas para el flujo de Login y Registro (con validación de formato exclusiva para cuentas Gmail).
- **Dashboard Principal:** Panel centralizado para pegar URLs originales, configurar límites de clics (`max_touch`) y alternar entre enlaces permanentes o autodestructivos.
- **Historial de Enlaces:** Vista interactiva en formato de tarjetas/tablas que muestra el estado de uso de cada link corto (`touch_counts` vs `max_touch`), con badges de "Ilimitado" y accesos rápidos para copiar al portapapeles o eliminar.
- **Perfil de Usuario:** Sección dedicada para gestionar la cuenta, ver los límites del sistema (máximo 50 enlaces) y la opción de eliminación definitiva.
- **Diseño Consistente:** Estilos controlados de forma centralizada mediante primitivas y variantes que garantizan la uniformidad de todos los botones, inputs y contenedores.

---

## 🛠️ Stack Tecnológico

- **Framework Base:** Next.js (App Router)
- **Biblioteca UI:** [HeroUI](https://heroui.com/) (Componentes interactivos optimizados y accesibles)
- **Estilos:** Tailwind CSS
- **Gestión de Variantes:** `tailwind-variants` (para la modularización de textos y componentes en `primitives.ts`)
- **Formateo y Calidad de Código:** ESLint + Prettier (Configuración unificada para auto-fix al guardar)
- **Tipografía:** Inter (Configurada nativamente mediante `next/font/google`)

---

## 📁 Estructura del Proyecto (Puntos Clave)

```text
frontend/
├── app/                  # Rutas y páginas de Next.js (Layout, Providers, etc.)
├── components/           # Componentes reutilizables de la UI (Navbar, Cards, Inputs)
├── config/               # Archivos de configuración global (Fuentes, Metadata del sitio)
├── styles/               # Estilos globales y configuración de Tailwind
├── .vscode/              # Configuración compartida de VS Code (Format on Save)
├── eslint.config.mjs     # Configuración Flat de ESLint combinada con Prettier
└── tailwind.config.js    # Definición de la paleta de colores personalizada (Tema Claro)
```
