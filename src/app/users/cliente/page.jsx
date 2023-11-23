"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

function NewCliente({ params }) {

    const router = useRouter()
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [clave, setClave] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");

    


    useEffect(() => {
        if(params.id){
            fetch(`/users/api/cliente/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setNombre(data.nombre)
                setApellido(data.apellido)
                setClave(data.clave)
                setEmail(data.email)
                setDireccion(data.direccion)
                setTelefono(data.telefono)
            })
        }
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()

        if (params.id) {
            const res = await fetch(`/users/api/cliente/${params.id}`, {
                method: "PUT",
                body: JSON.stringify({ nombre, apellido, clave, email, direccion, telefono: parseInt(telefono)}),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await res.json();
            console.log(data)
        } else {
            const res = await fetch('/users/api/cliente', {
                method: 'POST',
                body: JSON.stringify({ nombre, apellido, clave, email, direccion, telefono: parseInt(telefono) }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
        }
        router.refresh();
        router.push("/users/cliente/list");
    };

    return (
        <section className="d-flex align-items-center justify-content-center py-4">
            <div className="col-md-6">
                <form className="card card-body border-primary "
                    onSubmit={onSubmit}>

                    <fieldset>
                        <legend>Registrar Cliente</legend>
                        <div className="form-group">
                            <label className="form-label mt-4">Nombre</label>
                            <input type="text" className="form-control" id="nombre" aria-describedby="textarea" placeholder="nombre"
                                onChange={(e) => setNombre(e.target.value)}
                                value={nombre}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Apellido</label>
                            <textarea type="text" className="form-control" id="apellido" rows="3" aria-describedby="textarea" placeholder="Apellido"
                                onChange={(e) => setApellido(e.target.value)}
                                value={apellido}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Clave</label>
                            <input type="password" className="form-control" id="clave" aria-describedby="textarea" placeholder="***********"
                                onChange={(e) => setClave(e.target.value)}
                                value={clave}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label mt-4">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="textarea" placeholder="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label mt-4">Direccion</label>
                            <input type="text" className="form-control" id="direccion" aria-describedby="textarea" placeholder="direccion"
                                onChange={(e) => setDireccion(e.target.value)}
                                value={direccion}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label mt-4">Telefono</label>
                            <input type="number" className="form-control" id="telefono" aria-describedby="textarea" placeholder="telefono"
                                onChange={(e) => setTelefono(e.target.value)}
                                value={telefono}
                            />
                        </div>
                        <div className="d-flex mt-4">
                            <button type="submit" className="btn btn-outline-primary m-2">Guardar</button>
                            <button type="" className="btn btn-outline-danger m-2">Cancelar</button>
                            {
                              params.id && (
                                <button type="button" className="btn btn-outline-danger m-2"
                                onClick={async () => {
                                 const res = await fetch(`/users/api/cliente/${params.id}`, {
                                        method: "DELETE",   
                                    })
                                    const data = await res.json()
                                    router.refresh();
                                    router.push("/users/cliente/list");
                                }}
                                >Eliminar
                                </button>
                              )  
                            }
                        </div>

                    </fieldset>
                </form>
            </div>
        </section>
    );
};
export default NewCliente;