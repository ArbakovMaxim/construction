import { NavLink } from "react-router-dom";
import "../../../ui/container.css";
import "../../../ui/textStyled.css";
import "./HeroAboutUS.css";

export const HeroAboutUS = () => {
  return (
    <section className="heroAboutUS__section">
      <div className="container">
        <div className="heroAboutUS__wraper--content">
          <p className="hero__link--text">
            <NavLink className="hero__link" to="/">
              Homepage
            </NavLink>
            <span className="hero__link--span">/</span>
            About Us
          </p>
          <h1 className="heroAboutUS__title heroTitle">ABOUT US</h1>
          <p className="hero__text">
            Createx Construction Bureau has been successfully operating in the
            USA construction market since 2000. We are proud to offer you
            quality construction and exemplary service.
          </p>
        </div>
      </div>
    </section>
  );
};
