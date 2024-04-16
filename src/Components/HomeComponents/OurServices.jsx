const OurServices = () => {
  return (
    <div className='container  g-0  my-5'>
      <div>
        <h3 className='text-center mb-4 px-2'>Our Services</h3>
        <h4  className=' mb-4  text-center px-2'>What We Offer</h4>
      </div>
      <div className='row'>
        <div className='col-lg-6 o order-lg-1  align-content-center text-center justify-content-center'>
          <ul className='list-unstyled'>
              <div style={{ textAlign: "justify" }}>
                <h4>Cold Calling</h4>
               <p>
                Cold calling is a technique we use where a salesperson contacts
                individuals or businesses who have not previously expressed
                interest in the product or service. The term "cold" refers to
                the fact that the salesperson has no prior relationship with the
                prospect and is initiating contact without any warm introduction
                or existing connection.
               </p> 
              </div>
            <li className='d-flex align-items-center mb-5'>
              <div style={{ textAlign: "justify" }}>
                <h4>Appointment setting</h4>
              <span>
              Appointment setting is a crucial aspect of sales and marketing
                processes. It involves scheduling meetings or appointments
                between sales representatives and potential clients or leads.
                This process is essential for initiating face-to-face
                interactions, virtual meetings, or phone calls where sales
                representatives can present their products or services,
                understand the needs of the potential client, and ultimately
                move them further along the sales pipeline{" "}
              </span>
                
              </div>
            </li>
          </ul>
        </div>
        <div className='col-lg-6  order-1'>
          <div className='feature-img-bg box-shadow '>
            <img
              className='img-fluid w-100 rounded-5'
              src='/images/h2.jpg'
              alt='feature-image'
            />
          </div>
        </div>
      </div>
      {/* second */}
      <div className='row py-5'>
        <div className='col-lg-6 order-lg-1 order-2'>
          <div className='feature-img-bg box-shadow '>
            <img
              className='img-fluid w-100 rounded-5'
              src='/images/h1.jpg'
              alt='feature-image'
            />
          </div>
        </div>
        <div className='col-lg-6 pr-lg-0 order-lg-2 order-1 mb-5 mb-lg-0'>
          <ul className='list-unstyled'>
            <li className='d-flex align-items-center mb-5'>
              <div className='text-center mb-2'></div>
              <div style={{ textAlign: "justify" }}>
                <h4>Lead Generation</h4>
              <p> Lead generation is the process of
                identifying and attracting potential customers, or "leads," who
                have shown interest in a company's products or services. The
                goal of lead generation is to gather contact information and
                other relevant details about individuals or organizations that
                are likely to become customers.</p> 
                <li> - Content Marketing</li>
                <li>- Social Media Marketing</li>
                <li>- Search Engine Optimization (SEO)</li>
                <li>- Email Marketing</li>
                <li>- Paid Advertising</li>
                <li>- Networking and Referrals</li>
              </div>
            </li>
            <li className='d-flex align-items-center mb-5'>
              <div className='text-center md-2'></div>
              <div style={{ textAlign: "justify" }}>
                <h4>Customer service </h4>
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
