import { FooterForm } from "../../components/footerForm/FooterForm";
import { HeroPositions } from "../../components/hero/heroPositions/HeroPositions";
import { PositionsBenefits } from "../../components/positionsBenefits/PositionsBenefits";
import { PositionsVacancies } from "../../components/positionsVacancies/PositionsVacancies";

const Positions = () => {
  return (
    <>
      <HeroPositions />
      <PositionsVacancies />
      <PositionsBenefits />
      <FooterForm />
    </>
  );
};

export default Positions;
