import { prisma } from "@/libs/prisma"
import CargaTR from "@/components/CargaTR"

async function loadCargas() {
  return await prisma.carga.findMany()
}

async function listPage() {
  const cargas = await loadCargas()

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID_Carga</th>
            <th scope="col">Remitente</th>
            <th scope="col">Destinatario</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Destino</th>
            <th scope="col">Importe</th>
            <th scope="col">Estado</th>
            <th scope="col">Fecha de recibo</th>
            <th scope="col">Fecha de entrega</th>
          </tr>
        </thead>
        <tbody>
      {cargas.map((carga) => (
        <CargaTR carga={carga} key={carga.id_carga} />
      ))} 
        </tbody>
      </table>
      
    </div>
  )
}

export default listPage;