const OurServices = () => {
  return (
    <section className="section">
      <div className="container-fluid ">
        <div className="row align-items-center ">
          <div className="col-lg-4 offset-lg-2 order-lg-1 order-2">
            <span className="section-title-border"></span>
            <p className="subtitle">OurServices</p>
            <h2 className="section-title">What We Offer</h2>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-5">
                <div className="text-center mr-4">
                  {/* <div className="icon-bg water-wave">
                    <i className="fa fa-snowflake-o icon text-primary"></i>
                  </div> */}
                </div>
                <div style={{textAlign:"justify"}}>
                  <h4>Cold Calling</h4>
                      Cold calling is a technique we use where a salesperson contacts individuals or businesses who have not previously expressed interest in the product or service. The term "cold" refers to the fact that the salesperson has no prior relationship with the prospect and is initiating contact without any warm introduction or existing connection.
                
                <br />Cold calling typically involves the salesperson reaching out via phone calls, although it can also include other methods such as emails or direct mail. The goal of cold calling is to introduce the product or service, generate interest, and ultimately persuade the prospect to make a purchase or take some other desired action, such as scheduling a meeting or requesting more information.</div>
              </li>
              <li className="d-flex align-items-center mb-5">
                <div className="text-center mr-4">
                  {/* <div className="icon-bg water-wave">
                    <i className="fa fa-code icon text-primary"></i>
                  </div> */}
                </div>
                <div style={{textAlign:"justify"}}>
                  <h4>Appointment setting</h4>
                  Appointment setting is a crucial aspect of sales and marketing processes. It involves scheduling meetings or appointments between sales representatives and potential clients or leads. This process is essential for initiating face-to-face interactions, virtual meetings, or phone calls where sales representatives can present their products or services, understand the needs of the potential client, and ultimately move them further along the sales pipeline{" "}
                
                <br />Appointment setting can be done through various channels, including cold calling, email outreach, social media messaging, and networking events. It requires effective communication skills, persistence, and the ability to qualify leads to ensure that the scheduled appointments have a high likelihood of converting into sales opportunities.</div>
              </li>
            </ul>
          </div>
          <div className="col-lg-5 pr-lg-0 order-lg-2 order-1 mb-5  mb-lg-0">
            <div className="feature-img-bg ">
              <img
                className="img-fluid h-100" style={{ width: "600px" }}
                src="/h2.jpg"
                alt="feature-image"
              />
            </div>
          </div>
        </div>
        {/* second */}
        <div className="row align-items-center mt-5">
          <div className="col-lg-4 offset-lg-2 order-lg-1 order-2">
            <div className="feature-img-bg box-shadow ">
              <img
                className="img-fluid w-100 rounded-5"
                src="/h1.jpg"
                alt="feature-image"
              />
            </div>
          </div>
          <div className="col-lg-5 pr-lg-0 order-lg-2 order-1 mb-5 mb-lg-0">
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-5">
                <div className="text-center mr-4">

                </div>
                <div style={{textAlign:"justify"}}>
                  <h4>Lead Generation</h4>Lead generation is the process of identifying and attracting potential customers, or "leads," who have shown interest in a company's products or services. The goal of lead generation is to gather contact information and other relevant details about individuals or organizations that are likely to become customers..
<br />Effective lead generation strategies typically involve a combination of these methods tailored to the target audience and the specific goals of the business. Once leads are generated, they can be further nurtured through lead nurturing campaigns aimed at moving them through the sales funnel until they are ready to make a purchase.
                  <li>
                    -	Content Marketing
                  </li>
                  <li>-	Social Media Marketing</li>
                  <li>-	Search Engine Optimization (SEO)</li>
                  <li>-	Email Marketing</li>
                  <li>-	Paid Advertising</li>
                  <li>- Networking and Referrals</li>
                </div>
              </li>
              <li className="d-flex align-items-center mb-5">
                <div className="text-center mr-4">

                </div>
                <div style={{textAlign:"justify"}}>
                  <h4 >
                    Customer service </h4>
                    <span >
                    Customer service refers to the assistance and support provided to customers before, during, and after they purchase a product or service. It encompasses a wide range of activities and interactions aimed at ensuring customer satisfaction, resolving issues, and building positive relationships with customers.
<br/>Customer service can be delivered through various channels, including in-person interactions, phone calls, emails, live chat, social media, and self-service portals. Companies that prioritize excellent customer service often see higher customer satisfaction levels, increased customer loyalty, and positive word-of-mouth recommendations, which can contribute to long-term business success.
                    </span>
                 
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
