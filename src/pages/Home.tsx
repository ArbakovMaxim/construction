import { AskQuestionForm } from "../components/askQuestionForm/AskQuestionForm";
import { CompaniValue } from "../components/companiValues/CompaniValue";
import { CompanyInformation } from "../components/companyInformation/CompanyInformation";
import { FactHome } from "../components/factHome/FactHome";
import { FooterForm } from "../components/footerForm/FooterForm";
import { HeroHome } from "../components/hero/heroHomePage/HeroHome";
import { NewsHome } from "../components/newsHome/NewsHome";
import { PartnerHome } from "../components/partnersHome/PartnersHome";
import { ProjectSlider } from "../components/projectSlider/ProjectSlider";
import { ServicesHome } from "../components/servicesHome/ServicesHome";
import HomeWork from "../util/Homework.json";

const Home = () => {
  return (
    <>
      <HeroHome />
      <CompanyInformation />
      <CompaniValue backgroundColor="#fff" padding="0 0 120px 0" />
      <AskQuestionForm />
      <ServicesHome />
      <ProjectSlider
        works={HomeWork}
        title="Browse our selected projects <br /> and learn more about our work"
      />
      <PartnerHome />
      <FactHome />
      <NewsHome />
      <FooterForm />
    </>
  );
};

export default Home;
