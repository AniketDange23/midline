import { useEffect } from "react";
import AboutSection from "../Components/AboutComponents/AboutSection"
import PageHeader from "../Components/PageHeader"
import { useGlobalContext } from "../Components/context";

const AboutPage = () => {

  const {updateAboutPage} = useGlobalContext();

  useEffect(()=> updateAboutPage(), []);
  return (
    <div>
      <PageHeader/>
    <AboutSection/></div>
  )
}

export default AboutPage