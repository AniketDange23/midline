
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useEffect } from "react";
import { RiPhoneLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiDollarCircle } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const serviceData = [
  {
    title: "COLD CALLING",
    description: `Cold calling is a sales technique where a salesperson makes unsolicited calls to prospective customers with whom they have had no prior contact. The term "cold" refers to the fact that the salesperson is reaching out to individuals who are not expecting their call and may not have any prior knowledge of the product or service being offered. The purpose of cold calling is to generate leads, initiate sales conversations, and ultimately secure appointments or sales. Businesses actively use SEO to expand their customer base, promote new products or services, and reach out to specific target markets.`,
    icon: <RiPhoneLine />,
  },
  {
    title: "APPOINTMENT SETTING",
    description: `Appointment setting is the process we use for arranging meetings or appointments between a salesperson or representative and a potential client or prospect. It's a crucial step in the sales process, as it allows sales professionals to connect with leads and move them further down the sales funnel. It's a fundamental part of many sales and marketing strategies, particularly in industries where face-to-face interactions or personalized consultations are necessary for closing deals.`,
    icon: <AiOutlineCalendar />,
  },
  {
    title: "SALES",
    description: `Sales refers to the process of persuading, convincing, and ultimately securing commitments from potential customers to purchase products or services offered by a business. It involves a series of interactions and activities aimed at identifying, attracting, engaging, and converting leads into paying customers. Customer service can be delivered through various channels, including in-person interactions, phone calls, emails, live chat, social media, and self-service portals. Companies prioritizing excellent customer service often see higher customer satisfaction levels, increased customer loyalty, and positive word-of-mouth recommendations, which can contribute to long-term business success.`,
    icon: <BiDollarCircle />,
  },
  {
    title: "CUSTOMER SERVICES",
    description: `Customer service refers to the assistance and support provided to customers before, during, and after they purchase a product or service. It encompasses a wide range of activities and interactions aimed at ensuring customer satisfaction and fostering positive relationships between customers and a business or organization. Excellent customer service is essential for businesses to attract and retain customers, differentiate themselves from competitors, and build a strong reputation for quality and reliability. It plays a crucial role in enhancing the overall customer experience and driving long-term success.`,
    icon: <FaUserAlt />,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div className='container-fluid  bg-gray'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h3 className='py-5'>Best Services We Provide</h3>
        </div>
      </div>
      <div className='row'>
        {serviceData.map((item, index) => (
          <div
            key={index}
            data-aos='fade-right'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
            className='col-lg-6  col-sm-6 mb-4  px-4 '
          >
            <div className='bg-white py-5 px-4 h-100 text-center shadow transition hover-bg-dark rounded-3'>
              <div className='icon-bg mb-4 water-wave '>
                <i className='icon '>{item.icon}</i>
              </div>
              <div className="px-4">
                 <h4 className='mb-4'>{item.title}</h4>
              <p style={{ textAlign: "justify" }}>{item.description}</p>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
