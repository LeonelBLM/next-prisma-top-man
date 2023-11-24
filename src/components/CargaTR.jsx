"use client"
import { useRouter } from "next/navigation";

function CargaTR({carga}) {

    const router = useRouter();

    return (
        <tr
        onClick={() => {
            router.push('/users/carga/edit/' + carga.id_carga)
        }}
        >
            <th scope="row">{carga.id_carga}</th>
            <td>{carga.remitenteId}</td>
            <td>{carga.destinatarioId}</td>
            <td>{carga.tipo}</td>
            <td>{carga.destino}</td>
            <td>$ {carga.importe}</td>
            <td>{carga.estado}</td>
            <td>{new Date(carga.fecha_recibo).toLocaleDateString()}</td>
            <td>{new Date(carga.fecha_entrega).toLocaleDateString()}</td>
        </tr>
    )
}

export default CargaTR;