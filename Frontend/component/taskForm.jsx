import { useState } from 'react'
import { useTasks } from '../context/TaskContext'

export function TaskForm() {
  const [task, setTask] = useState('')
  const { createTask, adding } = useTasks()
  const [errorText, setErrorText] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()

    if (task === '') {
      setErrorText(true)
    } else {
      setErrorText(false)
      createTask(task)
      setTask('')
    }
  }
  const ErrorText = () => {
    return (
      <span style={{ display: 'block', color: '#ff4d4d' }}>
        Debe ingresar un texto
      </span>
    )
  }
  // TODO:
  // Verificar que cuando se agrega una tarea exista algo en el campo
  // del input
  return (
    <section>
      <h2>To Do</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Escribe tu tarea'
          value={task}
          onChange={(e) => {
            setTask(e.target.value)
            if (e.target.value !== '') setErrorText(false)
            else setErrorText(true)
          }}
        />
        <button className='Button3' disabled={adding}>
          {adding ? 'Añadiendo...' : 'Añadir'}
        </button>
        {errorText ? <ErrorText /> : undefined}
      </form>
    </section>
  )
}
