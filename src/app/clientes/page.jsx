import { prisma } from "@/libs/prisma"
import TaskTR from "@/components/TaskTR"

async function loadTasks() {
  return await prisma.task.findMany()
}

async function clientesPage() {
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
        <TaskTR task={task} key={task.id} />
      ))} 
        </tbody>
      </table>
    </div>
  )
}

export default clientesPage;