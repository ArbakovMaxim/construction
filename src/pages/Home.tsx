import { AskQuestionForm } from "../components/askQuestionForm/AskQuestionForm";
import { CompanyInformation } from "../components/companyInformation/CompanyInformation";
import { HeroHome } from "../components/hero/heroHomePage/HeroHome";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <CompanyInformation />
      <AskQuestionForm />
    </div>
  );
};

export default Home;
