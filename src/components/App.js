import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SharedLayout from './SharedLayout/SharedLayout'
import HomePage from '../pages/HomePage/HomePage'
import Teachers from '../pages/Teachers/Teachers'
import Favorites from '../pages/Favorites/Favorites'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index path='home' element={<HomePage/>}/>
        <Route path='teachers' element={<Teachers/>}/>
        <Route path='favorites' element={<Favorites/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
