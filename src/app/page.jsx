import { prisma } from "@/libs/prisma"

async function loadTasks() {
  return await prisma.task.findMany()
}

async function HomePage() {
  const tasks = await loadTasks()
  console.log(tasks)

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Titulo Tarea</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Fecha de creacion</th>
          </tr>
        </thead>
        <tbody>
      {tasks.map((task) => (
        <tr key={task.id}>
        <th scope="row">{task.id}</th>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{new Date(task.createdAt).toLocaleDateString()}</td>
      </tr>
      ))} 
        </tbody>
      </table>
    </div>
  )
}

export default HomePage;