import { NavLink } from "react-router-dom";
import "../../../ui/container.css";
import "./HeroAboutUS.css";

export const HeroAboutUS = () => {
  return (
    <section className="heroAboutUS__section">
      <div className="container">
        <div className="heroAboutUS__wraper--content">
          <p className="heroAboutUS__link--text">
            <NavLink className="heroAboutUS__link" to="/">
              Homepage
            </NavLink>
            <span className="heroAboutUS__link--span ">/</span>
            About Us
          </p>
          <h1 className="heroAboutUS__title">ABOUT US</h1>
          <p className="heroAboutUS__text">
            Createx Construction Bureau has been successfully operating in the
            USA construction market since 2000. We are proud to offer you
            quality construction and exemplary service.
          </p>
        </div>
      </div>
    </section>
  );
};
