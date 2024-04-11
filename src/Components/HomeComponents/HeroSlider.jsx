import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: false,
    arrows: true
  };

  const sliderItems = [
    {
      animationIn: "fadeInUp",
      title: "Midline media solution Provided",
      subtitle: "Call Center Managements",
      description:  "Revolutionize customer service with cutting-edge technology and empathetic agents for unparalleled customer satisfaction.",
      buttonLabel: "More Details",
      buttonUrl: "/about"
    },
    {
      animationIn: "fadeInDown",
      title: "Midline media solution Provided",
      subtitle: "Servicing Multiple Domains",
      description: "Efficiently manage diverse domains with seamless integration and specialized expertise for optimal customer support across industries.",
      buttonLabel: "More Details",
      buttonUrl: "/about"
    },
    {
      animationIn: "fadeInLeft",
      title: "Midline media solution Provided",
      subtitle: "Highly Professional Staff",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonLabel: "More Details",
      buttonUrl: "/about"
    },
    {
      animationIn: "fadeInRight",
      title: "Midline media solution Provided",
      subtitle: "100% Satisfaction Guarantee",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonLabel: "More Details",
      buttonUrl: "/about"
    }
  ];

  return (
    <section className="hero-slider">

      <Slider {...sliderSettings} >

        {sliderItems.map((item, index) => (
          <div key={index} className="hero-slider-item" >
          <img src='/banner-3.jpg' className="bg-img"/>

            <div className="container h-100 py-5">
              <div className="row">
                <div className={`col-lg-6 animate__animated animate__${item.animationIn}`}>
                  <h3 className="mb-0 letter-spacing mt-5">{item.title}</h3>
                  <h1 className="mb-4">{item.subtitle}</h1>
                  <p className="mb-5 text-black">{item.description}</p>
                  <a href={item.buttonUrl} className="btn btn-primary-outline">{item.buttonLabel}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
