"use client"

import Link from "next/link"

function NavbarClient() {

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">TOP-MAN</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
          <Link legacyBehavior href="/">
            <a className="nav-link">Inicio</a>
          </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Nosotros</a>
          </li>
          <li className="nav-item">
          <Link legacyBehavior href="/Forms">
            <a className="nav-link">Contacto</a>
          </Link>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/Socket">Chat</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false">Servicios</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Nacional</a>
              <a className="dropdown-item" href="#">Internacional</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Socios</a>
            </div>
          </li>
        </ul>
        <form className="d-flex">
        <Link href="/auth/login">
        <button className="btn btn-secondary my-2 my-sm-0 m-2" type="button">ACCEDER</button>
        </Link>
        <Link href="/auth/register">
        <button className="btn btn-secondary my-2 my-sm-0 m-2" type="button">REGISTRARSE</button>
        </Link>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default NavbarClient