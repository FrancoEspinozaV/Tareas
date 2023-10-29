import { useTasks } from '../context/TaskContext'

export function TaskCard({ task }) {
  const { deleteTask } = useTasks()

  const handleDelete = () => {
    deleteTask(task.id)
  }

  const handleToggleDone = () => {
    alert('Completado!!')
  }
  return (
    <div key={task.id}>
      <h2>{task.name}</h2>
      <p>{task.Done}</p>
      <button onClick={() => handleDelete()}>Eliminar</button>
      <button onClick={() => handleToggleDone()}>Listo</button>
    </div>
  )
}
