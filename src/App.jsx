import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import TopBar from './Components/TopBar';
import BackToTopButton from './Components/FixedButtons';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { ThreeDots } from 'react-loader-spinner'; // Import ThreeDots component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (adjust as needed)
    }, 2000);

    // Cleanup timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Run only on initial mount

  return (
    <div>
      {/* Render the loader if loading */}
      {loading && (
        <div className="loader">
          <ThreeDots
          
            visible={true}
            height={180}
            width={180}
            color="#4fa94d"
            radius={10}
            ariaLabel="loading"
          
          />
        </div>
      )}

      {/* Render the main content only if not loading */}
      {!loading && (
        <>
          <TopBar />
          <Header />
          <Outlet />
          <BackToTopButton />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
