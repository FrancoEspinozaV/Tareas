import { useEffect, useState } from 'react'
import { Supabase } from '../../supabase/supabase'
import { useNavigate } from 'react-router-dom'
export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Supabase.auth.signInWithPassword({
        email,
        password,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!Supabase.auth.getUser()) {
      navigate('/')
    }
  }, [navigate])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='ejemplo@gmail.com'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='********'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  )
}
