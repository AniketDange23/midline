import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const OurServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='container  my-5'>
      <h2 className='text-center mb-4 px-2' data-aos='fade-down'>
        Our Services
      </h2>
      <h4 className='mb-4 text-center px-2'>What We Offer</h4>
      <br />
      <div className='row align-content-center text-center justify-content-center  ' data-aos='fade-down' >
        <div className='col-lg-6  mb-5 px-5  order-lg-1 bg-gray'>
          <div style={{ textAlign: "justify" }} className='mb-5'>
            <h3 style={{ width: "max-content" }}>Cold Calling</h3>

            <p>
              Cold calling is a technique we use where a salesperson contacts
              individuals or businesses who have not previously expressed
              interest in the product or service. The term "cold" refers to the
              fact that the salesperson has no prior relationship with the
              prospect and is initiating contact without any warm introduction
              or existing connection.
            </p>
          </div>
          <div style={{ textAlign: "justify" }} className='mb-5'>
            <div>
              <h3 className='mb-3'>Appointment setting</h3>
            </div>

            <p>
              Appointment setting is a crucial aspect of sales and marketing
              processes. It involves scheduling meetings or appointments between
              sales representatives and potential clients or leads. This process
              is essential for initiating face-to-face interactions, virtual
              meetings, or phone calls where sales representatives can present
              their products or services, understand the needs of the potential
              client, and ultimately move them further along the sales pipeline.
            </p>
          </div>
        </div>
        <div className='col-lg-5 mb-3  py-2  order-1 '>
          <div className='feature-img-bg '>
            <img
              className='img-fluid'
              src='/images/h2.jpg'
              alt='feature-image'
              style={{ width: "450px" }}
            />
          </div>
        </div>
      </div>
      {/* second */}
      <div
        className='row  d-flex justify-content-around align-content-center text-center py-4 '
        data-aos='fade-down'
      >
        <div className='col-lg-5 order-lg-1 order-2  '>
          <div className='feature-img-bg mt-5 '>
            <img
              className='img-fluid '
              src='/images/h1.jpg'
              alt='feature-image'
              style={{ width: "800px" }}
            />
          </div>
        </div>
        <div className='col-lg-6  order-lg-2 order-1 mb-3 px-5 bg-gray'>
          <ul className='list-unstyled'>
            <li className='d-flex align-items-center '>
              <div style={{ textAlign: "justify" }} className='mb-5'>
                <h3> CUSTOMER SERVICES</h3>
                <p>
                  Customer service refers to the assistance and support provided
                  to customers before, during, and after they purchase a product
                  or service. It encompasses a wide range of activities and
                  interactions aimed at ensuring customer satisfaction and
                  fostering positive relationships between customers and a
                  business or organization. Excellent customer service is
                  essential for businesses to attract and retain customers,
                  differentiate themselves from competitors, and build a strong
                  reputation for quality and reliability.
                </p>
              </div>
            </li>
            <li className='d-flex align-items-center mb-5  text-center justify-content-center'>
              <div className='text-center md-5'></div>
              <div style={{ textAlign: "justify" }}>
                <h3>Sales</h3>
                <span>
                  Sales refers to the process of persuading, convincing, and
                  ultimately securing commitments from potential customers to
                  purchase products or services offered by a business. It
                  involves a series of interactions and activities aimed at
                  identifying, attracting, engaging, and converting leads into
                  paying customers. Customer service can be delivered through
                  various channels, including in-person interactions, phone
                  calls, emails, live chat, social media, and self-service
                  portals.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
