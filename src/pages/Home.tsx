import { AskQuestionForm } from "../components/askQuestionForm/AskQuestionForm";
import { CompanyInformation } from "../components/companyInformation/CompanyInformation";
import { HeroHome } from "../components/hero/heroHomePage/HeroHome";
import { ProjectHome } from "../components/projectHome/ProjectHome";
import { ServicesHome } from "../components/servicesHome/ServicesHome";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <CompanyInformation />
      <AskQuestionForm />
      <ServicesHome />
      <ProjectHome />
    </div>
  );
};

export default Home;
