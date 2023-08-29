import { AboutUsDirector } from "../../components/aboutUsDirector/AboutUsDirector";
import { AboutUsHistory } from "../../components/aboutUsHistory/AboutUsHistory";
import { AboutUsInfo } from "../../components/aboutUsInfo/AboutUsInfo";
import { AboutUsPartners } from "../../components/aboutUsPartners/AboutUsPartners";
import { AboutUsTeam } from "../../components/aboutUsTeam/AboutUsTeam";

import { CompaniValue } from "../../components/companiValues/CompaniValue";
import { FooterForm } from "../../components/footerForm/FooterForm";
import { HeroAboutUS } from "../../components/hero/heroAboutUS/HeroAboutUS";

const AboutUs = () => {
  return (
    <>
      <HeroAboutUS />
      <AboutUsInfo />
      <AboutUsDirector />
      <CompaniValue backgroundColor="#F4F5F6" padding="80px 0" />
      <AboutUsHistory />
      <AboutUsPartners />
      <AboutUsTeam />
      <FooterForm />
    </>
  );
};

export default AboutUs;
