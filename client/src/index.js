// import React from "react";
// import ReactDOM from "react-dom";
import App from './App';
// import "./style.css";
import "./reset.css";

// import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// * ~~ Toastify ~~
import { ToastContainer } from "react-toastify";

// * ~~ Cart Wrapper ~~
import { CartProvider } from "react-use-cart";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// const express = require('express');
// const path = require('path');
// const { auth } = require('express-openid-connect');

root.render(
  <div>
    <CartProvider>
      <App />
      <ToastContainer />
    </CartProvider>
  </div>
);