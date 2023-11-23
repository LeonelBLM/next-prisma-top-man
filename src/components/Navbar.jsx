"use client"
import Link from "next/link";
import { signOut } from "next-auth/react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    TOP-MAN
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link legacyBehavior href="/new">
                                <a className="nav-link">Formularios</a>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link legacyBehavior href="/reports">
                                <a className="nav-link" >Reportes</a>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-secondary my-2 my-sm-0"
                        onClick={() => signOut()}
                        >LOGOUT</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;