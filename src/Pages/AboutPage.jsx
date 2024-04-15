import { useEffect } from "react";
import AboutSection from "../Components/AboutComponents/AboutSection"
import PageHeader from "../Components/PageHeader"
import { useGlobalContext } from "../Components/context";
import AboutCards from "../Components/AboutComponents/AboutCards";

const AboutPage = () => {

  const {updateAboutPage} = useGlobalContext();

  useEffect(()=> updateAboutPage(), []);
  return (
    <div>
      <PageHeader/>
    <AboutSection/>
    <AboutCards/>
    </div>
  )
}

export default AboutPage