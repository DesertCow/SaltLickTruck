import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Register from './pages/Register';
// import Chat from './pages/Chat';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}