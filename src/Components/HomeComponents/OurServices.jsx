import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const OurServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='container-fluid  my-5'>
      <h2 className='text-center mb-4 px-2'>Our Services</h2>
      <h4 className='mb-4 text-center px-2'>What We Offer</h4>
      <br />
      <div
        className='row align-content-center text-center justify-content-center  '
        data-aos='fade-down'
      >
        <div className='col-lg-6  mb-5   order-lg-1 '>
          <div className='box  mb-4 p-3 shadow'>
            <div style={{ textAlign: "justify" }}>
              <h4 style={{ width: "max-content" }} className="mb-3">Cold Calling</h4>

              <p>
                Cold calling is a sales technique where a salesperson makes
                unsolicited calls to prospective customers with whom they have
                had no prior contact. The term "cold" refers to the fact that
                the salesperson is reaching out to individuals who are not
                expecting their call and may not have any prior knowledge of the
                product or service being offered. The purpose of cold calling is
                to generate leads, initiate sales conversations, and ultimately
                secure appointments or sales. Businesses actively use SEO to
                expand their customer base, promote new products or services,
                and reach out to specific target markets.
              </p>
            </div>
          </div>
          <div style={{ textAlign: "justify" }} className='mb-5 p-3 shadow box'>
            <div>
              <h4 className='mb-3'>Appointment setting</h4>
            </div>

            <p>
              Appointment setting is the process we use for arranging meetings
              or appointments between a salesperson or representative and a
              potential client or prospect. It's a crucial step in the sales
              process, as it allows sales professionals to connect with leads
              and move them further down the sales funnel. It's a fundamental
              part of many sales and marketing strategies, particularly in
              industries where face-to-face interactions or personalized
              consultations are necessary for closing deals.
            </p>
          </div>
        </div>
        <div className='col-lg-5 mb-3 h-100   order-1 '>
          <div className='feature-img-bg  '>
            <img
              className='img-fluid shadow rounded-3'
              src='/images/h2.jpg'
              alt='feature-image'
              style={{ width: "500px" }}
            />
          </div>
        </div>
      </div>
      {/* second */}
      <div
        className='row  align-content-center text-center justify-content-center'
        data-aos='fade-down'
      >
        <div className='col-lg-5 order-lg-1 order-2  '>
          <div className='feature-img-bg mt-3'>
            <img
              className='img-fluid shadow rounded-3 '
              src='/images/h1.jpg'
              alt='feature-image'
              style={{ width: "600px" }}
            />
          </div>
        </div>
        <div className='col-lg-6  order-lg-2 order-1  '>
          <div style={{ textAlign: "justify" }} className='mb-4 shadow p-3 box'>
            <h4 className="mb-3"> CUSTOMER SERVICES</h4>
            <p>
              Customer service refers to the assistance and support provided to
              customers before, during, and after they purchase a product or
              service. It encompasses a wide range of activities and
              interactions aimed at ensuring customer satisfaction and fostering
              positive relationships between customers and a business or
              organization. Excellent customer service is essential for
              businesses to attract and retain customers, differentiate
              themselves from competitors, and build a strong reputation for
              quality and reliability. It plays a crucial role in enhancing the
              overall customer experience and driving long-term success.
            </p>
          </div>
          <div className='text-center md-3 p-3 shadow box'>
            <div style={{ textAlign: "justify" }}>
              <h4 className="mb-3">Sales</h4>
              <span>
                Sales refers to the process of persuading, convincing, and
                ultimately securing commitments from potential customers to
                purchase products or services offered by a business. It involves
                a series of interactions and activities aimed at identifying,
                attracting, engaging, and converting leads into paying
                customers. Customer service can be delivered through various
                channels, including in-person interactions, phone calls, emails,
                live chat, social media, and self-service portals. Companies
                prioritizing excellent customer service often see higher
                customer satisfaction levels, increased customer loyalty, and
                positive word-of-mouth recommendations, which can contribute to
                long-term business success.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
