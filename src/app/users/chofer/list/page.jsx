import { prisma } from "@/libs/prisma"
import ChoferTR from "@/components/ChoferTR"

async function loadChoferes() {
  return await prisma.chofer.findMany()
}

async function listPage() {
  const choferes = await loadChoferes()

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Clave</th>
            <th scope="col">Email</th>
            <th scope="col">Direccion</th>
            <th scope="col">Telefono</th>
            <th scope="col">Fecha de Creacion</th>
          </tr>
        </thead>
        <tbody>
      {choferes.map((chofer) => (
        <ChoferTR chofer={chofer} key={chofer.id_chofer} />
      ))} 
        </tbody>
      </table>
    </div>
  )
}

export default listPage;