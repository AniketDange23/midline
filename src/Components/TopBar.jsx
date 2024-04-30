import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
// import "./TopBar.css";
import { MdPhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";


const TopBar = () => {
  return (
    <div className='container-fluid bg-secondary g-0 contact align-content-center '>
      <div className='row ' style={{ margin: "12px" }}>
        {/* social icons */}
        <div className='col-lg-5  '>
          <span className='text-white'>Connect Us:</span>
          <ul className='list-inline d-inline-block'>
            <li className='list-inline-item'>
              <Link className='text-white d-inline-block' to='#'>
                <FaFacebookF style={{ fontSize: "16px" }} />
              </Link>
            </li>
            <li className='list-inline-item'>
              <Link className='text-white d-inline-block p-2' to='#'>
                <FaInstagram style={{ fontSize: "16px" }} />
              </Link>
            </li>
            <li className='list-inline-item'>
              <Link className='text-white d-inline-block p-2' to='#'>
                <FaLinkedin style={{ fontSize: "16px" }} />
              </Link>
            </li>
          </ul>
        </div>
        {/* mail and phone */}
        <div className='col m-lg-2 d-flex  text-center justify-content-end'>
          <ul className='list-inline'>
            <li className='list-inline-item mx-0 border-right border-secondary'>
              <Link
                className='text-white d-inline-block px-lg-3 px-2'
                to='mailto:sales@midlinesmedia.com'
              >
                {" "}
                <IoMail /> sales@midlinesmedia.com
              </Link>
            </li>
            <li className='list-inline-item mx-0'>
              <Link
                className='text-white d-inline-block px-lg-3 px-2'
                to='callto:+91 8830826434'
              >
                <MdPhoneInTalk /> Call Now :{" "}
                <span className=''>+91 8830826434</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
