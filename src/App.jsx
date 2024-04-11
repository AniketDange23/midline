import Footer from './Components/Footer';
import './App.css'
import { Outlet } from 'react-router-dom';

import './index.css';
import TopBar from './Components/TopBar';
import BackToTopButton from './Components/FixedButtons';
import Header from './Components/Header';

const App = () => {
  return (
    <div>   
      <TopBar />
      <Header />
      <Outlet />
      <BackToTopButton/>
      <Footer />
    </div>
  )
}

export default App;
