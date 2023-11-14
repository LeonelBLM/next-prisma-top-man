"use client"

import { useRouter } from "next/navigation";

function TaskTR({task}) {

    const router = useRouter();

    return (
        <tr
        onClick={() => {
            router.push('/tasks/edit/' + task.id)
        }}
        >
            <th scope="row">{task.id}</th>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    )
}

export default TaskTR;