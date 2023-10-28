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
  const [adding, setAdding] = useState(false)
  const [loading, setLoading] = useState(false)

  const getTasks = async (done = false) => {
    setLoading(true)
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
    setLoading(false)
  }

  const createTask = async (taskName) => {
    setAdding(true)
    try {
      const {
        data: { user },
      } = await Supabase.auth.getUser()
      const { data, error } = await Supabase.from('Task')
        .insert({
          name: taskName,
          userID: user.id,
        })
        .select()

      if (error) throw error

      setTasks([...tasks, ...data])
    } catch (error) {
      console.log(error)
    } finally {
      setAdding(false)
    }
  }

  return (
    <TaskContext.Provider
      value={{ tasks, getTasks, createTask, adding, loading }}
    >
      {children}
    </TaskContext.Provider>
  )
}
