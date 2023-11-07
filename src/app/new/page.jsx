"use client"
import { useRouter } from "next/navigation"

function NewPage() {
    
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value

        const res = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data)
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
                        <input type="text" className="form-control" id="title" aria-describedby="textarea" placeholder="Titulo"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className="form-label mt-4">Descripcion</label>
                        <textarea type="text" className="form-control" id="description" rows="3" aria-describedby="textarea" placeholder="Descripcion" />
                    </div>
                    <div className="d-flex m-2">
                        <button type="submit" className="btn btn-outline-primary">Guardar</button>
                        <button type="" className="btn btn-outline-danger">Cancelar</button>
                    </div>
                    

                </fieldset>
            </form>
        </div>
        </section>
    );
}

export default NewPage;