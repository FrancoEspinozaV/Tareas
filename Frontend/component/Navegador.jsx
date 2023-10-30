import { Supabase } from '../supabase/supabase'

export function Navegador() {
  return (
    <nav>
      <h1 style={{ userSelect: 'none' }}>To Do List</h1>
      <button className='Button1' onClick={() => Supabase.auth.signOut()}>
        Cerrar Sesion
      </button>
    </nav>
  )
}
