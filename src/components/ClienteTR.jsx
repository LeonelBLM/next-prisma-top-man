"use client"

import { useRouter } from "next/navigation";

function ClienteTR({cliente}) {

    const router = useRouter();

    return (
        <tr
        onClick={() => {
            router.push('/users/cliente/edit/' + cliente.id_cliente)
        }}
        >
            <th scope="row">{cliente.id_cliente}</th>
            <td>{cliente.nombre}</td>
            <td>{cliente.apellido}</td>
            <td>{cliente.clave}</td>
            <td>{cliente.email}</td>
            <td>{cliente.direccion}</td>
            <td>{cliente.telefono}</td>
            <td>{new Date(cliente.createdAt).toLocaleDateString()}</td>
        </tr>
    )
}

export default ClienteTR;