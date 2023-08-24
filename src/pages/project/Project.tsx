import { useParams } from "react-router-dom";
import { HeroCV } from "../../components/hero/heroCV/HeroCV";
import { FooterForm } from "../../components/footerForm/FooterForm";

const ProjectID = () => {
  const { ID } = useParams();
  const id = ID;

  console.log(id);
  return (
    <>
      <HeroCV link="Modern Cottage" name="Modern Cottage" />
      <FooterForm />
    </>
  );
};

export default ProjectID;
