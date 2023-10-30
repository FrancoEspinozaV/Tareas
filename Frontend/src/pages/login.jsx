import { useEffect, useState } from 'react'
import { Supabase } from '../../supabase/supabase'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const Errorlogin = () => {
    return (
      <span style={{ display: 'block', color: '#ff4d4d', marginBottom: '5px' }}>
        Error en las credenciales
      </span>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { error } = await Supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        setError(true)
        throw error
      } else {
        setError(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div id='login'>
      <form id='loginForm' onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='TuCorreo@gmail.com'
          onChange={(e) => {
            setEmail(e.target.value)
            setError(false)
          }}
        />
        <input
          type='password'
          name='password'
          placeholder='********'
          onChange={(e) => {
            setPassword(e.target.value)
            setError(false)
          }}
        />
        {error ? <Errorlogin /> : undefined}
        <button className='Button'>Iniciar</button>
      </form>
    </div>
  )
}
