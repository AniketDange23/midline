import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaUsersCog } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { MdGroup } from "react-icons/md";

const serviceData = [
  {
    icon: <BiSupport />,
    title: "Call Center Management",
    description: `Call center management involves overseeing the daily operations of a call center, with the objective of ensuring seamless functioning of the center, meeting customer service expectations, and managing costs. A call center manager handles various tasks, including staffing, scheduling, quality assurance, and performance monitoring. Effective call center management requires a multifaceted approach, which involves strategic planning, allocation of resources, and continuous improvement initiatives. By optimizing operational efficiency, enhancing customer `,
  },

  {
    icon: <FaUsersCog />,
    title: "Servicing Multiple Domains",
    description:`When you host and manage multiple websites on a single server or hosting account, you can confidently simplify your online presence and provide service for multiple domains. This approach is a highly cost-effective and efficient solution for individuals and businesses that manage multiple brands, projects, or online initiatives. It helps to reduce the costs of running multiple servers and simplifies the management process by having everything in one place. With this approach, you can confidently focus on growing your business and online presence without worrying about the technical details of managing multiple domains.`
  },
  {
    icon: <MdGroup />,
    title: "Highly Professional Staff",
    description: ` hosting and administering multiple websites on a single server or hosting account, you can easily manage your online presence and provide service for multiple domains. This approach is a highly cost-effective and efficient solution for individuals and businesses that manage multiple brands, projects, or online initiatives. It helps to reduce the costs of running multiple servers and simplifies the management process by having everything in one place. With this approach, you can confidently focus on growing your business and online presence without worrying about the technical details of managing multiple domains.`,
  },
  {
    icon: <MdVerifiedUser />,
    title: "100% Satisfaction Guarantee",
    description: `When you host and manage multiple websites on a single server or hosting account, you can keep things simple and provide service for multiple domains. This is a smart and efficient solution for people and businesses who manage multiple brands, projects, or online initiatives. It saves you money and simplifies the management process by having everything in one place. You don't need to worry about all the technical details of managing multiple domains, so you can focus on what's important - growing your business and online presence.`,
  },
];

const AboutCards = () => {
  return (
    <section className='section bg-gray' id='about-us'>
      <div className='container'>
        <div className='row '>
          <div className='text-center py-5'>
            <h3>Expert in Call Center Services</h3>
          </div>
          {serviceData.map((item, index) => (
            <div
              key={index}
              className='col-xl-6 col-lg-4 col-sm-6 mb-4'
              data-aos='fade-right'
            >
              <div className='bg-white py-5 px-4 h-100 text-center shadow rounded-4'>
                <div className='icon-bg icon mb-4 water-wave '>{item.icon}</div>
                <h4 className='mb-4'>{item.title}</h4>
                <p style={{ textAlign: "justify" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
