import { prisma } from "@/libs/prisma"
import ClienteTR from "@/components/ClienteTR"

async function loadCliente() {
  return await prisma.cliente.findMany()
}

async function listPage() {
  const clientes = await loadCliente()

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
      {clientes.map((cliente) => (
        <ClienteTR cliente={cliente} key={cliente.id_cliente} />
      ))} 
        </tbody>
      </table>
    </div>
  )
}

export default listPage;