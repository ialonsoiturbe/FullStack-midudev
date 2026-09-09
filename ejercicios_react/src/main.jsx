import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Renderiza la aplicación en el div id = root
ReactDOM.createRoot(document.getElementById('root')).render(
    // StrictMode es un componente que nos ayuda a detectar problemas en nuestra aplicación
    //Sólo funciona en desarrollo, no en producción
    //Renderiza los componentes dos veces para detectar efectos secundarios
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)