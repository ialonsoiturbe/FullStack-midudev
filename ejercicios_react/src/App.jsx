import { UseState } from "react";
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

//Definimos el componente principal de la app
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <h2>Bienvenido a DevJobs</h2>
        <p>Encuentra las mejores oportunidades de trabajo en desarrollo web y tecnología.</p>
      </main>
      <Footer />
    </div>
  )
}

//exportamos el componente para poder usarlo en otros archivos como main.jsx
export default App