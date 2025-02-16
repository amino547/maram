// src/components/LogoutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600">
      Logout
    </button>
  );
};

export default LogoutButton;
