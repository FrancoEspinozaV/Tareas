import { useEffect, useState } from 'react'
import { Login } from './pages/login'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Supabase } from '../supabase/supabase'
import { Home } from './pages/home'
import { TaskContextProvider } from '../context/TaskContext'
const NotFound = () => <h1>Not Found</h1>

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    Supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login')
      } else {
        navigate('/')
      }
    })
  }, [])

  return (
    <TaskContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  )
}

export default App
