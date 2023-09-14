import { Minus } from "../../image/svg/Minus";
import { Plus } from "../../image/svg/Plus";
import "../../ui/container.css";
import "./ServicesInteriorOffer.css";
import ServicesInterior from "../../image/ServiceInterior.jpg";

export const ServicesInteriorOffer = () => {
  return (
    <section className="servicesInteriorOffer__section">
      <div className="container">
        <div className="servicesInteriorOffer__wrapper">
          <div className="servicesInteriorOffer__wrapper--img">
            <img
              src={ServicesInterior}
              alt="Services Interior"
              className="servicesInteriorOffer__img"
            />
          </div>
          <div className="servicesInteriorOffer__wrapper--offer">
            <h2 className="servicesInteriorOffer__title">We offer</h2>
            <div className="servicesInteriorOffer__wrapper--minus">
              <div className="servicesInteriorOffer__wrappe--svgMinus">
                <Minus />
              </div>
              <div className="servicesInteriorOffer__wrapper--text">
                <h2 className="servicesInteriorOffer__title--PlusAndMinus">
                  Interior design of apartments
                </h2>
                <p className="servicesInteriorOffer__text">
                  Adipiscing nunc arcu enim elit mattis eu placerat proin.
                  Imperdiet elementum faucibus dignissim purus. Fusce parturient
                  diam magna ullamcorper morbi semper massa ac facilisis.
                </p>
              </div>
            </div>
            <div className="servicesInteriorOffer__wrapper--plus">
              <div className="servicesInteriorOffer__wrappe--svgPlus">
                <Plus />
              </div>
              <h2 className="servicesInteriorOffer__title--PlusAndMinus servicesInteriorOffer__title--Plus">
                Interior design of private houses
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
