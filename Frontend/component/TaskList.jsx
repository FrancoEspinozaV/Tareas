import { useEffect } from 'react'
import { useTasks } from '../context/TaskContext'
import { TaskCard } from './TaskCard'
export function TaskList({ done }) {
  const { tasks, getTasks, loading } = useTasks()
  useEffect(() => {
    getTasks(done)
  }, [done])
  function renderTask() {
    if (loading) return <p>Cargando ...</p>
    else if (tasks.length === 0) return <p>No se han encontrado tareas</p>
    return (
      <section id='Tasks'>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </section>
    )
  }

  return renderTask()
}
