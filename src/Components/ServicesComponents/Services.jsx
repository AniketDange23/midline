// eslint-disable-next-line no-unused-vars
import React from 'react';
import { RiCustomerService2Line } from "react-icons/ri";
import { FaUsersGear } from "react-icons/fa6";
import { MdLeaderboard } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
const serviceData = [
  {
    icon: <RiCustomerService2Line/>,
    title: "Cold Calling",
    description: "Cold calling is a technique we use where a salesperson contacts individuals or businesses who have not previously expressed interest in the product or service. The term cold refers to the fact that the salesperson has no prior relationship with the prospect and is initiating contact without any warm introduction or existing connection"},
 
  {
    icon: <FaUsersGear/>,
    title: "Appointment setting",
    description: "Appointment setting can be done through various channels, including cold calling, email outreach, social media messaging, and networking events. It requires effective communication skills, persistence, and the ability to qualify leads to ensure that the scheduled appointments have a high likelihood of converting into sales opportunities."
  },
   {
    icon: <MdLeaderboard/>,
    title: "Lead Generation",
    description: `Lead generation is the process of identifying and attracting potential customers, or "leads," who have shown interest in a company's products or services. The goal of lead generation is to gather contact information and other relevant details about individuals or organizations that are likely to become customers.`
  },
  {
    icon: <TfiStatsUp/>,
    title: "Sales ",
    description: "Sales refers to the process of persuading, convincing, and ultimately securing commitments from potential customers to purchase products or services offered by a business. It involves a series of interactions and activities aimed at identifying, attracting, engaging, and converting leads into paying customers."
  }
];

const Services = () => {
  return (
    <section className="section bg-gray service-bg-dots">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title-border border-center"></div>
            <h2 className="section-title">Best Services We Provide</h2>
          </div>
        </div>
        <div className="row">
          {serviceData.map((item, index) => (
            <div key={index} className="col-xl-6 col-lg-4 col-sm-6 mb-4 ">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave">
                  <i className='icon'>{item.icon}</i>

                </div>
                <h4 className="mb-4">{item.title}</h4>
                <p style={{ textAlign: "justify" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
