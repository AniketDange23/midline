import { useEffect } from "react";
import PageHeader from './../Components/PageHeader';
import { useGlobalContext } from "../Components/context";
import Services from "../Components/ServicesComponents/Services";

const ServicesPage = () => {
  const {updateServicesPage} = useGlobalContext();

  useEffect(()=> updateServicesPage(), []);
  return (
    <div>
    <PageHeader/>
      <Services/>
    </div>
  )
}

export default ServicesPage