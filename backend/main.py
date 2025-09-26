from fastapi import FastAPI, WebSocket
from fastapi.responses import JSONResponse
import asyncio
import random


app = FastAPI(title="Trading Studio - Backend (Sprint0)")


@app.get('/health')
async def health():
return JSONResponse({'status': 'ok', 'service': 'backend', 'message': 'Healthy'})


@app.get('/prices/test')
async def prices_test():
# Datos dummy: último precio + bid/ask
price = round(50000 + random.uniform(-100, 100), 2)
return {
'symbol': 'BTC-USD',
'price': price,
'bid': round(price - 10, 2),
'ask': round(price + 10, 2),
}


@app.websocket('/ws/prices')
async def websocket_prices(ws: WebSocket):
await ws.accept()
try:
while True:
price = round(50000 + random.uniform(-200, 200), 2)
tick = {'symbol': 'BTC-USD', 'price': price}
await ws.send_json(tick)
await asyncio.sleep(1)
except Exception:
await ws.close()