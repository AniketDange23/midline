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
                <div className="text-center">
                  {/* <div className="icon-bg water-wave">
                    <i className="fa fa-snowflake-o icon text-primary"></i>
                  </div> */}
                </div>
                <div>
                  <h4>Inbound traffic generation</h4>
                  Inbound traffic generation is method we are using to attract
                  visitors to our website or landing page through various
                  marketing tactics and strategies. Inbound marketing is a way
                  to pull people to your business by creating engaging, highly
                  shareable content rather than relying on traditional outbound
                  methods.{" "}
                </div>
              </li>
              <li className="d-flex align-items-center mb-5">
                <div className="text-center mr-4">
                  {/* <div className="icon-bg water-wave">
                    <i className="fa fa-code icon text-primary"></i>
                  </div> */}
                </div>
                <div>
                  <h4>Strategies we are using to generate inbound calls.</h4>
                  SEO best practices are also important for customers to find
                  you through search engines include creating great content
                  adapting it to current needs, honing your target audience,
                  developing your brand voice, and using social media
                  effectively. We create landing pages according to advertisers
                  need and we promote them using google ads to bring more
                  traffic for click to call offers.{" "}
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-5 pr-lg-0 order-lg-2 order-1 mb-5 mb-lg-0">
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
        <div className="row align-items-center">
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
                <div>
                  <h4>Outbound Lead generation</h4>Outbound lead generation is a
                  marketing strategy we use to tackle potential customer who may
                  not have expressed interest in our product or service. We are
                  using outbound calling sales method using various channels
                  such as phone calls, direct mail, emails, or social media.
                  outbound lead generation is an interruption marketing
                  technique where the marketer chooses the time and place of
                  interaction.
                </div>
              </li>
              <li className="d-flex align-items-center mb-5">
                <div className="text-center mr-4">

                </div>
                <div>
                  <h4>Strategies we use for outbound lead generation. .</h4>

                  <li>
                    -Tailoring content and digital marketing to attract desired
                    customers.
                  </li>
                  <li>-Automating workflow</li>
                  <li>-Automating workflow</li>
                  <li>-Cold calling and emailing</li>
                  <li>-Social selling</li>
                  <li>-PPC campaigns</li>
                  <li>-Referrals</li>
                  <li>
                    -Obtaining permission from potential leads before contacting
                    them
                  </li>
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
