import "../../ui/container.css";
import "./PartnersHome.css";
import Slider from "react-slick";
import PartnersLogo1 from "../../image/Partner1.png";
import PartnersLogo2 from "../../image/Partner2.png";
import PartnersLogo3 from "../../image/Partner3.png";
import PartnersLogo4 from "../../image/Partner4.png";
import PartnersLogo5 from "../../image/Partner5.png";
import PartnersLogo6 from "../../image/Partner6.png";
import PartnersLogo7 from "../../image/Partner7.png";
import PartnersLogo8 from "../../image/Partner8.png";
import PartnersLogo9 from "../../image/Partner9.png";
import PartnersLogo10 from "../../image/Partner10.png";
import PartnersLogo11 from "../../image/Partner11.png";
import PartnersLogo12 from "../../image/Partner12.png";

export const PartnerHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrow: false,
  };

  return (
    <section className="partnersHome__section">
      <div className="container">
        <h2 className="partnersHome__title">Supported by 12+ partners</h2>
        <Slider {...settings}>
          <div className="partnersHome__slide ">
            <img src={PartnersLogo1} alt="Logo1" />
          </div>
          <div className="partnersHome__slide ">
            <img src={PartnersLogo2} alt="Logo2" />
          </div>
          <div className="partnersHome__slide ">
            <img src={PartnersLogo3} alt="Logo3" />
          </div>
          <div className="partnersHome__slide ">
            <img src={PartnersLogo4} alt="Logo4" />
          </div>
          <div className="partnersHome__slide ">
            <img src={PartnersLogo5} alt="Logo5" />
          </div>
          <div className="partnersHome__slide ">
            <img src={PartnersLogo6} alt="Logo6" />
          </div>
          <div className="partnersHome__slide ">
            <img src={PartnersLogo7} alt="Logo7" />
          </div>
          <div className="partnersHome__slide ">
            <img src={PartnersLogo8} alt="Logo8" />
          </div>
          <div className="partnersHome__slide ">
            <img src={PartnersLogo9} alt="Logo9" />
          </div>
          <div className="partnersHome__slide ">
            <img src={PartnersLogo10} alt="Logo10" />
          </div>
          <div className="partnersHome__slide ">
            <img src={PartnersLogo11} alt="Logo11" />
          </div>
          <div className="partnersHome__slide ">
            <img src={PartnersLogo12} alt="Logo12" />
          </div>
        </Slider>
        <div className="partnersHome__wrapper--reviews">
          <div>
            <h2 className="partnersHome__title">What our clients are saying</h2>
            <Slider {...settings}>
              <div></div>
              <div></div>
              <div></div>
            </Slider>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
