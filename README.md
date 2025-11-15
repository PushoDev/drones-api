# Drones API

![NestJS Logo](https://nestjs.com/img/logo-small.svg)

## Descripción del Proyecto

Esta API de Drones es una solución backend construida con NestJS que permite la gestión de drones y la entrega de medicamentos. El sistema está diseñado para manejar el registro de drones, la carga de medicamentos, el monitoreo del estado de la batería y el registro de eventos de auditoría.

## Problema a Resolver

El objetivo principal de esta API es proporcionar una plataforma robusta para la operación de drones en tareas de entrega, asegurando que los drones estén en condiciones óptimas para sus misiones y que la carga se realice de manera eficiente y segura. Aborda la necesidad de:

- **Registro y Gestión de Drones:** Mantener un inventario de drones con sus especificaciones (número de serie, modelo, límite de peso, capacidad de batería y estado).
- **Gestión de Medicamentos:** Administrar los medicamentos que serán transportados, incluyendo su nombre, peso, código y una imagen.
- **Carga de Drones:** Permitir la asignación de medicamentos a drones, validando el límite de peso y el estado de la batería del dron.
- **Monitoreo de Batería:** Realizar un seguimiento periódico del nivel de batería de los drones y registrar esta información para auditoría.
- **Auditoría de Eventos:** Mantener un registro de los eventos importantes relacionados con los drones, como los cambios en el nivel de batería.

## Características Principales

- **Gestión de Drones:**
  - Registro de nuevos drones.
  - Consulta de todos los drones registrados.
  - Consulta de un dron específico por ID.
  - Consulta de drones disponibles para carga (estado `IDLE` y batería > 25%).
  - Verificación del nivel de batería de un dron específico.
  - Carga de medicamentos en un dron, con validaciones de peso y batería.
- **Gestión de Medicamentos:**
  - Registro de nuevos medicamentos.
  - Consulta de todos los medicamentos registrados.
  - Consulta de un medicamento específico por ID.
- **Sistema de Auditoría:**
  - Registro automático del nivel de batería de los drones cada minuto.
- **Validaciones de Negocio:**
  - Un dron no puede ser cargado si su batería es inferior al 25%.
  - El peso total de los medicamentos no puede exceder el límite de peso del dron.
  - Un dron solo puede ser cargado si está en estado `IDLE`.

## Tecnologías Utilizadas

- **Backend:** [NestJS](https://nestjs.com/) (Framework de Node.js)
- **Base de Datos:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [TypeORM](https://typeorm.io/)
- **Contenedores:** [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/)
- **Validación:** `class-validator` y `class-transformer`
- **Tareas Programadas:** `@nestjs/schedule`
- **Variables de Entorno:** `@nestjs/config`
- **Herramientas de Desarrollo:** `ESLint`, `Prettier`, `Jest`

## Configuración del Proyecto

### Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Instalación

1.  Clona el repositorio:

    ```bash
    git clone 'https://github.com/PushoDev/drones-api.git'
    cd drones-api
    ```

2.  Instala las dependencias de Node.js:

    ```bash
    npm install
    ```

3.  Configura las variables de entorno. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido (puedes ajustar los valores):

    ```env
    DB_HOST=localhost
    DB_PORT=5433
    DB_USER=admin
    DB_PASSWORD=admin
    DB_NAME=drones
    ```

4.  Inicia los contenedores de Docker para la base de datos PostgreSQL y Adminer:

    ```bash
    docker-compose up -d
    ```

    - PostgreSQL estará disponible en `localhost:5433`.
    - Adminer (interfaz de gestión de base de datos) estará disponible en `localhost:8080`.

### Ejecución de la Aplicación

- **Modo Desarrollo (con `watch`):**

  ```bash
  npm run start:dev
  ```

- **Modo Producción:**

  ```bash
  npm run start:prod
  ```

La aplicación se ejecutará en `http://localhost:3000` (o el puerto configurado en `main.ts`).

## Endpoints de la API

### Drones

- `POST /drones`
  - **Descripción:** Registra un nuevo dron.
  - **Body:** `CreateDroneDto`
- `GET /drones`
  - **Descripción:** Obtiene todos los drones registrados.
- `GET /drones/available`
  - **Descripción:** Obtiene los drones disponibles para carga (estado IDLE y batería > 25%).
- `GET /drones/:id`
  - **Descripción:** Obtiene un dron específico por su ID.
- `GET /drones/:id/battery`
  - **Descripción:** Obtiene el nivel de batería de un dron específico.
- `POST /drones/:id/load`
  - **Descripción:** Carga un dron con medicamentos.
  - **Body:** `LoadDroneDto`

### Medicamentos

- `POST /medications`
  - **Descripción:** Registra un nuevo medicamento.
  - **Body:** `CreateMedicationDto`
- `GET /medications`
  - **Descripción:** Obtiene todos los medicamentos registrados.
- `GET /medications/:id`
  - **Descripción:** Obtiene un medicamento específico por su ID.

## Pruebas

- **Ejecutar pruebas unitarias:**

  ```bash
  npm run test
  ```

- **Ejecutar pruebas e2e:**

  ```bash
  npm run test:e2e
  ```

- **Generar reporte de cobertura:**

  ```bash
  npm run test:cov
  ```

## Licencia

Este proyecto está bajo la licencia MIT.
