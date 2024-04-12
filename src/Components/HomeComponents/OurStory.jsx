import TeamSection from "./TeamSection";

const OurStory = () => {
  return (
    <div className="container py-5 counter">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 m-0 my-lg-5 pt-0 pt-lg-5 pr-lg-5">
            <div data-aos="fade-up" data-aos-duration="2000" className="aos-init aos-animate">
              <h6 className="text-secondary text-uppercase font-weight-medium mb-3 heads-1"><center>Our Story</center></h6>
              <center><h1 className="mb-4 head">Welcome to MIDLINE Media Solution </h1></center> <br /><br />
              <p className="text-black">Midline media solution founded in 2020. Over the years, we have grown into a versatile and forward-thinking organization, dedicated to empowering businesses across various industries. Our team comprises talented professionals from diverse backgrounds, allowing us to offer comprehensive solutions designed to meet the unique needs of our clients.</p>
              <div className="row">
                <div className="col-sm-6 mb-4">
                  <h1 className="text-secondary" data-toggle="counter-up">3</h1>
                  <h5 className="font-weight-bold">Years Experience</h5>
                </div>
                <div className="col-sm-6 mb-4">
                  <h1 className="text-secondary" data-toggle="counter-up">70</h1>
                  <h5 className="font-weight-bold">Expert Worker</h5>
                </div>
                <div className="col-sm-6 mb-4">
                  <h1 className="text-secondary" data-toggle="counter-up">9</h1>
                  <h5 className="font-weight-bold">Happy Clients</h5>
                </div>
                <div className="col-sm-6 mb-4">
                  <h1 className="text-secondary" data-toggle="counter-up">250</h1>
                  <h5 className="font-weight-bold">Best Calling Service</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <div className="text-center  g-0">
            <TeamSection  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
