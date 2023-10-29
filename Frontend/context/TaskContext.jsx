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

    if (error) throw error

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

  const deleteTask = async (id) => {
    try {
      const {
        data: { user },
      } = await Supabase.auth.getUser()
      const { error } = await Supabase.from('Task')
        .delete()
        .eq('userID', user.id)
        .eq('id', id)
        .select()
      if (error) throw error

      const newTask = tasks.filter((task) => task.id !== id)

      setTasks(newTask)
    } catch (error) {
      console.log(error)
    }
  }

  const updateTask = async (id, updateFields) => {
    try {
      const {
        data: { user },
      } = await Supabase.auth.getUser()

      const { error } = await Supabase.from('Task')
        .update(updateFields)
        .eq('userID', user.id)
        .eq('id', id)

      if (error) throw error

      const newTask = tasks.filter((task) => task.id !== id)

      setTasks(newTask)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        createTask,
        adding,
        loading,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
