import "../../ui/container.css";
import "./AboutUsPartners.css";
import Partner1 from "../../image/Partner1.png";
import Partner2 from "../../image/Partner2.png";
import Partner3 from "../../image/Partner3.png";
import Partner4 from "../../image/Partner4.png";
import Partner5 from "../../image/Partner5.png";
import Partner6 from "../../image/Partner6.png";
import Partner7 from "../../image/Partner7.png";
import Partner8 from "../../image/Partner8.png";
import Partner9 from "../../image/Partner9.png";
import Partner10 from "../../image/Partner10.png";
import Partner11 from "../../image/Partner11.png";
import Partner12 from "../../image/Partner12.png";

export const AboutUsPartners = () => {
  return (
    <section className="aboutUsPartners__section">
      <div className="container">
        <h2 className="aboutUsPartners__title">Our partners</h2>
        <p className="aboutUsPartners__text">
          We are supported by 12+ industry bodies and media partners
        </p>
        <ul className="aboutUsPartners__list">
          <li className="aboutUsPartners__item">
            <img src={Partner1} alt="Partner foto 1" />
          </li>
          <li className="aboutUsPartners__item">
            <img src={Partner2} alt="Partner foto 2" />
          </li>
          <li className="aboutUsPartners__item">
            <img src={Partner3} alt="Partner foto 3" />
          </li>
          <li className="aboutUsPartners__item">
            <img src={Partner4} alt="Partner foto 4" />
          </li>
          <li className="aboutUsPartners__item">
            <img src={Partner5} alt="Partner foto 5" />
          </li>
          <li className="aboutUsPartners__item">
            <img src={Partner6} alt="Partner foto 6" />
          </li>
          <li className="aboutUsPartners__item">
            <img src={Partner7} alt="Partner foto 7" />
          </li>
          <li className="aboutUsPartners__item">
            <img src={Partner8} alt="Partner foto 8" />
          </li>
          <li className="aboutUsPartners__item">
            <img src={Partner9} alt="Partner foto 9" />
          </li>
          <li className="aboutUsPartners__item">
            <img src={Partner10} alt="Partner foto 10" />
          </li>
          <li className="aboutUsPartners__item">
            <img src={Partner11} alt="Partner foto 11" />
          </li>
          <li className="aboutUsPartners__item">
            <img src={Partner12} alt="Partner foto 12" />
          </li>
        </ul>
      </div>
    </section>
  );
};
