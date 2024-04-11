import { useEffect } from "react";
import PageHeader from "../Components/PageHeader"
import ServiceSection from "../Components/ServicesComponents/Services"
import { useGlobalContext } from "../Components/context";

const ServicesPage = () => {
  const {updateServicesPage} = useGlobalContext();

  useEffect(()=> updateServicesPage(), []);
  return (
    <div>
    <PageHeader/>
      <ServiceSection/>
    </div>
  )
}

export default ServicesPage