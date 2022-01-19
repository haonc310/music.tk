import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Favorite from '../pages/Favorite';
import HomePage from '../pages/Home';
import Listened from '../pages/Listened';
import { UseAccount } from '../hooks';

const RouterControllers = () => {
  const navigate = useNavigate();
  const { resultAccount } = UseAccount();
  const { accessToken } = resultAccount;

  useEffect(() => {
    if (!accessToken) navigate('/');
  }, [accessToken, navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/listened-song" element={<Listened />} />
    </Routes>
  );
};

export default RouterControllers;
