// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./header.css";
import { Link } from 'react-router-dom';
const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 
  useEffect(() => {

    const handleScrollToTop = () => {
      window.scrollTo({ top: 800, behavior: "smooth" });
    };


    const navLinks = document.querySelectorAll('.navlink');
    navLinks.forEach(link => {
      link.addEventListener('click', handleScrollToTop);
    });


    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleScrollToTop);
      });
    };
  }, []);
 

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const navLinks = [
    { text: "Home", link: "/" },
    { text: "About ", link: "/about" },
    { text: "Services", link: "/services" },
    // { text: "Project", link: "/healthproject" },
    { text: "Contact", link: "/contact#form" },
  ];

  return (
    <div className={`navigation  ${sticky ? "fixed-top" : ""}`}>
      <div className='container-fluid px-4'>
        <nav className='navbar navbar-expand-lg   '>
          <a className='navbar-brand' href='/'>
            <img
              className='img-fluid LogoImage'
              src='logo.png'
              alt='midLine'
              style={{ width: "150px", mixBlendMode: "darken" }}
            />
          </a>
          <button
            className='navbar-toggler border-0 button text-white'
            type='button'
            onClick={toggleNavbar}
            aria-controls='navigation'
            aria-expanded={!isNavCollapsed ? "true" : "false"}
            aria-label='Toggle navigation'
          >
            <FaBars />
          </button>
          <div
            className={`collapse navbar-collapse text-center ${
              !isNavCollapsed ? "show" : ""
            }`}
            id='navigation'
          >
            <ul className='navbar-nav ml-auto'>
              {navLinks.map((link, index) => (
                <li key={index} className='nav-item'>
                  <NavLink
                    className='nav-link  fw-semibold '
                    to={link.link}
                    onClick={toggleNavbar}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>

            <button className='button mx-3 '>
              <NavLink  to='/contact' className='navlink' > Get's Started</NavLink>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
