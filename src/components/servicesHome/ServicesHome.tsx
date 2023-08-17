import { Construction } from "../../image/svg/Construction";
import { Paint } from "../../image/svg/Paint";
import { Panton } from "../../image/svg/Panton";
import { Plan } from "../../image/svg/Plan";
import { ServiceItem } from "./FuncServiceItem";
import "../../ui/container.css";
import "./ServicesHome.css";

export const ServicesHome = () => {
  return (
    <section className="serviceHome__section">
      <div className="container">
        <h2 className="serviceHome__title">Our services</h2>
        <p className="serviceHome__text">
          Createx Construction Bureau is a construction giant with a full range
          of construction services.
        </p>
        <ul className="serviceHome__list">
          <li>
            <ServiceItem
              icon={Construction}
              text="Construction"
              className="serviceHome__item--fon1"
            />
          </li>
          <li>
            <ServiceItem
              icon={Plan}
              text="Project Development"
              className="serviceHome__item--fon2"
            />
          </li>
          <li>
            <ServiceItem
              icon={Panton}
              text="Interior Design"
              className="serviceHome__item--fon3"
            />
          </li>
          <li>
            <ServiceItem
              icon={Paint}
              text="Repairs"
              className="serviceHome__item--fon4"
            />
          </li>
        </ul>
        <div className="serviceHome__service--swrapper ">
          <h2 className="serviceHome__service--title">
            Learn more about our services
          </h2>
          <button className="serviceHome__service--button">
            View services
          </button>
        </div>
      </div>
    </section>
  );
};
