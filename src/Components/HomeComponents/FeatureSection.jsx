
const data = [
  { count: "3", title: " Years Experience", description: "Three years of dedicated innovation, delivering excellence every step of the way." },
  { count: "9", title: "Happy Clients", description: "Serving 9 satisfied clients with exceptional service and results that exceed expectations." },
  { count: "250", title: " Best Calling Service", description: "Providing the best calling service to 250 clients, ensuring seamless communication." },
  { count: "70", title: "Expert Workers", description: "Our team of 70 experts brings unparalleled skills and knowledge to every project." },
]

const Home = () => {
  return (
    <div className='container  g-0 '>
      <div className='row '>
        <div className='col-lg-6  align-content-center justify-content-center'>
          <h1>Welcome to MIDLINE Media Solution</h1>
          <p className="mb-4">
            Midline media solution founded in 2020. Over the years, we have
            grown into a versatile and forward-thinking organization, dedicated
            to empowering businesses across various industries. Our team
            comprises talented professionals from diverse backgrounds, allowing
            us to offer comprehensive solutions designed to meet the unique
            needs of our clients.
          </p>
          <button className="button"> <a href="/services">Know More</a> </button>
        </div>
        <div className="col-lg-6 py-2 align-content-center  d-flex flex-wrap">
          {data.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <div className="card mt-3">
                <h5 className="icon-bg  text-white water-wave align-content-center text-center  count" data-count={item.count}>0</h5>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
