import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Register from './pages/Register';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import MainMenu from './pages/Main_Menu';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/main_Menu" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
}