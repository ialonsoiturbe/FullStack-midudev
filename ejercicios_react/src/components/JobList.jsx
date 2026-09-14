function JobList() {
    return (
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
            />
                description="Se busca diseñador creativo con experiencia en diseño de interfaces"
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
            />
        </div>
    )
}

export default JobList

