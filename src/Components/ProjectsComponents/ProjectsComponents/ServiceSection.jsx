import { FaRegCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const ServiceSection = () => {


  const services = [
    { name: "Health Insurance PPC", Link:"/healthproject" },
    { name: "Final Expense",Link:"/expenseproject"  },
    { name: "Medicare Supplement/Advantage",Link:"/medicareproject" },
    { name: "B2B Lead Generation",Link:"/b2bleadproject" },
  ];


  return (
    <aside className="col-lg-4">
      <div className="bg-white px-4 py-5 box-shadow mb-5">
        <h4 className="mb-4">Our Projects</h4>
        <ul className="list-unstyled">
          {services.map((service, index) => (
            <li key={index} className="border-bottom border-color d-flex align-items-center">
              <FaRegCheckCircle className="mr-3"/><NavLink to={service.Link} className="text-color d-block pb-3 mt-3 text-decoration-none">{service.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white px-4 py-5 box-shadow mb-5">
        <h4 className="mb-4">Quick Contact</h4>
        <form action="#">
          <input type="text" name="name" id="name" className="form-control form-control-sm border-0 rounded-0 box-shadow mb-3" placeholder="Name" />
          <input type="email" name="mail" id="mail" className="form-control form-control-sm border-0 rounded-0 box-shadow mb-3" placeholder="Email" />
          <input type="text" name="phone" id="phone" className="form-control form-control-sm border-0 rounded-0 box-shadow mb-3" placeholder="Phone" />
          <input type="text" name="subject" id="subject" className="form-control form-control-sm border-0 rounded-0 box-shadow mb-3" placeholder="Subject" />
          <textarea name="message" id="message" className="form-control form-control-sm border-0 rounded-0 box-shadow mb-3 py-3 px-4" placeholder="Your Message"></textarea>
          <button type="submit" value="send" className="btn btn-primary">send message</button>
        </form>
      </div>
    </aside>
  );
};

export default ServiceSection;