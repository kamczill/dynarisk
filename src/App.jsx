import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div className='bg-black min-h-screen text-white'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
