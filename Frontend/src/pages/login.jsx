import { useState } from 'react'
import { Supabase } from '../../supabase/supabase'
export function Login() {
  const [email, setEmail] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await Supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: 'http://127.0.0.1:5173/',
        },
      })
      console.log(data, error)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='ejemplo@gmail.com'
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  )
}
