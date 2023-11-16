"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

function NewPage({ params }) {

    const router = useRouter()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    useEffect(() => {
        if(params.id){
            fetch(`/api/tasks/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setTitle(data.title)
                setDescription(data.description)
            })
        }
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()

        if (params.id) {
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                body: JSON.stringify({ title, description}),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await res.json();
            console.log(data)
        } else {
            const res = await fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify({ title, description }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
        }
        router.refresh();
        router.push("/");
    };

    return (
        <section className="d-flex align-items-center justify-content-center py-4">
            <div className="col-md-6">
                <form className="card card-body border-primary "
                    onSubmit={onSubmit}>

                    <fieldset>
                        <legend>Registrar Tarea</legend>
                        <div className="form-group">
                            <label className="form-label mt-4">Titulo</label>
                            <input type="text" className="form-control" id="title" aria-describedby="textarea" placeholder="Titulo"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Descripcion</label>
                            <textarea type="text" className="form-control" id="description" rows="3" aria-describedby="textarea" placeholder="Descripcion"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                            />
                        </div>
                        <div className="d-flex mt-4">
                            <button type="submit" className="btn btn-outline-primary m-2">Guardar</button>
                            <button type="" className="btn btn-outline-danger m-2">Cancelar</button>
                            {
                              params.id && (
                                <button type="button" className="btn btn-outline-danger m-2"
                                onClick={async () => {
                                 const res = await fetch(`/api/tasks/${params.id}`, {
                                        method: "DELETE",   
                                    })
                                    const data = await res.json()
                                    router.refresh();
                                    router.push("/");
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
}

export default NewPage;