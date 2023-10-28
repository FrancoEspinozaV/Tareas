import { useEffect } from 'react'
import { Supabase } from '../../supabase/supabase'
import { useNavigate } from 'react-router-dom'
import { TaskForm } from '../../component/taskForm'
import { TaskList } from '../../component/TaskList'
export function Home() {
  const navigate = useNavigate()

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
      <TaskList />
    </div>
  )
}
