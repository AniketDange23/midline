import { Outlet } from 'react-router-dom';
import TopBar from './Components/TopBar';
import BackToTopButton from './Components/FixedButtons';
import Footer from './Components/Footer';
import Header from './Components/Header';
import "aos/dist/aos.css"; // Import AOS CSS

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
