function JobCard({ job }) {
    //extraemos las propiedades del objeto job
    const { title, company, location, salary, description, tags } = job

    /*Antiguo código que estaba comentado
    return (
        <article className="job-card">
            <header className="job-card-header">
                <h3 className="job-title">{title}</h3>
                <p className="job-company">{company}</p>
            </header>
            
            <div className="job-card-body">
                <p className="job-location">{location}</p>
                <p className="job-card-description">{description}</p>
                <p className="job-salary">{salary}</p>
            </div>

            <footer className="job-card-footer">
                <span className="job-tags">{tags.join(', ')}</span>
                <button className="btn-apply">Aplicar</button>
            </footer>
        </article>
    )*/

    return (
        <article className={`job-card ${isFeatured ? 'featured' : ''}`}>
            <header className="job-card-header">
                <h3 className="job-title">{title}</h3>
                <p className="job-company">{company}</p>

                <div className="badges">
                    {isNew && <span className="badge new">Nuevo</span>}
                    {isFeatured && <span className="badge featured">Destacado</span>}
                    {isRemote && <span className="badge remote">Remoto</span>}
                </div>
            </header>

            <div className="job-card-body">
                <p className="job-location">{location}</p>
                <p className="job-card-description">{description}</p>
                <p className="job-salary">{salary}</p>
            </div>

            <footer className="job-card-footer">
                <span className="job-tags">{tags.join(', ')}</span>
                <button className="btn-apply">Aplicar</button>
            </footer>
        </article>
    )
}

export default JobCard