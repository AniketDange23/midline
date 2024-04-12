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
      subtitle: "Cold Calling",
      description:  "Cold calling typically involves the salesperson reaching out via phone calls, although it can also include other methods such as emails or direct mail. The goal of cold calling is to introduce the product or service, generate interest, and ultimately persuade the prospect to make a purchase or take some other desired action, such as scheduling a meeting or requesting more information.",
      buttonLabel: "More Details",
      buttonUrl: "/about"
    },
    {
      animationIn: "fadeInDown",
      title: "Midline media solution Provided",
      subtitle: "Appointment setting",
      description: "Appointment setting can be done through various channels, including cold calling, email outreach, social media messaging, and networking events. It requires effective communication skills, persistence, and the ability to qualify leads to ensure that the scheduled appointments have a high likelihood of converting into sales opportunities.",
      buttonLabel: "More Details",
      buttonUrl: "/about"
    },
    {
      animationIn: "fadeInLeft",
      title: "Midline media solution Provided",
      subtitle: "Lead Generation",
      description: "Effective lead generation strategies typically involve a combination of these methods tailored to the target audience and the specific goals of the business. Once leads are generated, they can be further nurtured through lead nurturing campaigns aimed at moving them through the sales funnel until they are ready to make a purchase.",
      buttonLabel: "More Details",
      buttonUrl: "/about"
    },
    {
      animationIn: "fadeInRight",
      title: "Midline media solution Provided",
      subtitle: "Customer service",
      description: "purchases   Customer service can be delivered through various channels, including in-person interactions, phone calls, emails, live chat, social media, and self-service portals. Companies that prioritize excellent customer service often see higher customer satisfaction levels, increased customer loyalty, and positive word-of-mouth recommendations, which can contribute to long-term business success.",
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
                  <h3 className="mb-0  letter-spacing mt-5">{item.title}</h3>
                  <h1 className="mb-4 text-shadow ">{item.subtitle}</h1>
                  <p className="mb-5 fw-bold text-black">{item.description}</p>
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
