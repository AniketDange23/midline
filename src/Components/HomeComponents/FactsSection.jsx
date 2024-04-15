// eslint-disable-next-line no-unused-vars
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
    <div className='container-fluid bg-dark   mb-5  '>
      <div className='row  py-5 '>
        {factsData.map((fact, index) => (
          <div key={index} className='col-lg-3 col-sm-6 mb-3 mb-lg-0'>
            <div className='d-flex align-content-center  justify-content-start px-5'>
              {<fact.icon className='icon-lg  mr-3 ' />}
              <div >
                <h3>
                  <span className='count  text-white' data-count={fact.count}>
                    0{" "}
                  </span>
                </h3>
                <h6 className='text-light fw-bold'>{fact.text}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactsSection;
