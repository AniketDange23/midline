import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useEffect } from "react";

const ContactInfo = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  const contactInfoData = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Address",
      items: [
        "Opposite Bank of Baroda, Ward Number 3, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra 440022",
      ],
    },
    {
      icon: <MdPhoneInTalk />,
      title: "Phone Number",
      items: ["+91 8668681466", "+91 8956101181"],
    },
    {
      icon: <FaEnvelope />,
      title: "Message Us",
      items: ["sales@elioratechno.com"],
    },
  ];

  return (
    <div className='container py-5' data-aos='zoom-in-left'>
      <div className='row'>
        {contactInfoData.map((info, index) => (
          <div key={index} className='col-md-4 mb-2 mb-md-0'>
            <div className='bg-gray shadow h-100 text-center py-5 px-md-1 px-lg-0'>
              <div className='text-primary icon-lg mb-2'>{info.icon}</div>
              <h4 className='mb-2'>{info.title}</h4>
              <ul className='list-unstyled'>
                {info.items.map((item, i) => (
                  <li key={i}>
                    {info.title === "Message Us" &&
                    info.items.length === 2 &&
                    i === 0 ? (
                      <a href={`mailto:${item}`}>{item}</a>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
