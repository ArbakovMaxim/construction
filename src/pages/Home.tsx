import { AskQuestionForm } from "../components/askQuestionForm/AskQuestionForm";
import { CompanyInformation } from "../components/companyInformation/CompanyInformation";
import { FactHome } from "../components/factHome/FactHome";
import { FooterForm } from "../components/footerForm/FooterForm";
import { HeroHome } from "../components/hero/heroHomePage/HeroHome";
import { NewsHome } from "../components/newsHome/NewsHome";
import { PartnerHome } from "../components/partnersHome/PartnersHome";
import { ProjectHome } from "../components/projectHome/ProjectHome";
import { ServicesHome } from "../components/servicesHome/ServicesHome";

const Home = () => {
  return (
    <>
      <HeroHome />
      <CompanyInformation />
      <AskQuestionForm />
      <ServicesHome />
      <ProjectHome />
      <PartnerHome />
      <FactHome />
      <NewsHome />
      <FooterForm />
    </>
  );
};

export default Home;
