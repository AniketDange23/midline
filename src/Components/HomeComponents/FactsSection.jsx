import React, { useEffect } from "react";
import { FaAward } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";

const factsData = [
  { icon: SlCalender, count: " 3 ", text: "Years Experience" },
  { icon: FiTarget, count: 70, text: "Expert Worker" },
  { icon: HiOutlineEmojiHappy, count: 9, text: "Happy Clients" },
  { icon: FaAward, count: 250, text: "Best Calling Services" },
];

const FactsSection = () => {
  useEffect(() => {
    const countUp = () => {
      const counters = document.querySelectorAll(".count");
      const speed = 1000;

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
  }, []);

  return (
    <div className='container-fluid bg-dark '>
      <div className='row justify-content-center align-items-center '>

        <div className="col-lg-3 mb-4 mb-lg-0">
          <div className="text-center">
            <img className="img-fluid" src="/CEO.png" alt="CEO" style={{ maxWidth: "100%", height: "auto" }} />
            <h4>Mr. Komal Kumbhare</h4>
            <h5>Founder & CEO</h5>
            <p className="text-white">Midline media solution</p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row justify-content-center align-items-center py-4">
            {factsData.map((fact, index) => (
              <div key={index} className='col-lg-6 col-md-6 mb-3'>
                <div className='d-flex align-items-center shadow p-3'>
                  {React.createElement(fact.icon, { className: 'icon-lg text-primary mr-3' })}
                  <div style={{ textAlign: "justify" }}>
                    <h3>
                      <span className='count text-white' data-count={fact.count}>
                        0
                      </span>
                    </h3>
                    <b className='fw-bold text-white'>{fact.text}</b>
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
