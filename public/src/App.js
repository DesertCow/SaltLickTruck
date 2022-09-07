import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Register from './pages/Register';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Main_Menu from './pages/Main_Menu';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Main_Menu" element={<Main_Menu />} />
      </Routes>
    </BrowserRouter>
  );
}