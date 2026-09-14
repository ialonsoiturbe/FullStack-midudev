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
        <section className="jobs-container">
          <h2>Trabajos Disponibles (3)</h2>

          <div className="jobs-grid">
            <JobCard
            job={{
                id: 1,
                title: "Desarrollador Frontend",
                company: "TechCorp",
                location: "Madrid",
                salary: "$50,000 - $70,000",
                description: "Se busca desarrollador frontend con experiencia en React y JavaScript",
                tags: ["React", "JavaScript", "CSS"]
            }}
            isRemote={false}
            isFeatured={true}
            isNew={true}
            />
            <JobCard
                job={{
                    id: 2,
                    title: "Diseñador UX/UI",
                    company: "DesignStudio",
                    location: "Barcelona",
                    salary: "$45,000 - $65,000",
                    description: "Se busca diseñador creativo con experiencia en diseño de interfaces",
                    tags: ["Diseño", "UX", "UI"]
                }}
            isRemote={true}
            isFeatured={false}
            isNew={false}
            />
            <JobCard
                job={{
                    id: 3,
                    title: "Ingeniero de Datos",
                    company: "DataSolutions",
                    location: "Valencia",
                    salary: "$55,000 - $75,000",
                    description: "Se busca ingeniero de datos con experiencia en análisis y visualización de datos",
                    tags: ["Análisis de Datos", "Visualización", "Python"]
                }}
            isRemote={false}
            isFeatured={false}
            isNew={false}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

//exportamos el componente para poder usarlo en otros archivos como main.jsx
export default App