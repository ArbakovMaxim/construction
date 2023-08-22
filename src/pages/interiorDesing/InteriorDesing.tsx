import { FooterForm } from "../../components/footerForm/FooterForm";
import { HeroInteriorDesing } from "../../components/hero/heroInterioirDesing/HeroInteriorDesing";
import { ProjectSlider } from "../../components/projectSlider/ProjectSlider";
import { ServicesBenefits } from "../../components/servicesBenefits/ServicesBenefits";
import { ServicesDoIT } from "../../components/servicesDoIT/ServicesDoIT";
import { ServicesInteriorOffer } from "../../components/servicesInteriorOffer/ServicesInteriorOffer";
import { ServicesPricing } from "../../components/servicesPricing/ServicesPricing";
import InteriorProgect from "../../util/InteriorWork.json";

const InteriorDesing = () => {
  return (
    <>
      <HeroInteriorDesing />
      <ServicesInteriorOffer />
      <ServicesDoIT />
      <ServicesBenefits />
      <ProjectSlider works={InteriorProgect} title="Related projects" />
      <ServicesPricing />
      <FooterForm />
    </>
  );
};

export default InteriorDesing;
