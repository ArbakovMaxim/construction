import "../../ui/container.css";
import { SliderPartners } from "../sliderPartners/SliderPartners";
import { SliderReview } from "../sliderReview/SliderReview";
import PartnerFoto from "../../image/partnersFoto.jpg";
import "./PartnersHome.css";

export const PartnerHome = () => {
  return (
    <section className="partnersHome__section">
      <div className="container">
        <h2 className="partnersHome__title">Supported by 12+ partners</h2>
        <SliderPartners />
        <div className="partnersHome__wrapper--reviews">
          <div className="partnersHome__wrapper--reviewsSlider">
            <h2 className="partnersHome__title partnersHome__title--reviews">
              What our clients are saying
            </h2>
            <SliderReview />
          </div>
          <img
            src={PartnerFoto}
            alt="Foto partner"
            className="partnersHome__img"
          />
        </div>
      </div>
    </section>
  );
};
