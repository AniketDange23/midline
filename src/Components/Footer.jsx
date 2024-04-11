import { FaFacebook, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdOutlineArrowRight } from "react-icons/md";// import "./Footer.css";
import { HiPhone } from "react-icons/hi";
const Footer = () => {
  return (
    <footer>
      <div className="section bg-secondary">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <a className="mb-4 d-inline-block LogoImage" href="#"><img className="img-fluid" src="/footer.png" alt="" /></a>
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
                  <ul >
                    <li className="mb-3 " style={{ padding: "0" }}><a href="/" className='text-light '> <MdOutlineArrowRight />Home</a></li>
                    <li className="mb-3 " style={{ padding: "0" }}><a href="/about" className='text-light'> <MdOutlineArrowRight/>About</a></li>
                    <li className="mb-3 " style={{ padding: "0" }}><a href="/services" className='text-light'> <MdOutlineArrowRight/>Services</a></li>
                    <li className="mb-3 " style={{ padding: "0" }}><a href="/projects" className='text-light'> <MdOutlineArrowRight/>Projects</a></li>
                    <li className="mb-3 " style={{ padding: "0" }}><a href="/contact" className='text-light'> <MdOutlineArrowRight/>Contact</a></li>

                    
                  </ul>
                </div>
                <div className="col-6 mb-5">
                  <h4 className="text-white mb-4">Contact Info</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3 text-light" style={{ padding: "0" }}><a className="text-light d-block" href="#"> <FaMapMarkerAlt/> Opposite Bank of Baroda, Ward Number 3, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra 440022 </a></li>
                    <li className="mb-3 text-light" style={{ padding: "0" }}><a className="text-light d-block" href="#"> <HiPhone/> +91 8668681466</a></li>
                    <li className="mb-3 text-light" style={{ padding: "0" }}><a className="text-light d-block" href="#"> <FaEnvelope/> info@elioratechno</a></li>
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
