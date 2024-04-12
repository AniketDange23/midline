import { FaFacebook, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="section bg-secondary">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <a className="mb-4 d-inline-block LogoImage" href="#"><img className="img-fluid" src="/footerlogo.png" alt="" /></a>
              <p className="text-light">Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt ut
                labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamaboris nisi ut aliquip.exea
                commodo consequat. Duis aute irure dolor in reprehenderit.</p>
              <p className="text-light mb-5">Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem.</p>
              <h4 className="text-white mb-4">Follow Us On</h4>
              <ul className="list-inline social-icon-alt">
                <li className="list-inline-item">
                  <a className="hover-ripple" href="#"><FaFacebook /></a>
                </li>
                <li className="list-inline-item">
                  <a className="hover-ripple" href="#"><FaInstagram /></a>
                </li>
                <li className="list-inline-item">
                  <a className="hover-ripple" href="#"><FaLinkedin /></a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6 mb-5">
                  <h4 className="text-white mb-4">Services</h4>
                  <ul className="list-styled">
                    <li className="mb-3 text-light" style={{ padding: "0" }}>
                    <a className="text-light d-block" href="/"><IoMdArrowDropright style={{ fontSize: "20px", marginRight: "2px" }} />Home</a></li>
                    <li className="mb-3 text-light" style={{ padding: "0" }}>
                    <a className="text-light d-block" href="/contact"><IoMdArrowDropright style={{ fontSize: "20px", marginRight: "2px" }} />Contact Us</a></li>
                    <li className="mb-3 text-light" style={{ padding: "0" }}>
                    <a className="text-light d-block" href="/about"><IoMdArrowDropright style={{ fontSize: "20px", marginRight: "2px" }} />About Us</a></li>
                    <li className="mb-3 text-light" style={{ padding: "0" }}>
                    <a className="text-light d-block" href="/services"><IoMdArrowDropright style={{ fontSize: "20px", marginRight: "2px" }} />Services</a></li>
                    <li className="mb-3 text-light" style={{ padding: "0" }}>
                    <a className="text-light d-block" href="/healthproject"><IoMdArrowDropright style={{ fontSize: "20px", marginRight: "2px" }} />Projects</a></li>
                  </ul>
                </div>
                <div className="col-6 mb-5">
                  <h4 className="text-white mb-4">Contact Info</h4>
                  <ul className="list-unstyled ">
                    <li className="mb-3 text-light" style={{ padding: "0" }}>
                    <a className="text-light d-block" href="#"> <IoLocationOutline /> Opposite Bank of Baroda, Ward Number 3, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra 440022 </a></li>
                    <li className="mb-3 text-light" style={{ padding: "0" }}>
                    <a className="text-light d-block" href="callto:+91 8956101181"><FiPhone/> +91 8668681466</a></li>
                    <li className="mb-3 text-light" style={{ padding: "0" }}>
                    <a className="text-light d-block" href="mailto:info@elioratechno.com"><LuMail/> info@elioratechno</a></li>
                  </ul>
                </div>
                <div className="col-12">
                  <h4 className="text-white mb-4">Contact Us</h4>
                  <form action="#">
                    <div className="position-relative">
                      <input type="email" className="form-control border-0 text-white newsletter-form" id="newsletter" name="newsletter" placeholder="Enter your email" />
                      <button type="submit" className="btn btn-primary btn-subscribe">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary-darken py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="mb-0 text-white"><span className="text-primary">Eliora Pvt. Ltd</span> © <script>
                var CurrentYear = new Date().getFullYear()
                document.write(CurrentYear)
              </script>2024 All Right Reserved</p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <ul className="list-inline">
                <li className="list-inline-item mx-0"><a className="d-inline-block px-3 text-white border-right" href="#">Terms of Service</a></li>
                <li className="list-inline-item mx-0"><a className="d-inline-block px-3 text-white" href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;