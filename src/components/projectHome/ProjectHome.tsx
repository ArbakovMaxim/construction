import "../../ui/section.css";
import "../../ui/container.css";
import "./ProjectHome.css";
import { CardWork } from "../cardWork/CardWork";
import ourWork1 from "../../image/ourWork1.png";
import ourWork2 from "../../image/ourWork2.png";
import ourWork3 from "../../image/ourWork3.png";
import ourWork4 from "../../image/ourWork4.png";
import ourWork5 from "../../image/ourWork5.png";
import ourWork6 from "../../image/ourWork6.png";
import ourWork7 from "../../image/ourWork7.png";
import ourWork8 from "../../image/ourWork8.png";
import ourWork9 from "../../image/ourWork9.png";
import Slider from "react-slick";
import { ArrowsRight } from "../../image/svg/ArrowsRight";
import { ArrowsLeft } from "../../image/svg/ArrowsLeft";
import { useState } from "react";

interface CustomArrowProps {
  onClick?: () => void;
}

export const ProjectHome = () => {
  const [hoveredRight, setHoveredRight] = useState(false);
  const [hoveredLeft, setHoveredLeft] = useState(false);

  const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <div
      className="project__home--custom-arrow project__home--custom-arrowRight"
      onClick={onClick}
      onMouseEnter={() => setHoveredRight(true)}
      onMouseLeave={() => setHoveredRight(false)}
    >
      <ArrowsRight color={hoveredRight ? "#fff" : "#424551"} />
    </div>
  );

  const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <div
      className="project__home--custom-arrow project__home--custom-arrowLeft"
      onClick={onClick}
      onMouseEnter={() => setHoveredLeft(true)}
      onMouseLeave={() => setHoveredLeft(false)}
    >
      <ArrowsLeft color={hoveredLeft ? "#fff" : "#424551"} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <section className="section">
      <div className="container">
        <h2 className="project__home--title">
          Browse our selected projects <br /> and learn more about our work
        </h2>
        <Slider {...settings}>
          <div>
            <CardWork
              backgroundImage={ourWork1}
              title="Cubes Building"
              text="Business Centers"
            />
          </div>
          <div>
            <CardWork
              backgroundImage={ourWork2}
              title="Modern Cottage"
              text="Private houses"
            />
          </div>
          <div>
            <CardWork
              backgroundImage={ourWork3}
              title="Luxury Beach House"
              text="Private houses"
            />
          </div>
          <div>
            <CardWork
              backgroundImage={ourWork4}
              title="Modern Double Bedroom"
              text="Apartments & flats"
            />
          </div>
          <div>
            <CardWork
              backgroundImage={ourWork5}
              title="Kids Bedroom With Decorations"
              text="Apartments & flats"
            />
          </div>
          <div>
            <CardWork
              backgroundImage={ourWork6}
              title="The Pencil Building"
              text="Stores & Malls"
            />
          </div>
          <div>
            <CardWork
              backgroundImage={ourWork7}
              title="Red Finger Building"
              text="Business Centers"
            />
          </div>
          <div>
            <CardWork
              backgroundImage={ourWork8}
              title="Scandinavian Style Interior"
              text="Private houses"
            />
          </div>
          <div>
            <CardWork
              backgroundImage={ourWork9}
              title="Brown and Gray Painted House"
              text="Private houses"
            />
          </div>
        </Slider>
      </div>
      <div className="project__home--wrapperBottom">
        <h2 className="project__home--titleTwo">Explore all our works</h2>
        <button className="project__home--button">View portfolio</button>
      </div>
    </section>
  );
};
