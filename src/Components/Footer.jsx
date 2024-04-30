import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { IoLocationOutline, IoMail } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='py-5 px-2 g-0 '>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-lg-5 mb-5 mb-lg-0'>
              <Link className='mb-4 d-inline-block LogoImage' to='#'>
                <img className='img-fluid' src='/logo1.png' alt='' />
              </Link>
              <p className='text-light'>
                Midline Media Solutions was founded in 2020. Since then, we
                have evolved into a versatile and forward-thinking organization
                dedicated to empowering businesses across various industries.
                Our team consists of talented professionals from diverse
                backgrounds, enabling us to provide comprehensive solutions
                tailored to meet the unique needs of our clients.
              </p>

              <h4 className='text-white mb-4'>Follow Us On</h4>
              <ul className='list-inline social-icon-alt'>
                <li className='list-inline-item'>
                  <Link className='hover-ripple' to='#'>
                    <FaFacebook style={{ fontSize: "22px" }} />
                  </Link>
                </li>
                <li className='list-inline-item'>
                  <Link className='hover-ripple' to='#'>
                    <FaInstagram style={{ fontSize: "22px" }} />
                  </Link>
                </li>
                <li className='list-inline-item'>
                  <Link className='hover-ripple' to='#'>
                    <FaLinkedin style={{ fontSize: "22px" }} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-md-6 mb-5'>
                  <h4 className='text-white mb-4'>Services</h4>
                  <ul className='list-unstyled '>
                    <li className='mb-3 text-light'>
                      <Link className='text-light d-block' to='/'>
                        <IoMdArrowDropright style={{ marginRight: "2px" }} />
                        Home
                      </Link>
                    </li>
                    <li className='mb-3 text-light'>
                      <Link className='text-light d-block' to='/about'>
                        <IoMdArrowDropright style={{ marginRight: "2px" }} />
                        About
                      </Link>
                    </li>
                    <li className='mb-3 text-light'>
                      <Link className='text-light d-block' to='/services'>
                        <IoMdArrowDropright style={{ marginRight: "2px" }} />
                        Services
                      </Link>
                    </li>
                  
                    <li className='mb-3 text-light'>
                      <Link className='text-light d-block' to='/contact'>
                        <IoMdArrowDropright style={{ marginRight: "2px" }} />
                        Contact
                      </Link>
                    </li>
                    {/* Add other service links */}
                  </ul>
                </div>
                <div className='col-md-6 mb-5'>
                  <h4 className='text-white mb-4'>Contact Info</h4>
                  <ul className='list-unstyled'>
                    <li className='mb-3 text-light'>
                      <Link className='text-light d-block' to='#'>
                        <IoLocationOutline /> Opposite Bank of Baroda, Ward
                        Number 3, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra
                        440022
                      </Link>
                    </li>
                    <li className='mb-3 text-light'>
                      <Link
                        className='text-light d-block'
                        to='mailto:sales@midlinesmedia.com'
                      >
                        <IoMail /> sales@midlinesmedia.com
                      </Link>
                    </li>
                    <li className='mb-3 text-light'>
                      <Link
                        className='text-light d-block'
                        to='callto:+91 8830826434'
                      >
                        <MdLocalPhone /> +91 8830826434
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='col-12'>
                  <h4 className='text-white mb-4'>Contact Us</h4>
                  <form action='#'>
                    <div className='position-relative d-flex '>
                      <input
                        type='email'
                        className='form-control border-0 text-black newsletter-form mx-3'
                        name='newsletter'
                        placeholder='Enter your email'
                      />
                      <button type='submit' className='button'>
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black py-2'>
        <div className='container '>
          <div className='row '>
            <div className='col-md-6 text-center  mb-3 mb-md-0 '>
              <p className='mb-0 text-white'>
                <span className='text-primary'>Eliora Pvt. Ltd</span> ©{" "}
                <script>
                  var CurrentYear = new Date().getFullYear();
                  document.write(CurrentYear);
                </script>{" "}
                2024 All Right Reserved
              </p>
            </div>
            <div className='col-md-6 text-center  '>
              <ul className='list-inline'>
                <li className='list-inline-item mx-0'>
                  <Link
                    className='d-inline-block px-3 text-white border-right'
                    to='#'
                  >
                    Terms of Service
                  </Link>
                </li>
                <li className='list-inline-item mx-0'>
                  <Link className='d-inline-block px-3 text-white' to='#'>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
