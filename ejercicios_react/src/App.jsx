import { UseState } from "react";
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import JobList from './components/JobList'

//Definimos el componente principal de la app
function App() {
  return (
    <div className="app">
      <Header />
      <JobList />
      <Footer />
    </div>
  )
}

//exportamos el componente para poder usarlo en otros archivos como main.jsx
export default App