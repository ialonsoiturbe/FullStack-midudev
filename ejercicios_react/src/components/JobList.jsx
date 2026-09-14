function JobList() {
    return (
        <div className="jobs-listings">
            <JobCard
                titulo="Desarrollador Frontend"
                empresa="TechCorp"
                ubicacion="Madrid"
                descripcion="Buscamos desarrollador con experiencia en React"
            />
            <JobCard
                titulo="Diseñador UX/UI"
                empresa="DesignStudio"
                ubicacion="Barcelona"
                descripcion="Se busca diseñador creativo con experiencia en diseño de interfaces"
            />
            <JobCard
                titulo="Ingeniero de Datos"
                empresa="DataSolutions"
                ubicacion="Valencia"
                descripcion="Se busca ingeniero de datos con experiencia en análisis y visualización de datos"
            />
        </div>
    )
}

export default JobList
