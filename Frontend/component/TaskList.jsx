import { useEffect } from 'react'
import { useTasks } from '../context/TaskContext'
import { TaskCard } from './TaskCard'
export function TaskList() {
  const { tasks, getTasks, loading } = useTasks()
  useEffect(() => {
    getTasks()
  }, [])
  function renderTask() {
    if (loading) return <p>Cargando ...</p>
    else if (tasks.length === 0) return <p>No se han encontrado tareas</p>
    return (
      <div>
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    )
  }

  return renderTask()
}
