
import HeroSlider from './../Components/HomeComponents/HeroSlider';
import OurServices from './../Components/HomeComponents/OurServices';
import OurMission from './../Components/HomeComponents/OurMission';
import PartnersSection from './../Components/HomeComponents/PartnersSection';
import FeatureSection from '../Components/HomeComponents/FeatureSection';

const HomePage = () => {
  return (
    <div>
      
    <HeroSlider/>
    <FeatureSection />
    <OurServices/>
    <OurMission />
    {/* <FactsSection/> */}
    <PartnersSection/> 
    </div>
  )
}

export default HomePage