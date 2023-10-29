import { useTasks } from '../context/TaskContext'

export function TaskCard({ task }) {
  const { deleteTask, updateTask } = useTasks()

  const handleDelete = () => {
    deleteTask(task.id)
  }

  const handleToggleDone = () => {
    updateTask(task.id, { Done: !task.Done })
  }
  return (
    <div key={task.id}>
      <h2>{task.name}</h2>
      <p>Estado: {task.Done ? 'Completado' : 'No Completado'}</p>
      <button onClick={() => handleDelete()}>Eliminar</button>
      <button onClick={() => handleToggleDone()}>Listo</button>
    </div>
  )
}
