import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import "./style.css";
import "./reset.css";

import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
    <App />
  </div>
);