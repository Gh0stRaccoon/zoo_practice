# Zoo API

API REST para gestionar animales y cuidadores en un zoológico.

## Requisitos

- Node.js 16+
- PostgreSQL

## Instalación

```bash
npm install
```

## Configuración

Crea un archivo `.env` en la raíz del proyecto:

```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=zoo
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
```

## Uso

```bash
# Desarrollo (con auto-reload)
npm run dev

# Producción
node app.js
```

El servidor correrá en `http://localhost:3000`

## Endpoints

- `GET/POST /animals` - Gestionar animales
- `GET/POST /keepers` - Gestionar cuidadores

## Tecnologías

- Express.js
- Sequelize ORM
- PostgreSQL
- JWT para autenticación
- CORS
