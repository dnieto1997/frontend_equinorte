# Frontend Equinorte

Este proyecto corresponde al frontend del sistema Equinorte, desarrollado con **Angular 17**.

Se implementó una arquitectura modular basada en componentes reutilizables, integrando **Tailwind CSS**, **Bootstrap Icons** y **Angular Router** para proporcionar una interfaz moderna, escalable y fácil de mantener.

El objetivo principal es ofrecer una solución para la gestión de facturación, permitiendo la consulta de facturas, el recálculo de valores y la visualización de resultados de manera eficiente.

---

# Tecnologías Utilizadas

* Angular 17.0.9
* TypeScript
* Tailwind CSS
* Bootstrap Icons
* Angular Router

---

# Instalación del Proyecto

## Requisitos

* Node.js 18 o superior
* npm 9 o superior
* Angular CLI

## Instalar Dependencias

Antes de ejecutar el proyecto, instalar todas las dependencias definidas en el archivo `package.json`:

```bash
npm install
```

o su versión corta:

```bash
npm i
```

---

# Configuración del Backend

El frontend consume los servicios REST del backend mediante la configuración definida en:

```text
src/environments/environment.ts
```

Ejemplo:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

> **Importante:** Ajustar la URL según la configuración del backend. Si el servidor se ejecuta en un puerto diferente, únicamente debe modificarse el host y el puerto. La ruta base de la API debe mantenerse terminando en `/api`.

Ejemplos válidos:

```typescript
http://localhost:8080/api
http://localhost:9090/api
```

---

# Estructura del Proyecto

La estructura principal se encuentra dentro de:

```text
src/app
```

## Componentes Principales

* **shared/navbar**: Barra de navegación principal de la aplicación.
* **sidebar**: Menú lateral de navegación con funcionalidad colapsable.
* **factura-consulta**: Consulta y visualización de facturas registradas.
* **recalculo-factura**: Gestión y visualización del proceso de recálculo de facturas.

---

# Arquitectura del Proyecto

El sistema está desarrollado bajo una arquitectura basada en componentes, donde cada funcionalidad se encuentra desacoplada y organizada de forma independiente.

La navegación entre vistas es gestionada mediante Angular Router, proporcionando una experiencia fluida para el usuario.

---

# Funcionalidades Implementadas

* Sidebar colapsable.
* Navbar responsivo.
* Consulta de facturas.
* Recálculo de facturas.
* Visualización de resultados del recálculo.
* Consumo de servicios REST mediante HttpClient.
* Integración con backend Spring Boot.

---

# Ejecución del Proyecto

Iniciar el servidor de desarrollo:

```bash
ng serve
```

Una vez iniciado, la aplicación estará disponible en:

```text
http://localhost:4200
```

---

# Comandos Útiles

## Ejecutar proyecto

```bash
ng serve
```

## Compilar proyecto

```bash
ng build
```

## Ejecutar pruebas

```bash
ng test
```

## Generar componentes

```bash
ng generate component nombre-componente
```

---

# Autor

Dairo Nieto

Prueba Técnica Equinorte

Frontend desarrollado con Angular 17, Tailwind CSS y Bootstrap Icons.
