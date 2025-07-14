import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Resister from './pages/Resister'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route   path='/'    element={<Home/>}/>
              <Route path='/signup' element={<Resister/>} />
              <Route path='/login' element={<Login/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

