import Slider, { Settings } from "react-slick";
import "./HeroHome.css";
import { ArrowsRight } from "../../../image/svg/ArrowsRight";
import { ArrowsLeft } from "../../../image/svg/ArrowsLeft";
import { ContentHero } from "./contentHero/ContentHero";

interface CustomArrowProps {
  onClick?: () => void;
}

export const HeroHome = () => {
  const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <ArrowsRight color="#424551" />
    </div>
  );

  const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <ArrowsLeft color="#424551" />
    </div>
  );

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="custom-dots">0{i + 1}</div>,
  };

  return (
    <div className="heroHome__slider--wrapper">
      <Slider {...settings}>
        <div className="Slider1">
          <ContentHero />
        </div>
        <div className="Slider2">
          <ContentHero />
        </div>
        <div className="Slider3">
          <ContentHero />
        </div>
        <div className="Slider4">
          <ContentHero />
        </div>
      </Slider>
    </div>
  );
};
