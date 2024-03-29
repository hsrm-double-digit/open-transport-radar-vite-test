import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Home, Settings } from './pages'
import Feedback from './pages/Feedback/Feedback'


function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes