// Components/MainLayout.jsx
import React from 'react';
import LoginNavbar from './LoginNavBar';

const MainLayout = ({ children }) => {
  return (
    <>
      <LoginNavbar />
      <div className="container mt-4">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
