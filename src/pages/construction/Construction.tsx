import { FooterForm } from "../../components/footerForm/FooterForm";
import { HeroInteriorDesing } from "../../components/hero/heroInterioirDesing/HeroInteriorDesing";
import { ProjectSlider } from "../../components/projectSlider/ProjectSlider";
import { ServicesBenefits } from "../../components/servicesBenefits/ServicesBenefits";
import { ServicesDoIT } from "../../components/servicesDoIT/ServicesDoIT";
import { ServicesInteriorOffer } from "../../components/servicesInteriorOffer/ServicesInteriorOffer";
import { ServicesPricing } from "../../components/servicesPricing/ServicesPricing";
import ConstructionWork from "../../util/Construction.json";

const Construction = () => {
  return (
    <>
      <HeroInteriorDesing name="Construction" link="Construction" />
      <ServicesInteriorOffer />
      <ServicesDoIT />
      <ServicesBenefits />
      <ProjectSlider works={ConstructionWork} title="Related projects" />
      <ServicesPricing />
      <FooterForm />
    </>
  );
};

export default Construction;
