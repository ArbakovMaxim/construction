import { NavLink } from "react-router-dom";
import "../../../ui/container.css";
import "../heroServices/HeroServices.css";
import "./HeroPortfolio.css";

export const HeroPortfolio = () => {
  return (
    <section className="heroServices__section--InteriorDesing">
      <div className="container">
        <div className="heroServices__wraper--content">
          <p className="heroServices__link--text">
            <NavLink className="heroServices__link" to="/">
              Homepage
            </NavLink>
            <span className="heroServices__link--span ">/</span>
            Work
          </p>
          <h1 className="heroServices__title">OUR WORK</h1>
          <p className="heroServices__text">
            Our portfolio represents 20 years of construction experience backed
            by a passion for perfect client service, quality and innovations in
            consctuction industry.
          </p>
        </div>
      </div>
    </section>
  );
};
