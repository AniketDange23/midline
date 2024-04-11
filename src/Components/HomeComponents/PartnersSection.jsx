import React from 'react';

const partners = [
  { name: "VIP Response", imgSrc: "/client-1.jpg" },
  { name: "Digital Media Solutions", imgSrc: "/client-3.jpg" },
  { name: "Jenlin System", imgSrc: "/client-2.jpg" },
  { name: "clickDealer", imgSrc: "/client-4.png" }
];

const PartnersSection = () => {
  return (
    <section className="our-team-area section-padding-80-50 ">
      <div className="container bg-black">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center wow fadeInUp" data-wow-delay="100ms">
              <h2 style={{ marginLeft: "-1%" }}>Our Partners</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Map through partners array */}
          {partners.map((partner, index) => (
            <div key={index} className="col-md-6 col-xl-3 py-5">
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
    </section>
  );
}

export default PartnersSection;
