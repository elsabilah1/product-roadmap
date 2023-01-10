import { useCookies } from 'react-cookie'
import Auth from '@/views/Auth'
import Dashboard from './views/Dashboard'

function App() {
  const [cookies] = useCookies(['token'])

  if (!cookies.token) return <Auth />

  return <Dashboard />
}

export default App
