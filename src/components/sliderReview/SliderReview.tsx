import "./SliderReview.css";
import Slider from "react-slick";
import clients1 from "../../image/clients1.png";
import clients2 from "../../image/clients2.png";
import clients3 from "../../image/clients3.jpg";
import { ArrowsRight } from "../../image/svg/ArrowsRight";
import { ArrowsLeft } from "../../image/svg/ArrowsLeft";
import { useState } from "react";

interface CustomArrowProps {
  onClick?: () => void;
}

export const SliderReview = () => {
  const [hoveredRight, setHoveredRight] = useState(false);
  const [hoveredLeft, setHoveredLeft] = useState(false);

  const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <div
      className="SliderReview__arows--right project__home--custom-arrow"
      onClick={onClick}
      onMouseEnter={() => setHoveredRight(true)}
      onMouseLeave={() => setHoveredRight(false)}
    >
      <ArrowsRight color={hoveredRight ? "#fff" : "#424551"} />
    </div>
  );

  const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <div
      className="SliderReview__arows--left project__home--custom-arrow"
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
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={clients1} alt="clients" className="sliderReview__img" />
        <p className="sliderReview__text">
          Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod
          enim. Consectetur magna cillum consequat minim laboris cillum laboris
          voluptate minim proident exercitation ullamco.
        </p>
        <p className="sliderReview__name">Shawn Edwards</p>
        <p className="sliderReview__companyName">Position, Company name</p>
      </div>
      <div>
        <img src={clients2} alt="clients" className="sliderReview__img" />
        <p className="sliderReview__text">
          Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod
          enim. Consectetur magna cillum consequat minim laboris cillum laboris
          voluptate minim proident exercitation ullamco.
        </p>
        <p className="sliderReview__name">Sara Conar</p>
        <p className="sliderReview__companyName">Position, Company name</p>
      </div>
      <div>
        <img src={clients3} alt="clients" className="sliderReview__img" />
        <p className="sliderReview__text">
          Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod
          enim. Consectetur magna cillum consequat minim laboris cillum laboris
          voluptate minim proident exercitation ullamco.
        </p>
        <p className="sliderReview__name">Shawn Edwards</p>
        <p className="sliderReview__companyName">Position, Company name</p>
      </div>
    </Slider>
  );
};
