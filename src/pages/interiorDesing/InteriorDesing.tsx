import { FooterForm } from "../../components/footerForm/FooterForm";
import { HeroInteriorDesing } from "../../components/hero/heroInterioirDesing/HeroInteriorDesing";
import { ServicesDoIT } from "../../components/servicesDoIT/ServicesDoIT";
import { ServicesInteriorOffer } from "../../components/servicesInteriorOffer/ServicesInteriorOffer";

const InteriorDesing = () => {
  return (
    <>
      <HeroInteriorDesing />
      <ServicesInteriorOffer />
      <ServicesDoIT />
      <FooterForm />
    </>
  );
};

export default InteriorDesing;
