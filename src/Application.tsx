import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './pages/home';
import Register from './pages/Register';


export default function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}
