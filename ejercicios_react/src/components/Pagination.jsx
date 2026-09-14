function Pagination({ currentPage, totalPages }) {
    // Generar array de páginas a mostrar
    //Array.from() crea un nuevo array
    //{ length: totalPages } define la longitud del array
    //(_, i) => i + 1 transforma cada índice en un número de página
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    const styleLinkLeft = {
        opacity: currentPage === 1 ? 0.5 : 1,
        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
    }
    
    const styleLinkRight = {
        opacity: currentPage === totalPages ? 0.5 : 1,
        cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
    }  

    return (
        <div className="pagination">
            <a href="#" style={styleLinkLeft}>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                   stroke="currentColor"
                   strokeWidth="1.5"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" />
                </svg>
            </a>

            {/*Recorre cada elemento del array pages
            //Por cada page, retorna un elemento <a>
            //key={page} es obligatorio para que React identifique cada elemento*/}
            {pages.map((page) => (
                <a key={page} className={currentPage === page ? 'is-active' : ''} href="#">
                    {page}
                </a>
            ))}

            <a href="#" style={styleLinkRight}>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                </svg>
            </a>
        </div>
    )
}

export default Pagination