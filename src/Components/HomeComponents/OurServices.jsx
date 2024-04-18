import React from "react";

const OurServices = () => {
  return (

    <div className='container  my-5'  data-aos="zoom-in">
        <h2 className='text-center mb-4 px-2'>Our Services</h2>
        <h4 className='mb-4 text-center px-2'>What We Offer</h4>
        <br />
      <div className='row '>
        <div className='col-lg-6  mb-5  order-lg-1'>
            <div style={{ textAlign: "justify" }} className='mb-5'>
              <h3  style={{ width: "max-content" }}>
                Cold Calling
              </h3>

              <p>
                Cold calling is a technique we use where a salesperson contacts
                individuals or businesses who have not previously expressed
                interest in the product or service. The term "cold" refers to
                the fact that the salesperson has no prior relationship with the
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
                processes. It involves scheduling meetings or appointments
                between sales representatives and potential clients or leads.
                This process is essential for initiating face-to-face
                interactions, virtual meetings, or phone calls where sales
                representatives can present their products or services,
                understand the needs of the potential client, and ultimately
                move them further along the sales pipeline.
              </p>
            </div>
        </div>
        <div className='col-lg-5 mb-3 order-1 align-content-center text-center justify-content-center'>
          <div className='feature-img-bg'>
            <img
              className='img-fluid'
              src='/images/h2.jpg'
              alt='feature-image'
              style={{ width: "500px" }}
            />
          </div>
        </div>
      </div>
      {/* second */}
      <div className='row data-aos="flip-up" '>
        <div className='col-lg-5 order-lg-1 order-2 '>
          <div className='feature-img-bg '>
            <img
              className='img-fluid '
              src='/images/h1.jpg'
              alt='feature-image'
              style={{ width: "500px" }}
            />
          </div>
        </div>
        <div className='col-lg-6 pr-lg-0 order-lg-2 order-1 mb-5 mb-lg-0 '>
          <ul className='list-unstyled'>
            <li className='d-flex align-items-center '>
              <div style={{ textAlign: "justify" }} className='mb-5'>
                <h3>Lead Generation</h3>
                <p>
                 Lead generation is the process of identifying and attracting
                  potential customers, or <b>"leads"</b>  who have shown interest in a
                  company's products or services. The goal of lead generation is
                  to gather contact information and other relevant details about
                  individuals or organizations that are likely to become
                  customers.
                </p>
                <ul className="list-unstyled ">
                  <li>Content Marketing</li>
                  <li>Social Media Marketing</li>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Email Marketing</li>
                  <li>Paid Advertising</li>
                  <li>Networking and Referrals</li>
                </ul>
              </div>
            </li>
            <li className='d-flex align-items-center mb-5  text-center justify-content-center'>
              <div className='text-center md-5'></div>
              <div style={{ textAlign: "justify" }}>
                <h3>Customer Service</h3>
                <span>
                  Customer service refers to the assistance and support provided
                  to customers before, during, and after they purchase a product
                  or service. It encompasses a wide range of activities and
                  interactions aimed at ensuring customer satisfaction,
                  resolving issues, and building positive relationships with
                  customers.
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
