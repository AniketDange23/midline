import React from 'react';

const partners = [
  { name: "VIP Response", imgSrc: "/clients/client-1.jpg" },
  { name: "Digital Media Solutions", imgSrc: "/clients/client-3.jpg" },
  { name: "Jenlin System", imgSrc: "/clients/client-2.jpg" },
  { name: "clickDealer", imgSrc: "/clients/client-4.png" }
];

const  PartnersSection = () => {
  return (
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center wow fadeInUp mb-3" data-wow-delay="100ms">
              <h3 style={{ marginLeft: "-1%" }}>Our  Partners</h3>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Map through partners array */}
          {partners.map((partner, index) => (
            <div key={index} className="col-md-6 col-xl-3 py-3 py-lg-3 ">
              <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay={`${100 * (index + 1)}ms`}>
                <div className="member-thumb mx-2 ">
                  <img src={partner.imgSrc} alt="clients" className="img-1 shadow rounded-5" style={{width:"250px"}} />
                </div>
                <h4 className='py-3 '>{partner.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default PartnersSection;
