import { HeroPortfolio } from "../../components/hero/heroPortfolio/HeroPortfolio";
import { WorkClient } from "../../components/workClient/WorkClient";
import { WorkProject } from "../../components/workProject/WorkProject";

const Portfolio = () => {
  return (
    <>
      <HeroPortfolio />
      <WorkProject />
      <WorkClient />
    </>
  );
};

export default Portfolio;
