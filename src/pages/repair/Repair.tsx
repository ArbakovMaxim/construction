import { FooterForm } from "../../components/footerForm/FooterForm";
import { HeroInteriorDesing } from "../../components/hero/heroInterioirDesing/HeroInteriorDesing";
import { ProjectSlider } from "../../components/projectSlider/ProjectSlider";
import { ServicesBenefits } from "../../components/servicesBenefits/ServicesBenefits";
import { ServicesDoIT } from "../../components/servicesDoIT/ServicesDoIT";
import { ServicesInteriorOffer } from "../../components/servicesInteriorOffer/ServicesInteriorOffer";
import { ServicesPricing } from "../../components/servicesPricing/ServicesPricing";
import HomeWork from "../../util/Homework.json";

const Repair = () => {
  return (
    <>
      <HeroInteriorDesing name="REPAIRS" link="Repairs" />
      <ServicesInteriorOffer />
      <ServicesDoIT />
      <ServicesBenefits />
      <ProjectSlider works={HomeWork} title="Related projects" />
      <ServicesPricing />
      <FooterForm />
    </>
  );
};

export default Repair;
