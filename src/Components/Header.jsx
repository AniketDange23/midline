import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Change the threshold value as needed
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const navLinks = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Services", link: "/services" },
    { text: "Project", link: "/healthproject" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <div
      className={`navigation bg-white position-relative ${
        isScrolled ? "fixed-top" : ""
      }`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
          <a className="navbar-brand" href="/">
            <img
              className="img-fluid LogoImage"
              src="/midlineLogo.jpg"
              alt="Bexar"
              style={{ width: "200px", mixBlendMode: "darken" }}
            />
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navigation"
            aria-expanded={!isNavCollapsed ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse text-center ${
              !isNavCollapsed ? "show" : ""
            } pb-lg-0`}
            id="navigation"
          >
            <ul className="navbar-nav ml-auto">
              {navLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={link.link}
                    onClick={toggleNavbar}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
            {/* search */}
            <div className="search px-4 pb-3 pb-lg-0"></div>
            {/* get start btn */}
            <a href="/contact" className="btn btn-primary hover-ripple">
              get started
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
