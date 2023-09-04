import "./HeroServices.css";
import "../../../ui/container.css";
import "../../../ui/textStyled.css";
import { NavLink } from "react-router-dom";

export const HeroServices = () => {
  return (
    <section className="heroServices__section">
      <div className="container">
        <div className="heroServices__wraper--content">
          <p className="hero__link--text">
            <NavLink className="hero__link" to="/">
              Homepage
            </NavLink>
            <span className="hero__link--span ">/</span>Services
          </p>
          <h1 className="heroServices__title heroTitle">SERVICES</h1>
          <p className="hero__text">
            If you are looking for a full-service construction company, look
            to Createx Construction Bureau. We are doing our best
            to be a partner for all of your construction needs.
          </p>
        </div>
      </div>
    </section>
  );
};
