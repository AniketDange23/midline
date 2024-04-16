// FixedButtons.js
import React, { useState } from 'react';
import {  BsWhatsapp } from "react-icons/bs";
import { HiArrowUp } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";import './FixedButtons.css'; // External CSS file for styling

const FixedButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const threshold = 400; // Adjust threshold as needed
    setIsVisible(scrollTop > threshold);
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to handle WhatsApp button click
  const handleWhatsAppClick = () => {
    // Replace this with your WhatsApp logic
    window.open("https://api.whatsapp.com/send?phone=+918956101181&text=Hello");
  };

  // Function to handle Call button click
  const handleCallClick = () => {
    // Replace this with your call logic
    window.location.href = 'tel: +918956101181';
  };

  // Add event listener when component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* WhatsApp button */}
      <button className="fixed-btn whatsapp-btn" onClick={handleWhatsAppClick}>
        <BsWhatsapp/>
      </button>
      {/* Call button */}
      <button className="fixed-btn call-btn" onClick={handleCallClick}>
        <BiSolidPhoneCall/>
      </button>
      {/* Back to top button */}
      {isVisible && (
        <button className="fixed-btn back-to-top-btn" onClick={scrollToTop}>
       <HiArrowUp/>
        </button>
      )}
  
    </div>
  );
};

export default FixedButtons;
