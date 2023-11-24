"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

function NewCarga({ params }) {

    const router = useRouter()
    const [remitenteId, setRemitenteId] = useState("");
    const [destinatarioId, setDestinatarioId] = useState("");
    const [tipo, setTipo] = useState("");
    const [destino, setDestino] = useState("");
    const [importe, setImporte] = useState("");
    const [estado, setEstado] = useState("");

    useEffect(() => {
        if (params.id) {
            fetch(`/users/api/carga/${params.id}`)
                .then(res => res.json())
                .then(data => {
                    setRemitenteId(data.remitenteId)
                    setDestinatarioId(data.destinatarioId)
                    setTipo(data.tipo)
                    setDestino(data.destino)
                    setImporte(data.importe)
                    setEstado(data.estado)
                })
        }
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()

        if (params.id) {
            const res = await fetch(`/users/api/carga/${params.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    remitenteId: parseInt(remitenteId),
                    destinatarioId: parseInt(destinatarioId),
                    tipo, destino, importe: parseFloat(importe), estado,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await res.json();
            console.log(data)
        } else {
            const res = await fetch('/users/api/carga', {
                method: 'POST',
                body: JSON.stringify({
                    remitenteId: parseInt(remitenteId),
                    destinatarioId: parseInt(destinatarioId),
                    tipo, destino, importe: parseFloat(importe), estado,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
        }
        router.refresh();
        router.push("/users/carga/list");
    };

    return (
        <section className="d-flex align-items-center justify-content-center py-4">
            <div className="col-md-6">
                <form className="card card-body border-primary "
                    onSubmit={onSubmit}>

                    <fieldset>
                        <legend>Registrar Carga</legend>
                        <div className="form-group">
                            <label className="form-label mt-4">Remitente</label>
                            <input type="number" className="form-control" id="remitenteId" aria-describedby="textarea" placeholder="ID CLIENTE"
                                onChange={(e) => setRemitenteId(e.target.value)}
                                value={remitenteId}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label mt-4">Destinatario</label>
                            <input type="number" className="form-control" id="destinatarioId" aria-describedby="textarea" placeholder="ID CLIENTE"
                                onChange={(e) => setDestinatarioId(e.target.value)}
                                value={destinatarioId}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label mt-4">Descripcion de carga</label>
                            <textarea type="text" className="form-control" id="tipo" rows="3" aria-describedby="textarea" placeholder="Descripcion"
                                onChange={(e) => setTipo(e.target.value)}
                                value={tipo}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Destino</label>
                            <input type="text" className="form-control" id="destino" aria-describedby="textarea" placeholder="Destino"
                                onChange={(e) => setDestino(e.target.value)}
                                value={destino}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleSelect1" className="form-label mt-4">Estado de la carga</label>
                            <select className="form-select" id="estado" onChange={(e) => setEstado(e.target.value)}
                                value={estado}>
                                <option>entregado</option>
                                <option>curso</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label mt-4">Importe</label>
                            <div className="form-group">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">$</span>
                                    <input type="number" className="form-control" id="importe" aria-describedby="textarea" placeholder=""
                                        onChange={(e) => setImporte(e.target.value)}
                                        value={importe}
                                    />
                                    <span className="input-group-text">BOB</span>
                                </div>
                            </div>

                        </div>
                        <div className="d-flex mt-4">
                            <button type="submit" className="btn btn-outline-primary m-2">Guardar</button>
                            <button type="button" className="btn btn-outline-danger m-2" onClick={() => {
                                router.push("/users/carga/list");
                            }}>Cancelar</button>
                            {
                                params.id && (
                                    <button type="button" className="btn btn-outline-danger m-2"
                                        onClick={async () => {
                                            const res = await fetch(`/users/api/carga/${params.id}`, {
                                                method: "DELETE",
                                            })
                                            const data = await res.json()
                                            router.refresh();
                                            router.push("/users/carga/list");
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
export default NewCarga;