import { useState } from 'react'
import './App.css'
import imagenes from './assets/imagenes'
import doh from './assets/img/404DOH.png'
import the_simp from './assets/img/68.webp'

function App() {
  return (
    <>
    <div className="room">
        <div className="fondo">
          <div className="frases">
            <h1>Frases de Los Simpson</h1>
          </div>
        </div>
        <div className="space">
          <h2>
            Por favor, deje que su código de enlace y sus comentarios sean cuestionados
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeaNZkq9T_xYF_3VtTsAuUttQdKbW4JgEHbM7kkj0hoK_wn6g/viewform" role='button'> <b>aqui.</b></a>
          </h2>
        </div>
        <div className="card">
          <p>
            <b>Reto :</b> Queremos que te diviertas construyendo este SPA (Aplicación de Página Única) donde podrás mostrar las citas de los personajes más famosos de esta serie de TV.
          </p>
          <p>El objetivo es construir las páginas actuales:</p>
            <li>Hogar</li>
            <li>Vista de cotizaciones</li>
            <li>Pagina de errores</li>
          <div>
            <img src={doh} />
            <img src={the_simp} />
            <img src={imagenes.img1}/>
            <img src={imagenes.img2} />
          </div>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
