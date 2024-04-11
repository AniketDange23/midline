// eslint-disable-next-line no-unused-vars
import React from 'react';

const serviceData = [
  {
    icon: "/seo.svg",
    title: "SEO Marketing",
    description: "SEO marketing is an important method we use for inbound traffic generation. SEO tools like Google Ads, on-site search bars can be used to identify broad search intent and seed keywords. Inbound marketing is a combination of different marketing strategies that convert website visitors into qualified leads through blogging. Inbound marketing uses well-crafted and highly targeted content to attract customers by meeting them where they are. For better SEO, we focus on writing EAT content - or content with Expertise, Authority, and Trustworthiness. When SEO is correctly aligned with inbound marketing, it generates inbound leads by attracting and engaging users to your business."
  },
 
  {
    icon: "/digital.svg",
    title: "Digital Marketing",
    description: "Elevate your brand's digital presence with our comprehensive digital marketing solutions. At midline, we specialize in driving online success through a strategic blend of Search Engine Optimization (SEO), Social Media Management, Pay-Per-Click (PPC) Advertising, and Content Marketing. Our team crafts compelling and shareable content, maximizes your website's visibility on search engines, and engages your audience across social platforms. With a data-driven approach, we fine-tune strategies to deliver measurable results. Partner with us to transform your online presence, connect with your target audience, and stay ahead in the digital landscape."
  },
   {
    icon: "/call.svg",
    title: "Click to Call Lead Generation",
    description: `Click to call lead generation is a tactic used in inbound marketing strategies. It involves using a dedicated Facebook call capture/tracking phone number to generate leads from Facebook Ads. Other effective strategies for lead generation include webinars, SEO, and content marketing. Click-to-call is an effective tactic offered by Business Nucleus as part of their marketing services.
    strategies we use for click to call lead generation.

The strategies for click to call lead generation include creating a new lead generation campaign in Ads Manager and selecting phone as the "lead method" under the ad set settings Using a dedicated Facebook call capture/tracking phone number is also important for generating leads from call now ad units Click-to-call is an effective tactic offered by Business Nucleus as part of their marketing services.`
  },
  {
    icon: "/web.svg",
    title: "Website Development",
    description: "Website development services encompass a broad spectrum of offerings aimed at creating and maintaining effective online platforms. These services can be provided by freelancers, specialized agencies, or in-house teams. They involve the construction of websites using fundamental technologies like HTML, CSS, and JavaScript, with options for static or dynamic content. Additionally, web application development involves creating interactive and responsive interfaces using frameworks like React, Angular, or Vue.js, and server-side logic with technologies such as Node.js or Django. Web developers also specialize in API development and integration, facilitating communication between different software systems. Security measures, including protection against threats like SQL injection and cross-site scripting, are integral components. Ongoing maintenance and support services ensure the longevity and reliability of websites and applications."
  }
];

const Services = () => {
  return (
    <section className="section bg-gray service-bg-dots">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title-border border-center"></div>
            <h2 className="section-title">Best Services We Provide</h2>
          </div>
        </div>
        <div className="row">
          {serviceData.map((item, index) => (
            <div key={index} className="col-xl-6 col-lg-4 col-sm-6 mb-4 ">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave">
                  <i className='icon text-primary' > <img src={item.icon}  style={{ width:"40px"}}/>
</i>

                </div>
                <h4 className="mb-4">{item.title}</h4>
                <p style={{ textAlign: "justify" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
