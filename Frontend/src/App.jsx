import { useState } from 'react'
import { Login } from './pages/login'
import { Route, Routes } from 'react-router-dom'
const Hello = () => <h1>Hello world</h1>
const NotFound = () => <h1>Not Found</h1>

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Hello />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
