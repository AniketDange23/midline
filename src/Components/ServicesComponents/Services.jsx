// eslint-disable-next-line no-unused-vars
import React from 'react';
import { RiCustomerService2Line } from "react-icons/ri";
import { FaUsersGear } from "react-icons/fa6";
import { MdLeaderboard } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
const serviceData = [
  {
    icon: <RiCustomerService2Line />,
    title: "Cold Calling",
    description: `Cold calling is a technique we use where a salesperson contacts individuals or businesses who have not previously expressed interest in the product or service. The term cold refers to the fact that the salesperson has no prior relationship with the prospect and is initiating contact without any warm introduction or existing connection.
    Cold calling typically involves the salesperson reaching out via phone calls, although it can also include other methods such as emails or direct mail. The goal of cold calling is to introduce the product or service, generate interest, and ultimately persuade the prospect to make a purchase or take some other desired action, such as scheduling a meeting or requesting more information.`},

  {
    icon: <FaUsersGear />,
    title: "Appointment setting",
    description: `Appointment setting is a crucial aspect of sales and marketing processes. It involves scheduling meetings or appointments between sales representatives and potential clients or leads. This process is essential for initiating face-to-face interactions, virtual meetings, or phone calls where sales representatives can present their products or services, understand the needs of the potential client, and ultimately move them further along the sales pipeline.
    Appointment setting can be done through various channels, including cold calling, email outreach, social media messaging, and networking events. It requires effective communication skills, persistence, and the ability to qualify leads to ensure that the scheduled appointments have a high likelihood of converting into sales opportunities.
    `
  },
  {
    icon: <MdLeaderboard />,
    title: "Lead Generation",
    description: `Lead generation is the process of identifying and attracting potential customers, or "leads," who have shown interest in a company's products or services. The goal of lead generation is to gather contact information and other relevant details about individuals or organizations that are likely to become customers. Effective lead generation strategies typically involve a combination of these methods tailored to the target audience and the specific goals of the business. Once leads are generated, they can be further nurtured through lead nurturing campaigns aimed at moving them through the sales funnel until they are ready to make a purchase.`
  },
  {
    icon: <TfiStatsUp />,
    title: "Sales ",
    description: `Sales refers to the process of persuading, convincing, and ultimately securing commitments from potential customers to purchase products or services offered by a business. It involves a series of interactions and activities aimed at identifying, attracting, engaging, and converting leads into paying customers.Customer service can be delivered through various channels, including in-person interactions, phone calls, emails, live chat, social media, and self-service portals. Companies that prioritize excellent customer service often see higher customer satisfaction levels, increased customer loyalty, and positive word-of-mouth recommendations, which can contribute to long-term business success.`
  }
];

const Services = () => {
  return (
      <div className="container-fluid  bg-gray">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="py-5">Best Services We Provide</h3>
          </div>
        </div>
        <div className="row">
          {serviceData.map((item, index) => (
            <div key={index} className="col-xl-6 col-lg-4 col-sm-6 mb-4 ">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave ">
                  <i className='icon '>{item.icon}</i>

                </div>
                <h4 className="mb-4">{item.title}</h4>
                <p style={{ textAlign: "justify" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Services;
