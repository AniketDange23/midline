import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md"; 



const ContactInfo = () => {
  const contactInfoData = [
    { icon: <FaMapMarkerAlt />, title: 'Our Address', items: ['Opposite Bank of Baroda, Ward Number 3, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra 440022'] },
    { icon: <MdPhoneInTalk />, title: 'Phone Number', items: ['+91 8668681466', '+91 8956101181']},
    { icon: <FaEnvelope />, title: 'Message Us', items: ['info@elioratechno', 'sales@elioratechno.com'] }
  ];

  return (
    <section className="section pb-0">
      <div className="container">
        <div className="row">
          {contactInfoData.map((info, index) => (
            <div key={index} className="col-md-4 mb-4 mb-md-0">
              <div className="bg-white shadow h-100 text-center p-5 px-md-2 px-lg-5">
                <div className="text-primary icon-lg mb-4">{info.icon}</div>
                <h4 className="mb-4">{info.title}</h4>
                <ul className="list-unstyled">
                  {info.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
