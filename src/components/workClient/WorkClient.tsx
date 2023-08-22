import "./WorkClient.css";
import "../../ui/container.css";
import { SliderReview } from "../sliderReview/SliderReview";
import PartnerFoto from "../../image/partnersFoto.jpg";
import { SliderPartners } from "../sliderPartners/SliderPartners";

export const WorkClient = () => {
  return (
    <>
      <section className="work__section">
        <div className="container">
          <div className="work__wrapper--reviews">
            <div className="work__wrapper--reviewsSlider">
              <h2 className="work__title work__title--reviews">
                What our clients are saying
              </h2>
              <SliderReview />
            </div>
            <img src={PartnerFoto} alt="Foto partner" className="work__img" />
          </div>
        </div>
      </section>
      <section className="workClients__section">
        <div className="container">
          <h2 className="work__title">Our clients</h2>
          <SliderPartners />
        </div>
      </section>
    </>
  );
};
