import AboutSection from "../Components/AboutComponents/AboutSection.jsx";
import FactsSection from "../Components/HomeComponents/FactsSection.jsx";
import FeatureSection from "../Components/HomeComponents/FeatureSection.jsx";
import HeroSlider from "../Components/HomeComponents/HeroSlider.jsx";
import OurServices from "../Components/HomeComponents/OurServices.jsx";
import OurStory from "../Components/HomeComponents/OurStory.jsx";
import PartnersSection from "../Components/HomeComponents/PartnersSection.jsx";

const HomePage = () => {
  return (
    <div>
      
    <HeroSlider/>
    <br/>
    <FeatureSection/>
    <AboutSection/>
    <OurServices/>
    <FactsSection/>
    <OurStory/>
    <PartnersSection/>
    </div>
  )
}

export default HomePage