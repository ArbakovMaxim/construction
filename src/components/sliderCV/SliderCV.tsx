import Slider from "react-slick";
import "./SliderCV.css";
import "../hero/heroHomePage/HeroHome.css";
import { ArrowsRight } from "../../image/svg/ArrowsRight";
import { ArrowsLeft } from "../../image/svg/ArrowsLeft";

interface Props {
  images: string[];
}

interface CustomArrowProps {
  onClick?: () => void;
}

export const SliderCV = ({ images }: Props) => {
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

  const settings = {
    customPaging: function (i: number) {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a>
          <img
            className="sliderCV__img--mini"
            src={images[i]}
            alt={`Slide ${i}`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="wrapper__sliderCV">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="sliderCV__img"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
