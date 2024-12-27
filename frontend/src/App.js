// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import PrivacyPage from './pages/Privacy';
import LoginPage from './pages/LoginPage';
import CreateAbout from './components/CreateAbout';
import CreateReview from './components/CreateReview';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/create-about" element={<CreateAbout />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-review" element={<CreateReview />} />
     
      </Routes>
    </Router>
  );
};

export default App;

