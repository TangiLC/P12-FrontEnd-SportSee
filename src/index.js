import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      

      <App />

      
    </Router>
  </React.StrictMode>
);