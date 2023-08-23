import { FooterForm } from "../../components/footerForm/FooterForm";
import { HeroInteriorDesing } from "../../components/hero/heroInterioirDesing/HeroInteriorDesing";
import { ProjectSlider } from "../../components/projectSlider/ProjectSlider";
import { ServicesBenefits } from "../../components/servicesBenefits/ServicesBenefits";
import { ServicesDoIT } from "../../components/servicesDoIT/ServicesDoIT";
import { ServicesInteriorOffer } from "../../components/servicesInteriorOffer/ServicesInteriorOffer";
import { ServicesPricing } from "../../components/servicesPricing/ServicesPricing";
import Project from "../../util/Project.json";

const ProjectDevelopment = () => {
  return (
    <>
      <HeroInteriorDesing
        name="PROJECT DEVELOPMENT"
        link="Project Development"
      />
      <ServicesInteriorOffer />
      <ServicesDoIT />
      <ServicesBenefits />
      <ProjectSlider works={Project} title="Related projects" />
      <ServicesPricing />
      <FooterForm />
    </>
  );
};

export default ProjectDevelopment;
