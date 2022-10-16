import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Connect, Squads, Create } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/connect-squad' element={<Connect />} />
        <Route path='/squads' element={<Squads />} />
        <Route path='/create' element={<Create />} />
        <Route path='*' element={<Navigate to='/connect-squad' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
