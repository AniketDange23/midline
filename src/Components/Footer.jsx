import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,

} from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div className="py-5 px-2 g-0 bg-secondary">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <a className="mb-4 d-inline-block LogoImage" href="#">
                <img className="img-fluid" src="/logo1.png" alt="" />
              </a>
              <p className="text-light">
                Midline is a leading provider of business process outsourcing
                solutions, streamline operations and customer satisfaction.
              </p>

              <h4 className="text-white mb-4">Follow Us On</h4>
              <ul className="list-inline social-icon-alt">
                <li className="list-inline-item">
                  <a className="hover-ripple" href="#">
                    <FaFacebook style={{ fontSize: "22px" }} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="hover-ripple" href="#">
                    <FaInstagram style={{ fontSize: "22px" }} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="hover-ripple" href="#">
                    <FaLinkedin style={{ fontSize: "22px" }} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6 mb-5">
                  <h4 className="text-white mb-4">Services</h4>
                  <ul className="list-unstyled ">
                    <li className="mb-3 text-light">
                      <a className="text-light d-block" href="/">
                        <IoMdArrowDropright style={{ marginRight: "2px" }} />
                        Home
                      </a>
                    </li>
                    <li className="mb-3 text-light">
                      <a className="text-light d-block" href="/about">
                        <IoMdArrowDropright style={{ marginRight: "2px" }} />
                        About
                      </a>
                    </li><li className="mb-3 text-light">
                      <a className="text-light d-block" href="/services">
                        <IoMdArrowDropright style={{ marginRight: "2px" }} />
                        Services
                      </a>
                    </li><li className="mb-3 text-light">
                      <a className="text-light d-block" href="/healthproject">
                        <IoMdArrowDropright style={{ marginRight: "2px" }} />
                        Projects
                      </a>
                    </li><li className="mb-3 text-light">
                      <a className="text-light d-block" href="/contact">
                        <IoMdArrowDropright style={{ marginRight: "2px" }} />
                        Contact
                      </a>
                    </li>
                    {/* Add other service links */}
                  </ul>
                </div>
                <div className="col-md-6 mb-5">
                  <h4 className="text-white mb-4">Contact Info</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3 text-light">
                      <a className="text-light d-block" href="#">
                        <IoLocationOutline /> Opposite Bank of Baroda, Ward
                        Number 3, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra
                        440022
                      </a>
                    </li>
                    {/* Add other contact info */}
                  </ul>
                </div>
                <div className="col-12">
                  <h4 className="text-white mb-4">Contact Us</h4>
                  <form action="#">
                    <div className="position-relative d-flex ">
                      <input
                        type="email"
                        className="form-control border-0 text-white newsletter-form mx-3"
                        name="newsletter"
                        placeholder="Enter your email"
                      />
                      <button type="submit" className="button">
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
      <div className="bg-secondary-darken py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="mb-0 text-white">
                <span className="text-primary">Eliora Pvt. Ltd</span> ©{" "}
                <script>
                  var CurrentYear = new Date().getFullYear();
                  document.write(CurrentYear);
                </script>{" "}
                2024 All Right Reserved
              </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <ul className="list-inline">
                <li className="list-inline-item mx-0">
                  <a
                    className="d-inline-block px-3 text-white border-right"
                    href="#"
                  >
                    Terms of Service
                  </a>
                </li>
                <li className="list-inline-item mx-0">
                  <a className="d-inline-block px-3 text-white" href="#">
                    Privacy Policy
                  </a>
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
