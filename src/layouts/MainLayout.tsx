import React from 'react';
import Header from '../components/Header/header';
import Sidebar from '../components/Sidebar/sidebar';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
