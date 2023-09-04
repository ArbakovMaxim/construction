import { NavLink } from "react-router-dom";
import "../../../ui/container.css";
import "../../../ui/textStyled.css";
import "../heroServices/HeroServices.css";
import "./HeroPortfolio.css";

export const HeroPortfolio = () => {
  return (
    <section className="heroPortfolio__section">
      <div className="container">
        <div className="heroPortfolio__wraper--content">
          <p className="hero__link--text">
            <NavLink className="hero__link" to="/">
              Homepage
            </NavLink>
            <span className="hero__link--span ">/</span>
            Work
          </p>
          <h1 className="heroPortfolio__title heroTitle">OUR WORK</h1>
          <p className="hero__text">
            Our portfolio represents 20 years of construction experience backed
            by a passion for perfect client service, quality and innovations in
            consctuction industry.
          </p>
        </div>
      </div>
    </section>
  );
};
