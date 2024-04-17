import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import TopBar from './Components/TopBar';
import BackToTopButton from './Components/FixedButtons';
import Footer from './Components/Footer';
import Header from './Components/Header';

const App = () => {
 
  return (
    <div>
     
        <>
          <TopBar />
          <Header />
          <Outlet />
          <BackToTopButton />
          <Footer />
        </>
      
    </div>
  );
};

export default App;
