// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaUsersGear } from "react-icons/fa6";
import { MdLeaderboard } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useEffect } from "react";
const serviceData = [
  {
    icon: <RiCustomerService2Line />,
    title: "Cold Calling",
    description: `Cold calling is a sales technique where a salesperson makes unsolicited calls to
    prospective customers with whom they have had no prior contact. The term "cold"
    refers to the fact that the salesperson is reaching out to individuals who are not
    expecting their call and may not have any prior knowledge of the product or service
    being offered.
    The purpose of cold calling is to generate leads, initiate sales conversations, and
    ultimately, secure appointments or sales. It's often used by businesses to expand their
    customer base, promote new products or services, or reach out to specific target
    markets.`,
  },

  {
    icon: <FaUsersGear />,
    title: "Appointment setting",
    description: `Appointment setting is the process we use for arranging meetings or appointments
    between a salesperson or representative and a potential client or prospect. It's a
    crucial step in the sales process, as it allows sales professionals to connect with
    leads and move them further down the sales funnel.
    It's a fundamental part of many sales and marketing strategies, particularly in
industries where face-to-face interactions or personalized consultations are
necessary for closing deals.
    `,
  },
  {
    icon: <MdLeaderboard />,
    title: "Lead Generation",
    description: `Lead generation is the process of identifying and attracting potential customers, or 
    "leads," who have shown interest in a company's products or services. The goal of lead generation is 
    to gather contact information and other relevant details about individuals or organizations that are 
    likely to become customers. Effective lead generation strategies typically involve a combination of these
     methods tailored to the target audience and the specific goals of the business. Once leads are generated,
     they can be further nurtured through lead nurturing campaigns aimed at moving them through the sales funnel
      until they are ready to make a purchase.`,
  },
  {
    icon: <TfiStatsUp />,
    title: "Sales ",
    description: `Sales refers to the process of persuading, convincing, and ultimately securing commitments 
    from potential customers to purchase products or services offered by a business. It involves a series of
     interactions and activities aimed at identifying, attracting, engaging, and converting leads into paying
      customers.Customer service can be delivered through various channels, including in-person interactions,
       phone calls, emails, live chat, social media, and self-service portals. Companies that prioritize excellent 
       customer service often see higher customer satisfaction levels, increased customer loyalty, and positive
        word-of-mouth recommendations, which can contribute to long-term business success.`,
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
            className='col-lg-6  col-sm-6 mb-4  p-5'
          >
            <div className='bg-white py-5 px-4 h-100 text-center shadow transition hover-bg-dark'>
              <div className='icon-bg mb-4 water-wave '>
                <i className='icon '>{item.icon}</i>
              </div>
              <h4 className='mb-4'>{item.title}</h4>
              <p style={{ textAlign: "justify" }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
