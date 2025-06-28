import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="main">
      <h1>Potenciador Digital</h1>
      <p className="intro">
        Esta es tu app base para construir un sistema de comunicación digital claro, simple y potente.
      </p>

      <section className="card">
        <h2>🌱 ¿Por dónde empezar?</h2>
        <ul>
          <li>Definí tus objetivos de negocio y comunicación.</li>
          <li>Identificá tu propuesta de valor y cliente ideal.</li>
          <li>Elegí los canales principales donde vas a comunicar.</li>
        </ul>
      </section>

      <section className="card">
        <h2>📦 ¿Qué contiene este espacio?</h2>
        <ul>
          <li>Checklist para tu ecosistema digital.</li>
          <li>Guía de tipos de contenido según tu objetivo.</li>
          <li>Referencias y plantillas para tu estrategia.</li>
        </ul>
      </section>

      <footer>
        <button onClick={() => setCount((count) => count + 1)}>
          Me encantó ({count})
        </button>
        <p className="footer-text">Hecho con 💜 por Dobleá</p>
      </footer>
    </main>
  )
}

export default App
