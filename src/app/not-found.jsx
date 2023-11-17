import Link from "next/link";

function NotFound(){
    return(
        <div className="container error-container d-flex align-items-center justify-content-center">
            <section className="">
            <p className="error-message">Error</p>
                <h1 className="error-heading">404</h1>
                <p className="error-message">Pagina no encontrada</p>
                <Link href="/">
                <p className="error-message">Vovler al inicio</p>
                </Link>
                
            </section>
        </div>
    )
}

export default NotFound;