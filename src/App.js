import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import DashboardPage from './page/DashboardPage';
import Page404 from './page/Page404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Home" element={<LoginPage />} />
      <Route path="/Dashboard" element={<LoginPage />} />
      <Route path="/Dashboard:id" element={<DashboardPage />} />
      
      <Route path="*" element={<Page404 />} />
    </Routes>
    
  );
}

export default App;