import { useEffect } from "react";
import { useGlobalContext } from "../Components/context"
import PageHeader from "../Components/PageHeader";
import ServiceDetailSection from "../Components/ProjectsComponents/ProjectsComponents/ServiceDetailSection";
import ServiceSection from './../Components/ProjectsComponents/ProjectsComponents/ServiceSection';

const ProjectPage = () => {

  const {updateProjectPage} = useGlobalContext();

  useEffect(()=> updateProjectPage(), []);

  return (
    <>
    <PageHeader/>
    <section className="section">
      <div className="container">
        <div className="row">
          <ServiceSection/>
          <ServiceDetailSection/>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProjectPage