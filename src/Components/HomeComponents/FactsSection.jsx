import React, { useEffect } from "react";
import { FaAward } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BsCalendar } from "react-icons/bs";
import AOS from 'aos';
import "aos/dist/aos.css";

const factsData = [
  { icon: BsCalendar, count: "3", text: "Years Experience" },
  { icon: FiTarget, count: "70", text: "Expert Worker" },
  { icon: HiOutlineEmojiHappy, count: "9", text: "Happy Clients" },
  { icon: FaAward, count: "250", text: "Best Calling Services" },
];

const FactsSection = () => {
  useEffect(() => {
    const countUp = () => {
      const counters = document.querySelectorAll(".count");
      const speed = 5000; // Adjust the speed here for faster counting

      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-count");
          const count = +counter.innerText;
          const increment = target / speed;
          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target + ` +`;
          }
        };

        updateCount();
      });
    };

    countUp();
    AOS.init({});
  }, []);

  return (
    <div className="container-fluid bg-dark" >
      <div className="row justify-content-center g-0 align-items-center">
        <div className="col-lg-3 mb-4 mb-lg-0">
          <div className="text-center" data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000">
            <img
              className="img-fluid"
              src="/CEO.png"
              alt="CEO"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <h4 className="text-white">Mr. Komal Kumbhare</h4>
            <h6>Founder & CEO</h6>
            <h5 className="text-white text-center">Midline media solution</h5>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row justify-content-center align-items-center py-4" >
            {factsData.map((fact, index) => (
              <div key={index} className="col-lg-6 col-md-6 mb-3" data-aos="fade-up"
     data-aos-duration="3000">
                <div className="d-flex align-items-center shadow bg-dark p-3">
                  {React.createElement(fact.icon, {
                    className: "icon-lg text-primary mr-3",
                  })}
                  <div>
                    <h3>
                      <span className="count text-white" data-count={fact.count}>
                        0
                      </span>
                    </h3>
                    <b className="fw-bold text-white">{fact.text}</b>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
