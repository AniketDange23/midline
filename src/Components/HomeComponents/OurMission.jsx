import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const serviceData = [
  {
    title: "OUR VISION",
    description: `Our vision for cold calling transcends traditional sales tactics. We envision a landscape where every call is an opportunity for authentic connection and meaningful impact. Through empathy, innovation, and a relentless pursuit of excellence, we strive to redefine cold calling as a strategic tool for building lasting relationships and driving sustainable growth. Our vision is to empower businesses to approach cold calling with confidence, knowing that each interaction has the potential to create value and foster trust. Join us in shaping the future of cold calling, where every conversation is a step towards mutual success and prosperity.`,
  },
  {
    title: "OUR MISSION",
    description: `Cold calling isn't just about making sales; it's about forging meaningful connections. Our mission is to redefine cold calling as a catalyst for genuine engagement and mutual success. We're committed to understanding client needs, crafting tailored solutions, and fostering trust through empathetic communication. With a strategic approach and unwavering dedication to excellence, we aim to transform every cold call into an opportunity for growth and partnership. Join us as we revolutionize the way businesses connect and thrive in today's competitive landscape.`,
  },
];

const OurMission = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="bg-gray">
      <div className="container py-5">
        <div className="row justify-content-center">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className="col-xl-6 col-lg-6 col-md-6 mb-4"
              data-aos="fade-up" // Apply AOS animation
            >
              <div className="bg-white h-100 py-5 px-4 text-center rounded-5 border border-5 shadow transition hover-bg-dark">
                <h3 className="mb-4">{item.title}</h3>
                <p style={{ textAlign: "justify" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
