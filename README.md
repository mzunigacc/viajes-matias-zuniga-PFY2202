# Rutas del Mundo

Aplicación web de una agencia de viajes ficticia, desarrollada para la actividad sumativa de la Semana 5 de Desarrollo Frontend II (PFY2202).

## Descripción

La aplicación permite explorar destinos turísticos y consultar alternativas de vuelos y alojamientos para cada destino.

Se utilizan dos mecanismos de comunicación con un backend simulado:

- **REST:** catálogo de destinos, países, descripciones y actividades populares.
- **GraphQL:** consulta de vuelos y hoteles por destino, incluyendo precios, fechas y disponibilidad.

Los datos son ficticios y se utilizan exclusivamente con fines académicos.

## Tecnologías

- React y Vite
- JavaScript y Tailwind CSS
- React Router
- Mock Service Worker (MSW)
- Apollo Client y GraphQL

## Funcionalidades

- Página de inicio y catálogo de destinos.
- Navegación al detalle de cada destino.
- Consulta REST de destinos y actividades.
- Consulta GraphQL de vuelos y hoteles.
- Visualización de fechas, precios y disponibilidad.
- Estados de carga, error y ausencia de resultados.
- Reintentos y simulación de errores del servidor.
- Interfaz responsiva y página 404.

## Arquitectura

El frontend separa sus responsabilidades en:

- `src/pages/`: vistas asociadas a las rutas.
- `src/components/`: componentes reutilizables.
- `src/hooks/`: lógica compartida para peticiones REST.
- `src/services/`: comunicación con la API REST.
- `src/graphql/`: configuración de Apollo y consultas GraphQL.
- `src/mocks/`: datos y manejadores del backend simulado.
- `src/utils/`: funciones de presentación de datos.

### Flujo de funcionamiento

1. React consulta el catálogo mediante REST.
2. El usuario selecciona un destino.
3. React Router carga el detalle correspondiente.
4. Apollo consulta vuelos y hoteles mediante GraphQL.
5. MSW intercepta las solicitudes y devuelve datos simulados.

## Ejecución local

Requiere una versión de Node.js compatible con Vite 8.

Instalar dependencias:

    npm ci

Iniciar el servidor de desarrollo:

    npm run dev

## Validaciones

Compilar la aplicación:

    npm run build

Validar el código:

    npx oxlint src

Las pruebas funcionales consideran navegación, visualización de datos REST y GraphQL, errores simulados, reintentos y adaptación a distintos tamaños de pantalla.

## Endpoints simulados

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/destinations` | Catálogo de destinos |
| GET | `/api/destinations/:destinationId` | Detalle individual |
| POST | `/graphql` | Consulta `GetTravelOptions` |

El backend simulado funciona mediante MSW en desarrollo y en GitHub Pages.

## Publicación

Repositorio:

https://github.com/mzunigacc/viajes-matias-zuniga-PFY2202

Aplicación:

https://mzunigacc.github.io/viajes-matias-zuniga-PFY2202/

La publicación se realiza automáticamente mediante GitHub Actions.

## Autor

Matías Zúñiga — Desarrollo Frontend II, PFY2202.
