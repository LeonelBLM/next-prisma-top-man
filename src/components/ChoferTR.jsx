"use client"

import { useRouter } from "next/navigation";

function ChoferTR({chofer}) {

    const router = useRouter();

    return (
        <tr
        onClick={() => {
            router.push('/users/chofer/edit/' + chofer.id_chofer)
        }}
        >
            <th scope="row">{chofer.id_chofer}</th>
            <td>{chofer.nombre}</td>
            <td>{chofer.apellido}</td>
            <td>{chofer.clave}</td>
            <td>{chofer.email}</td>
            <td>{chofer.direccion}</td>
            <td>{chofer.telefono}</td>
            <td>{new Date(chofer.createdAt).toLocaleDateString()}</td>
        </tr>
    )
}

export default ChoferTR;