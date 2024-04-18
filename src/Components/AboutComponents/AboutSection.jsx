

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useEffect } from "react";

const AboutSection = () => {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div className="container mb-5 py-5">
      <div className="row">
        <div className="col-lg-6 order-lg-1 order-2 d-flex align-items-center justify-content-center" data-aos="fade-up">
          <div className="feature-img-bg box-shadow  ">
            <img
              className="img-fluid"
              src="/images/h3.jpg"
              alt="feature-image"
              style={{width:"500px"}}
            />
          </div>
        </div>
        <div className="col-lg-6 order-lg-2 order-1"  data-aos="fade-down" >
          <div className="p-4">
            <h3 className="section-title">We Are a Dynamic Team and Business Agency</h3>
            <p className="mb-4">
            We help pay per call and pay per click sector build robust practices and all businesses to enable their customers through our call centre and digital services. Headquartered in Nagpur and operating out of multiple delivery clients across Asia and America, we are one of India’s most promising call centre and digital marketing player handling in excess of a huge transactions every day through our offerings.

We are one of the quality call canter management companies in India that has been built on the pillars of rich experience attained by servicing multiple domains. Our clientele encompasses: Healthcare, Auto, App, loan, Real Estate, Ecommerce, Technology, Media and many more.            </p>
            <p className="mb-4">
              Headquartered in Nagpur and operating across Asia and America, we are one of India’s most promising call center and digital marketing players, handling a large number of transactions daily.
            </p>
            <a href="/services" className="button">
              More Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
