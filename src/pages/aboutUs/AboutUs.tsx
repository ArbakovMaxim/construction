import { AboutUsInfo } from "../../components/aboutUsInfo/AboutUsInfo";

import { CompaniValue } from "../../components/companiValues/CompaniValue";
import { FooterForm } from "../../components/footerForm/FooterForm";
import { HeroAboutUS } from "../../components/hero/heroAboutUS/HeroAboutUS";

const AboutUs = () => {
  return (
    <>
      <HeroAboutUS />
      <AboutUsInfo />
      <CompaniValue backgroundColor="#F4F5F6" padding="80px 0" />
      <FooterForm />
    </>
  );
};

export default AboutUs;
