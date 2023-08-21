import "./HeroServices.css";
import "../../../ui/container.css";
import { NavLink } from "react-router-dom";

export const HeroServices = () => {
  return (
    <section className="heroServices__section">
      <div className="container">
        <div className="heroServices__wraper--content">
          <p className="heroServices__link--text">
            <NavLink className="heroServices__link" to="/">
              Homepage
            </NavLink>
            <span className="heroServices__link--span ">/</span>Services
          </p>
          <h1 className="heroServices__title">SERVICES</h1>
          <p className="heroServices__text">
            If you are looking for a full-service construction company, look
            to Createx Construction Bureau. We are doing our best
            to be a partner for all of your construction needs.
          </p>
        </div>
      </div>
    </section>
  );
};
