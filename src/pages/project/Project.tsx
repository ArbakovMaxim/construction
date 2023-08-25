import { useParams } from "react-router-dom";
import { HeroCV } from "../../components/hero/heroCV/HeroCV";
import { FooterForm } from "../../components/footerForm/FooterForm";
import { ProjectConstructive } from "../../components/projectConstructive/ProjectConstructive";

const ProjectID = () => {
  const { ID } = useParams();
  const id = ID;

  return (
    <>
      <HeroCV ID={id} />
      <ProjectConstructive />
      <FooterForm />
    </>
  );
};

export default ProjectID;
