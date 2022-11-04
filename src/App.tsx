import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Connect, Squads, Create, Vault, Profile } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/connect-squad' element={<Connect />} />
        <Route path='/squads' element={<Squads />} />
        <Route path='/create-squad' element={<Create />} />
        <Route path='/vault' element={<Vault />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Navigate to='/connect-squad' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
