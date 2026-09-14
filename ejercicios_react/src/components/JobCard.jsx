function JobCard({ job }) {
    return (
        <article className="job-card">
            <header className="job-card-header">
                <h3 className="job-card-title">{job.titulo}</h3>
                <p className="job-card-company">{job.empresa}</p>
                <p className="job-card-location">{job.ubicacion}</p>
            </header>
            
            <div className="job-card-body">
                <p className="job-location">📍 {job.location}</p>
                <p className="job-card-description">{job.descripcion}</p>
                <p className="job-salary">💰 {job.salary}</p>
            </div>

            <footer className="job-card-footer">
                <span className="job-tags">{job.tags.join(', ')}</span>
                <button className="btn-apply">Aplicar</button>
            </footer>
        </article>
    )
}

export default JobCard