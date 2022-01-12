import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Favorite from '../pages/Favorite';
import HomePage from '../pages/Home';
import Listened from '../pages/Listened';
const RouterControllers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/listened-song" element={<Listened />} />
    </Routes>
  );
};

export default RouterControllers;
