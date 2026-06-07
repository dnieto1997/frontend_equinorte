# Frontend Equinorte

Este proyecto corresponde al frontend del sistema Equinorte, desarrollado con Angular 17.  
Se ha implementado una arquitectura modular basada en componentes reutilizables, con integración de Tailwind CSS y Bootstrap Icons, además de un sistema de navegación mediante Angular Router.

El objetivo principal del proyecto es ofrecer una interfaz clara, escalable y mantenible para la gestión del módulo de facturación y sus procesos asociados, incluyendo consulta de facturas y recalculo de valores.

---

## Tecnologías utilizadas

- Angular 17.0.9
- TypeScript
- Tailwind CSS
- Bootstrap Icons
- Angular Router

---

## Estructura del proyecto

La estructura principal del proyecto se encuentra en:



Dentro de esta carpeta se organizan los componentes principales del sistema:

### Componentes principales

- **share/navbar**: Componente de navegación principal de la aplicación.
- **sidebar**: Menú lateral de navegación con funcionalidad colapsable.
- **factura-consulta**: Componente encargado de la consulta de facturas.
- **recalculo-factura**: Componente encargado de mostrar el resultado del recálculo de facturas.
- **factura-consulta**: Componente encargado de la consulta de facturas.

---

## Arquitectura del proyecto

El proyecto está construido bajo una arquitectura basada en componentes, donde cada funcionalidad se encuentra separada en módulos independientes.

Esto permite:

- Mayor escalabilidad del sistema
- Reutilización de componentes
- Mantenimiento más sencillo del código
- Separación clara de responsabilidades

Se utiliza Angular Router para gestionar la navegación entre vistas, garantizando una experiencia fluida dentro de la aplicación.

---

## Funcionalidades implementadas

- Sidebar colapsable con navegación lateral.
- Sistema de consulta de facturas.
- Recalculo de facturas con distribución proporcional de valores.
- Visualización de resultados del proceso de recalculo.
- Componentes reutilizables organizados por funcionalidad.
- Estructura preparada para crecimiento del sistema.

---

## Comandos del proyecto

```bash
ng serve