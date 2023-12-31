import "../../ui/section.css";
import "../../ui/container.css";
import "./ProjectSlider.css";
import { CardWork } from "../cardWork/CardWork";
import Slider from "react-slick";
import { ArrowsRight } from "../../image/svg/ArrowsRight";
import { ArrowsLeft } from "../../image/svg/ArrowsLeft";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useResize } from "../../hook/useResize";

interface CustomArrowProps {
  onClick?: () => void;
}

interface WorkData {
  image: string;
  text: string;
  title: string;
  id: string;
}

interface Props {
  works: WorkData[];
  title: string;
}

export const ProjectSlider = ({ works, title }: Props) => {
  const { isScreenXxxl, isScreenTable } = useResize();
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

  const slidesToShow = isScreenXxxl ? 3 : isScreenTable ? 2 : 1;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <section className="section">
      <div className="container">
        <h2
          className="project__home--title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <Slider {...settings}>
          {works.map((work, index) => (
            <div key={index}>
              <CardWork
                backgroundImage={work.image}
                title={work.title}
                text={work.text}
                id={work.id}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="project__home--wrapperBottom">
        <h2 className="project__home--titleTwo">Explore all our works</h2>
        <button className="project__home--button">
          <NavLink
            className="project__home__portfolio--link"
            to="/Work"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            View portfolio
          </NavLink>
        </button>
      </div>
    </section>
  );
};
