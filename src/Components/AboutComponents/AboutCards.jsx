// eslint-disable-next-line no-unused-vars
import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaUsersGear } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
const serviceData = [
  {
    icon: <BiSupport />,
    title: "Call Center Management",
    description: `Call center management is the art of managing the day-to-day operations of a call
    center. This involves several tasks aimed at ensuring the smooth functioning of the
    center while meeting customer service goals and keeping business costs in check.
    `,
  },

  {
    icon: <FaUsersGear />,
    title: "Servicing Multiple Domains",
    description: `Servicing Multiple Domains By hosting and administering numerous websites on a single server or hosting account,
    you can streamline your online presence by providing service for multiple domains. This
    approach is a cost-effective and efficient solution for individuals and businesses that
    manage multiple brands, projects, or online initiatives.`,
  },
  {
    icon: <MdGroups2 />,
    title: "Highly Professional Staff",
    description: `Highly professional call center staff are the cornerstone of a positive customer
    experience. They combine exceptional communication abilities, deep product
    knowledge, and a genuine desire to help customers. This unique blend of skills
    empowers them to effectively navigate customer inquiries, troubleshoot problems, and
    foster positive customer relationship`,
  },
  {
    icon: <MdVerifiedUser />,
    title: "100% Satisfaction Guarantee",
    description: ` Midline Media Solution, we value customer satisfaction and strive to provide the best
    solutions to our clients. To ensure our customers are happy with our services, we offer a
    100% satisfaction guarantee. Our professionals establish relationships with customers
    and handle their concerns to increase satisfaction and loyalty. 
    `,
  },
];

const AboutCards = () => {
  return (
    <section className='section bg-gray' id='about-us'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2 className='section-title'>Expert in Call Center Services</h2>
          </div>
        </div>
        <div className='row'>
          {serviceData.map((item, index) => (
            <div key={index} className='col-xl-6 col-lg-4 col-sm-6 mb-4'>
              <div className='bg-white py-5 px-4 text-center shadow'>
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
    </section>
  );
};

export default AboutCards;
