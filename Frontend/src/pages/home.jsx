import { useEffect, useState } from 'react'
import { Supabase } from '../../supabase/supabase'
import { useNavigate } from 'react-router-dom'
import { TaskForm } from '../../component/taskForm'
import { TaskList } from '../../component/TaskList'
import { Navegador } from '../../component/Navegador'
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
      <Navegador />
      <main>
        <header>
          <TaskForm />
          <h2>Tareas {!showToggleTask ? 'Pendientes' : 'Completadas'} </h2>
          <button
            className='Button1'
            onClick={() => setShowToggleTask(!showToggleTask)}
          >
            Mostrar tareas {showToggleTask ? 'Pendientes' : 'Completadas'}
          </button>
        </header>
        <TaskList done={showToggleTask} />
      </main>
    </div>
  )
}
