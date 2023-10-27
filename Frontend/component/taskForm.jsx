import { useState } from 'react'
import { Supabase } from '../supabase/supabase'
export function TaskForm() {
  const [task, setTask] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const {
      data: { user },
    } = await Supabase.auth.getUser()
    try {
      const result = await Supabase.from('Task').insert({
        name: task,
        userID: user.id,
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Escribe tu tarea'
          onChange={(e) => {
            setTask(e.target.value)
          }}
        />
        <button>Añadir</button>
      </form>
    </section>
  )
}
