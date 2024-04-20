import React, { useState, useEffect } from 'react';
import { BsChatSquare, BsWhatsapp } from "react-icons/bs";
import { HiArrowUp } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import ChatBot from 'react-simple-chatbot';
import './FixedButtons.css'; // External CSS file for styling

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const FixedButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const threshold = 400; // Adjust threshold as needed
    setIsVisible(scrollTop > threshold);
  };

  // Function to toggle chat visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  // Function to handle WhatsApp button click
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=+918956101181&text=Hello");
  };

  // Function to handle Call button click
  const handleCallClick = () => {
    window.location.href = 'tel:+918956101181';
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const chatSteps = [
    {
      id: 'Greet',
      message: '📞 Hello! This is Midline Services reaching out to you. How are you doing today?',
      trigger: 'AskInterest'
    },
    {
      id: 'AskInterest',
      message: 'We specialize in optimizing businesses for growth. Are you currently exploring any solutions to enhance your operations?',
      trigger: 'InterestResponse'
    },
    {
      id: 'InterestResponse',
      options: [
        { value: 'Yes', label: 'Yes, I’m interested in exploring solutions.', trigger: 'ExploreSolutions' },
        { value: 'No', label: 'No, I’m not looking for anything right now.', trigger: 'NotInterested' },
      ],
    },
    {
      id: 'ExploreSolutions',
      message: 'That’s fantastic! We offer a range of services tailored to your needs. Could you share more about the specific challenges your business is facing?',
      trigger: 'ShareChallenges'
    },
    {
      id: 'ShareChallenges',
      user: true,
      trigger: 'SolutionsOffer'
    },
    {
      id: 'SolutionsOffer',
      message: 'Thank you for sharing. Based on your challenges, we have some tailored solutions that could benefit your business. Would you like to hear more about them?',
      trigger: 'OfferResponse'
    },
    {
      id: 'OfferResponse',
      options: [
        { value: 'Yes', label: 'Yes, please tell me more.', trigger: 'OfferDetails' },
        { value: 'No', label: 'No, I’m not interested in learning more.', trigger: 'NotInterested' },
      ],
    },
    {
      id: 'OfferDetails',
      message: 'Great! Our solutions include [brief overview of services]. These have been proven to drive significant growth for businesses similar to yours. Would you be open to scheduling a consultation to discuss further?',
      trigger: 'ScheduleConsultation'
    },
    {
      id: 'ScheduleConsultation',
      options: [
        { value: 'Yes', label: 'Yes, let’s schedule a consultation.', trigger: 'ConsultationConfirmed' },
        { value: 'No', label: 'No, I’m not ready for that step yet.', trigger: 'NotReady' },
      ],
    },
    {
      id: 'ConsultationConfirmed',
      message: 'Excellent! We’ll get in touch to arrange a suitable time. Looking forward to helping your business thrive!',
      end: true
    },
    {
      id: 'NotInterested',
      message: 'Alright, no problem! If you ever reconsider or have any questions, feel free to reach out. Have a great day!',
      end: true
    },
    {
      id: 'NotReady',
      message: 'Understood. Whenever you’re ready to explore further, just give us a call. Have a wonderful day!',
      end: true
    }
  ];
  

  return (
    <div>
      {/* Chat Support button */}
      <button onClick={toggleChat} className="fixed-btn chat-btn">
<BsChatSquare/>      </button>

      <button className="fixed-btn whatsapp-btn" onClick={handleWhatsAppClick}>
        <BsWhatsapp />
      </button>

      <button className="fixed-btn call-btn" onClick={handleCallClick} data-aos="zoom-in-up">
        <BiSolidPhoneCall />
      </button>

      {/* Back to top button */}
      {isVisible && (
        <button className="fixed-btn back-to-top-btn" onClick={scrollToTop}>
          <HiArrowUp />
        </button>
      )}

      {/* ChatBot component */}
      {isOpen && (
        <ChatBot
          headerTitle="Chat Support"
          floating
          opened={isOpen}
          steps={chatSteps}
          toggleFloating={toggleChat}
        />
      )}
    </div>
  );
};

export default FixedButtons;
