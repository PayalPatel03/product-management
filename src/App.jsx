import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Form from './pages/Form'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>
    </Routes>
    </>
  )
}

export default App