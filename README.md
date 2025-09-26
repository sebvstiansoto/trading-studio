# trading-studio
# Trading Studio — Sprint 0


## Qué incluye este scaffold
- Backend: FastAPI con endpoints `/health` y `/prices/test` (datos dummy) y WebSocket `/ws/prices` que emite ticks de ejemplo.
- Frontend: Vite + React que consulta `/health` y muestra el estado.
- Dockerfiles y docker-compose para levantar ambos servicios.


## Pasos para ejecutar localmente
1. Clona o crea la carpeta `trading-studio` y copia los archivos y carpetas desde este scaffold.
2. Opcional: copia `.env.example` a `.env` y ajusta valores.
3. En la raíz del proyecto ejecuta:


```bash
docker-compose up --build