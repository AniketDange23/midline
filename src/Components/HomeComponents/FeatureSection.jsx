import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// const data = [
//   {
//     count: 3,
//     title: " Years Experience",
//     description:
//       "Three years of dedicated innovation, delivering excellence every step of the way.",
//   },
//   {
//     count: 9,
//     title: "Happy Clients",
//     description:
//       "Serving 9 satisfied clients with exceptional service and results that exceed expectations.",
//   },
//   {
//     count: 250,
//     title: " Best Calling Service",
//     description:
//       "Providing the best calling service to 250 clients, ensuring seamless communication.",
//   },
//   {
//     count: 70,
//     title: "Expert Workers",
//     description:
//       "Our team of 70 experts brings unparalleled skills and knowledge to every project.",
//   },
// ];

const FeatureSection = () => {
  return (
    <div className='container '>
      <div className='row    py-5'>
        <div className='col-lg-6 col-md-8   justify-content-center d-flex'>
          <img
            src='./image2.jpg'
            className='img-fluid rounded-2 '
            style={{ width: "550px", objectFit:"cover" }}
            alt=''
          />
        </div>
        <div className='col-lg-6 py-5'>
          <h3 className='mb-3 position-relative'>
            Welcome to MIDLINE Media Solution
          </h3>
          <p>
            Midline Media Solutions, founded in 2020, has rapidly evolved into a
            versatile and forward-thinking organization dedicated to empowering
            businesses across various industries. Our team comprises talented
            professionals from diverse backgrounds, enabling us to offer
            comprehensive solutions designed to meet the unique needs of our
            clients. This commitment to delivering customized solutions has
            fueled our growth and solidified our position as a leading call
            center in Nagpur.
          </p>
          <br />
          <button className='button'>
            <Link to='/services'>Know More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
