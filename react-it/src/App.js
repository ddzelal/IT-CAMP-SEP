import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login.js';
import { Dashboard } from './pages/Dashboard.jsx';

 const App = () => {

  return (
   <Routes>
    <Route path='/'  element={<Login/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/page3' element={<h1>Ovo je page 3</h1>} />
    <Route path="*">"404 Not Found"</Route>
   </Routes>
  )
}


export default App
