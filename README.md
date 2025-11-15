<div align="right">
  <kbd><a href="README.md"><img title="Español" alt="Español" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/es.svg" width="22"></a></kbd>
  <kbd><a href="README.en.md"><img title="English" alt="English" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/us.svg" width="22"></a></kbd>
</div>

# Drones API

[![Stars](https://img.shields.io/github/stars/PushoDev/drones-api?style=social)](https://github.com/PushoDev/drones-api)

API REST para la gestión de drones de entrega de medicamentos. Este proyecto permite gestionar drones, medicamentos y sus relaciones, incluyendo funcionalidades para cargar medicamentos en drones, verificar estado de batería, y más.

## 🚀 Características

- **Gestión completa de drones**: CRUD para drones con diferentes modelos y estados
- **Gestión de medicamentos**: CRUD para medicamentos con códigos únicos
- **Asignación de medicamentos**: Sistema para asignar medicamentos a drones
- **Verificación de estado**: Seguimiento del estado de los drones (IDLE, LOADING, LOADED, DELIVERING, DELIVERED, RETURNING)
- **Validación de batería**: Control de nivel de batería (0-100%)

## 🛠️ Tecnologías utilizadas

- **NestJS** - Framework de Node.js
- **TypeScript** - Lenguaje de programación
- **PostgreSQL** - Base de datos relacional
- **TypeORM** - ORM para manejo de base de datos
- **Docker** - Contenerización
- **Adminer** - Interfaz de administración de base de datos

## 📋 Requisitos previos

- Node.js 16+
- Docker y Docker Compose
- PostgreSQL (proporcionado via Docker)

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/PushoDev/drones-api.git
```

2. Instala las dependencias:
```bash
cd drones-api
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

4. Inicia los servicios con Docker:
```bash
docker-compose up -d
```

5. Inicia la aplicación:
```bash
npm run start:dev
```

## 📡 Endpoints disponibles

### Drones
- `GET /drones` - Listar todos los drones
- `POST /drones` - Crear un nuevo drone
- `GET /drones/:id` - Obtener un drone específico
- `PATCH /drones/:id` - Actualizar un drone
- `DELETE /drones/:id` - Eliminar un drone

### Medicamentos
- `GET /medications` - Listar todos los medicamentos
- `POST /medications` - Crear un nuevo medicamento
- `GET /medications/:id` - Obtener un medicamento específico
- `PATCH /medications/:id` - Actualizar un medicamento
- `DELETE /medications/:id` - Eliminar un medicamento

### Asignación de medicamentos a drones
- `POST /drone-medications/:droneId/medications/:medicationId` - Asignar un medicamento a un drone
- `GET /drone-medications/:droneId/medications` - Obtener los medicamentos de un drone
- `DELETE /drone-medications/:droneId/medications/:medicationId` - Remover un medicamento de un drone

## 📊 Diagrama de base de datos

```text
Drones (drones) --< Drone_Medications >-- Medications (medications)
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para proponer cambios.

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.