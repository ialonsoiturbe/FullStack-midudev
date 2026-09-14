function Header() {
    return (
        <header className="header">
            
            <div  className="container">
               <h1>DevJobs</h1>
                <nav>
                    <a href="#jobs">Trabajos</a>
                    <a href="#about">Acerca</a>
                    <a href="#contact">Contacto</a>
                </nav>
            </div>
        </header>
    )
}

//exportamos el componente para poder usarlo en otros archivos como App.jsx
export default Header

