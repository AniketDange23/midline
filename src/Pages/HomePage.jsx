import FactsSection from "../Components/HomeComponents/FactsSection.jsx";
import FeatureSection from "../Components/HomeComponents/FeatureSection.jsx";
import HeroSlider from "../Components/HomeComponents/HeroSlider.jsx";
import OurServices from "../Components/HomeComponents/OurServices.jsx";
import PartnersSection from "../Components/HomeComponents/PartnersSection.jsx";
import OurMission from './../Components/HomeComponents/OurMission';

const HomePage = () => {
  return (
    <div>
      
    <HeroSlider/>
    <FeatureSection/>
    <OurServices/>
    <OurMission/>
    <FactsSection/>
    <PartnersSection/> 
    </div>
  )
}

export default HomePage