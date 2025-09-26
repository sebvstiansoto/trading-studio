import React, { useEffect, useState } from 'react'


export default function App() {
const [health, setHealth] = useState(null)
const [price, setPrice] = useState(null)


useEffect(() => {
fetch('/health')
.then(r => r.json())
.then(setHealth)
.catch(err => setHealth({ status: 'error', error: String(err) }))


// websocket to backend
const proto = window.location.protocol === 'https:' ? 'wss' : 'ws'
const ws = new WebSocket(`${proto}://${window.location.hostname}:8000/ws/prices`)
ws.onmessage = event => {
try {
const data = JSON.parse(event.data)
setPrice(data.price)
} catch (e) {
// ignore
}
}


return () => ws.close()
}, [])


return (
<div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 24 }}>
<h1>Trading Studio — Sprint 0</h1>
<section>
<h3>Backend health</h3>
<pre>{health ? JSON.stringify(health, null, 2) : 'Cargando...'}</pre>
</section>


<section>
<h3>Precio (tick websocket)</h3>
<div style={{ fontSize: 32, marginTop: 8 }}>{price ?? '—'}</div>
</section>


<section style={{ marginTop: 24 }}>
<h4>Notas</h4>
<ul>
<li>Este es un scaffold. En sprints siguientes añadiremos almacenamiento, autenticación y datos reales.</li>
<li>Si ejecutas en Docker y el frontend no alcanza al backend por CORS/host, prueba desde http://localhost:5173 y abre la consola para ver errores.</li>
</ul>
</section>
</div>
)
}