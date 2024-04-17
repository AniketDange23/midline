import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-header bg-secondary py-2 pt-2 pb-1 py-2">
      <div className="container">
        <div className="row align-items-center">
          {/* social icons */}
          <div className="col-md-6 text-center text-md-left">
            <span className="text-white">Connect With Us:</span>
            <ul className="list-inline d-inline-block">
            <li className="list-inline-item"><a className="text-white d-inline-block p-2" href="#"><FaFacebookF style={{fontSize:"16px"}}/></a></li>
            <li className="list-inline-item"><a className="text-white d-inline-block p-2" href="#"><FaInstagram style={{fontSize:"16px"}}/></a></li>
            <li className="list-inline-item"><a className="text-white d-inline-block p-2" href="#"><FaLinkedin style={{fontSize:"16px"}}/></a></li>
          </ul>
          </div>
          {/* mail and phone */}
          <div className="col-md-6 text-md-right text-center">
            <ul className="list-inline">
              <li className="list-inline-item mx-0 border-right border-secondary">
                <a className="text-white d-inline-block px-lg-3 px-2" href="mailto:sales@midlinesmedia.com">sales@midlinesmedia.com</a>
              </li>
              <li className="list-inline-item mx-0">
                <a className="text-white d-inline-block px-lg-3 px-2" href="callto:+91 8830826434">
                  Call Us Now: <span className="">+91 8830826434</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
