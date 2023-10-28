import { useEffect } from 'react'
import { useTasks } from '../context/TaskContext'
export function TaskList() {
  const { tasks, getTasks } = useTasks()
  useEffect(() => {
    getTasks()
  }, [])
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.name}</h2>
          <p>{task.Done}</p>
        </div>
      ))}
    </div>
  )
}
