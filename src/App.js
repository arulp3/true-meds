import './App.css'
import * as React from 'react'
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logged from './Components/Logged';

function App() {

    
  

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Logged />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
