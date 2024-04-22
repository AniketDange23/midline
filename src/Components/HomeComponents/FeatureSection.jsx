import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const data = [
  {
    count: 3,
    title: " Years Experience",
    description:
      "Three years of dedicated innovation, delivering excellence every step of the way.",
  },
  {
    count: 9,
    title: "Happy Clients",
    description:
      "Serving 9 satisfied clients with exceptional service and results that exceed expectations.",
  },
  {
    count: 250,
    title: " Best Calling Service",
    description:
      "Providing the best calling service to 250 clients, ensuring seamless communication.",
  },
  {
    count: 70,
    title: "Expert Workers",
    description:
      "Our team of 70 experts brings unparalleled skills and knowledge to every project.",
  },
];

const FeatureSection = () => {
  const [counts, setCounts] = useState(Array(data.length).fill(0));

  useEffect(() => {
    AOS.init();
    // Initialize counts animation
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < data[index].count ? count + 1 : count
        )
      );
    }, 50); // Adjust the interval for smoother animation or performance
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-5 py-3 px-3">
          <h3 className="mb-3 position-relative">Welcome to MIDLINE Media Solution</h3>
          <p>
            Midline media solution founded in 2020. Over the years, we have
            grown into a versatile and forward-thinking organization, dedicated
            to empowering businesses across various industries. Our team
            comprises talented professionals from diverse backgrounds, allowing
            us to offer comprehensive solutions designed to meet the unique
            needs of our clients.
          </p>
          <br />
          <button className="button">
            <Link to="/services">Know More</Link>
          </button>
        </div>
        <div className="col-lg-6 col-md-8 py-">
          <div className="row">
            {data.map((item, index) => (
              <div className="col-lg-6 p-3" key={index}>
                <div className="card">
                  <h5
                    className="icon-bg text-white water-wave text-center py-4 count"
                    data-count={item.count}
                  >
                    {counts[index]}
                  </h5>
                  <h4>{item.title}</h4>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
