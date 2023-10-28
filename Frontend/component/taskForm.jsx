import { useState } from 'react'
import { useTasks } from '../context/TaskContext'

export function TaskForm() {
  const [task, setTask] = useState('')
  const { createTask, adding } = useTasks()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(adding)
    createTask(task)
    setTask('')
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Escribe tu tarea'
          value={task}
          onChange={(e) => {
            setTask(e.target.value)
          }}
        />
        <button disabled={adding}>{adding ? 'Añadiendo...' : 'Añadir'}</button>
      </form>
    </section>
  )
}
