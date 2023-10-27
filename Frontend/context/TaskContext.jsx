import { createContext, useContext } from 'react'

export const TaskContext = createContext()

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTasks must be used within a TaskContext')
  return context
}

export const TaskContextProvider = ({ children }) => {
  const obj = {
    name: 'Hello World',
  }
  return <TaskContext.Provider value={obj}>{children}</TaskContext.Provider>
}
