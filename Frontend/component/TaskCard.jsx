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
      <h3>{task.name}</h3>
      <p>Estado: {task.Done ? 'Completado' : 'No Completado'}</p>
      <div id='botones'>
        <button className='Button2' onClick={() => handleDelete()}>
          Eliminar
        </button>
        <button className='Button3' onClick={() => handleToggleDone()}>
          {!task.Done ? 'Terminar' : 'Pendiente'}
        </button>
      </div>
    </div>
  )
}
