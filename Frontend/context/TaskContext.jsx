import { createContext, useContext, useState } from 'react'
import { Supabase } from '../supabase/supabase'

export const TaskContext = createContext()

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTasks must be used within a TaskContext')
  return context
}

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const getTasks = async (done = false) => {
    const {
      data: { user },
    } = await Supabase.auth.getUser()
    const { data: datas, error } = await Supabase.from('Task')
      .select()
      .eq('userID', user.id)
      .eq('Done', done)
      .order('id', { ascending: true })

    if (!error) {
      console.log(error)
    }
    setTasks(datas)
  }

  return (
    <TaskContext.Provider value={{ tasks, getTasks }}>
      {children}
    </TaskContext.Provider>
  )
}
