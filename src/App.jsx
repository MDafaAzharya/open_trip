import { useState } from 'react';
import Navbar from './app/component/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Register from './app/pages/register';
import Footer from './app/component/Footer';
import Choose from './app/pages/Choose';
import Login from './app/pages/Login';
import { Destinasi } from './app/pages/Destinasi';
import RegisterHoster from './app/pages/registerHoster';
import DetailDestinasi from './app/pages/detailDestinasi';
import Beranda from './app/pages/Beranda';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
      <Route exact path="/" element={<Beranda />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/choose" element={<Choose />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/destinasi" element={<Destinasi />} />
        <Route exact path="/registerHoster" element={<RegisterHoster />} />
        <Route exact path="/detailDestinasi" element={<DetailDestinasi />} />
        <Route exact path="/beranda" element={<Beranda />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
