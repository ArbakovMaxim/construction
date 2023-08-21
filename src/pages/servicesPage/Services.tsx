import { FooterForm } from "../../components/footerForm/FooterForm";
import { HeroServices } from "../../components/hero/heroServices/HeroServices";
import { ServicesList } from "../../components/servicesList/ServicesList";

const Services = () => {
  return (
    <>
      <HeroServices />
      <ServicesList />
      <FooterForm />
    </>
  );
};

export default Services;
