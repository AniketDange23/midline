import { FaRegCheckCircle } from "react-icons/fa";
import { useGlobalContext } from "../../context";

const ServiceDetailSection = () => {
  const { title, para1, para2, benifitsPara, imageSrc} = useGlobalContext();

  // Sample array of benefits
  const benefits = ["Quality Services", "Clients Satisfaction"];

  return (
    <div className="col-lg-8">
      <h2>{title}</h2>
      <p className="mb-5" style={{textAlign:"justify"}}>{para1}</p>
      <img src={imageSrc} alt="service thumb" className="img-fluid w-100 mb-5" />
      <p style={{textAlign:"justify"}}>{para2}</p>

      {/* Benefits of service */}
      <h3>Benefits of {title}</h3>
      <p style={{textAlign:"justify"}}>
        {benifitsPara}
      </p>
      <div className="row mb-5">
        {benefits.map((benefit, index) => (
          <div key={index} className="col-md-4">
            <ul className="">
              <li className="mb-2">
                <FaRegCheckCircle className="mr-3" />
                {benefit}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetailSection;
