import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import SharedLayout from './SharedLayout/SharedLayout'
import HomePage from '../pages/HomePage/HomePage'
import Teachers from '../pages/Teachers/Teachers'
import Favorites from '../pages/Favorites/Favorites'
import { PrivateRoute } from './PrivateRoute'

const App = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    location.pathname = "/home";
  }
  
  return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index path='home' element={<HomePage/>}/>
        <Route path='teachers' element={<Teachers/>}/>
        <Route path='favorites' element={<PrivateRoute redirectTo="/home" component={<Favorites />} />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
