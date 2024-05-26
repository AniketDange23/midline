import { Outlet, useLocation } from 'react-router-dom';
import TopBar from './Components/TopBar';
import BackToTopButton from './Components/FixedButtons';
import Footer from './Components/Footer';
import Header from './Components/Header';
import "aos/dist/aos.css"; // Import AOS CSS
import { useEffect } from 'react';

const App = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Scroll to top whenever the pathname changes

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
