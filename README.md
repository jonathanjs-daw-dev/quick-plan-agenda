# Proyecto Diciembre - Despliegue de Aplicaciones Web

## PROYECTO DAW QuickPlan: Agenda Web de Eventos del Centro

Crear desde cero una aplicación web en React (con Vite) para consultar y organizar eventos del centro: charlas, torneos, talleres, etc.

La app debe permitir ver eventos, buscar/filtrar, ver detalle y marcar favoritos.

## Obligatorio: React + Vite

- **React**: porque vas a construir la interfaz por componentes y gestionar estado con `useState` y `useEffect`.
- **Vite**: porque es el estándar actual para crear proyectos React rápidos, con entorno profesional (`npm run dev`) y build optimizado.

## Entregables

1. Proyecto React
2. README.md con pasos para ejecutar (`npm install`, `npm run dev`)
3. Capturas

## Requisitos

### 1. Crear el proyecto desde cero

a. Crear el proyecto con Vite (React)

b. Estructurar el código en componentes

### 2. Datos (sin backend)

Los eventos deben cargarse desde un archivo local `eventos.json` (mínimo 8 eventos).

Cada evento debe tener:
- `id`
- `titulo`
- `categoria` (Charla / Torneo / Taller / Excursión)
- `fecha` (YYYY-MM-DD)
- `lugar`
- `descripcion` (2-3 líneas)

### 3. Pantalla principal: Lista de eventos

Debe mostrar:
- Título: **Agenda de eventos**
- Lista en tarjetas o tabla con: título, categoría, fecha, lugar
- Botón "Ver detalle" por evento

Obligatorio en esta pantalla:
- **Buscador** por texto (filtra por título o lugar)
- **Filtro por categoría** (select o botones)
- **Contador**: "Mostrando X de Y eventos"

### 4. Detalle del evento

Al pulsar "Ver detalle", se debe ver otra pantalla que muestre:
- Título
- Categoría
- Fecha
- Lugar
- Descripción completa

Además:
- Botón **"Añadir a favoritos"**
- Si ya está en favoritos, mostrar **"En favoritos"** y desactivar botón

### 5. Favoritos

En la pantalla principal (o en una sección aparte) debe aparecer:
- Lista de favoritos (títulos)
- Botón **"Quitar de favoritos"**

### 6. Estados y errores

a. Mostrar **"Cargando..."** mientras se lee el JSON (simula carga con `useEffect`)

b. Si el archivo no carga o está vacío, mostrar un mensaje de error

## Ejemplo de eventos.json

```json
[
  {
    "id": 1,
    "titulo": "Taller exprés: Monta tu PC Gaming",
    "categoria": "Taller",
    "fecha": "2026-02-03",
    "lugar": "Aula Taller TIC",
    "descripcion": "Aprende a identificar componentes, montar un equipo básico y evitar errores típicos. Recomendado para principiantes."
  },
  {
    "id": 2,
    "titulo": "Charla: Ciberseguridad en redes sociales (sin drama)",
    "categoria": "Charla",
    "fecha": "2026-02-05",
    "lugar": "Salón de actos",
    "descripcion": "Privacidad, phishing, contraseñas y estafas reales. Consejos prácticos para moverte seguro por Instagram, TikTok y WhatsApp."
  },
  {
    "id": 3,
    "titulo": "Torneo rápido: Rocket League 2v2",
    "categoria": "Torneo",
    "fecha": "2026-02-10",
    "lugar": "Aula Informática 2",
    "descripcion": "Formato eliminatorio. Trae tu compañero/a y compite por premios sorpresa. Puntualidad obligatoria."
  },
  {
    "id": 4,
    "titulo": "Excursión: Visita a empresa tecnológica local",
    "categoria": "Excursión",
    "fecha": "2026-02-12",
    "lugar": "Salida desde la puerta principal",
    "descripcion": "Visita guiada por departamentos y charla con personal de desarrollo. Plazas limitadas, inscripción previa."
  },
  {
    "id": 5,
    "titulo": "Taller: Aprende Git en 45 minutos",
    "categoria": "Taller",
    "fecha": "2026-02-17",
    "lugar": "Aula Informática 1",
    "descripcion": "Comandos básicos, repositorios, ramas y cómo entregar trabajos sin líos. Trae tu portátil si puedes."
  },
  {
    "id": 6,
    "titulo": "Charla: IA para estudiar mejor (y no copiar peor)",
    "categoria": "Charla",
    "fecha": "2026-02-19",
    "lugar": "Biblioteca",
    "descripcion": "Cómo usar herramientas de IA para resumir, planificar y entender temas. Buenas prácticas y errores típicos."
  },
  {
    "id": 7,
    "titulo": "Torneo: Ajedrez rápido (10+0)",
    "categoria": "Torneo",
    "fecha": "2026-02-24",
    "lugar": "Aula de usos múltiples",
    "descripcion": "Partidas rápidas, sistema suizo. No hace falta ser pro: ven a jugar y aprender."
  },
  {
    "id": 8,
    "titulo": "Taller: Diseño de CV y LinkedIn para FP",
    "categoria": "Taller",
    "fecha": "2026-02-26",
    "lugar": "Aula 3",
    "descripcion": "Cómo presentar proyectos, prácticas y habilidades. Plantillas, ejemplos reales y revisión rápida del perfil."
  },
  {
    "id": 9,
    "titulo": "Charla: ¿Qué es DAW y qué se hace en el trabajo?",
    "categoria": "Charla",
    "fecha": "2026-03-03",
    "lugar": "Salón de actos",
    "descripcion": "Explicación clara de front, back, bases de datos, herramientas y cómo es el día a día en un equipo de desarrollo."
  },
  {
    "id": 10,
    "titulo": "Excursión: Museo interactivo de ciencia y tecnología",
    "categoria": "Excursión",
    "fecha": "2026-03-05",
    "lugar": "Salida desde la estación (08:30)",
    "descripcion": "Visita con actividades prácticas relacionadas con electrónica, programación y ciencia. Lleva autorización firmada."
  }
]
```

## Pasos para ejecutar

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```
