import Link from "next/link";
import "../styles/hero.css"

function HomePage() {

  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">
    
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div className="col-xl-6 col-lg-8">
              <h1>TOP-MAN<span>.</span></h1>
              <h2>Transport Operations - Management</h2>
            </div>
          </div>
    
          <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-user-line"></i>
                <h3> <Link legacyBehavior href="clientes">
                      <a>Clientes</a>
                     </Link> </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-bar-chart-box-line"></i>
                <h3> <Link legacyBehavior href="/">
                      <a>Reportes</a>
                     </Link> </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-calendar-todo-line"></i>
                <h3> <Link legacyBehavior href="/new">
                      <a>Formulario registro</a>
                     </Link> </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-dashboard-2-line"></i>
                <h3> <Link legacyBehavior href="/">
                      <a>Dash-boards</a>
                     </Link> </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-database-2-line"></i>
                <h3> <Link legacyBehavior href="/">
                      <a>Consulta de datos</a>
                     </Link> </h3>
              </div>
            </div>
          </div>
    
        </div>
      </section>
  )
}

export default HomePage;