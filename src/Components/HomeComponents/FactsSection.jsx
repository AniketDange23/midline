// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { FaAward } from 'react-icons/fa6';
import { FiTarget } from "react-icons/fi";
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { SlCalender } from 'react-icons/sl';

const FactsSection = () => {

  useEffect(() => {
    const countUp = () => {
      const counters = document.querySelectorAll('.count');
      const speed = 1000; 

      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText;

          const increment = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    };

    countUp();
  }, []);

  return (
      <div className="container-fluid">
        <div className="row bg-secondary p-5">
          <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
            <div className="d-flex align-items-center">
            <FiTarget  className="icon-lg mr-3 text-primary"/>
              
              <div>
                <h3 className="text-white mb-0"><span className="count" data-count="50">0</span>+</h3>
                <span className="text-white">Projects Done</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
            <div className="d-flex align-items-center">
            <SlCalender  className="icon-lg mr-3 text-primary"/>
              <div>
                <h3 className="text-white mb-0"><span className="count" data-count="25">0</span>+</h3>
                <span className="text-white">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
            <div className="d-flex align-items-center">
            <FaAward  className="icon-lg mr-3 text-primary"/>
              <div>
                <h3 className="text-white mb-0"><span className="count" data-count="250">0</span>+</h3>
                <span className="text-white">Awards Win</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
            <div className="d-flex align-items-center">
            <HiOutlineEmojiHappy  className="icon-lg mr-3 text-primary"/>
              <div>
                <h3 className="text-white mb-0"><span className="count" data-count="500">0</span>+</h3>
                <span className="text-white">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FactsSection;
