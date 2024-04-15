const AboutSection = () => {
  return (
    <div className="container  g-0 mb-4">
      <div className="row justify-content-between align-items-center">
      <div className="col-lg-6   order-2">
            <div className="feature-img-bg  ">
              <img
                className="img-fluid rounded-5"
                src="/images/h3.jpg"
                alt="feature-image"
                style={{ maxWidth:"400px"}}
              />
            </div>
          </div>
        <div className="col-md-6 p-4">
          <span className="section-title-border"></span>
          <h5 className="subtitle">About Us</h5>
          <h3 className="section-title">
            We Are Dynamic Team and Business Agency
          </h3>
          <p className="mb-5">
            We help pay per call and pay per click sector build robust
            practices and all businesses to enable their customers through our
            call centre and digital services. Headquartered in Nagpur and
            operating out of multiple delivery clients across Asia and
            America, we are one of India’s most promising call centre and
            digital marketing player handling in excess of a huge transactions
            every day through our offerings. We are one of the quality call
            canter management companies in India that has been built on the
            pillars of rich experience attained by servicing multiple domains.
            Our clientele encompasses: Healthcare, Auto, App, loan, Real
            Estate, Ecommerce, Technology, Media and many more. We are
            servicing businesses of all sizes, with experience in managing
            customer, we expertly steer our clients through their
            transformation, empower businesses with nimble solutions that
            offer scale and deliver unprecedented levels of performance
            through our partnership driven approach. The growth of calls tech
            media is spurred by the spirit of individuals who zeal for keeping
            us ahead of the rest, and constantly rise to the challenges.
          </p>
          <a href="/services" className="button">
            More Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
