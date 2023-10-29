import { useEffect, useState } from 'react'
import { Supabase } from '../../supabase/supabase'
import { useNavigate } from 'react-router-dom'
import { TaskForm } from '../../component/taskForm'
import { TaskList } from '../../component/TaskList'
export function Home() {
  const navigate = useNavigate()
  const [showToggleTask, setShowToggleTask] = useState(false)
  useEffect(() => {
    if (!Supabase.auth.getUser()) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => Supabase.auth.signOut()}>Cerrar Sesion</button>
      <TaskForm />
      <header>
        <span>tareas {!showToggleTask ? 'Pendientes' : 'Completadas'} </span>
        <button onClick={() => setShowToggleTask(!showToggleTask)}>
          Mostrar tareas {showToggleTask ? 'Pendientes' : 'Completadas'}
        </button>
      </header>
      <TaskList done={showToggleTask} />
    </div>
  )
}
