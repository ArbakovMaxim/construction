import { NavLink } from "react-router-dom";
import "../../../ui/container.css";
import "../../../ui/textStyled.css";
import "./HeroPositions.css";

export const HeroPositions = () => {
  return (
    <section className="heroPositions__section">
      <div className="container">
        <div className="heroPositions__wraper--content">
          <p className="hero__link--text">
            <NavLink className="hero__link" to="/">
              Homepage
            </NavLink>
            <span className="hero__link--span ">/</span>
            <NavLink className="hero__link" to="/About">
              About Us
            </NavLink>
            <span className="hero__link--span ">/</span>
            Available Positions
          </p>
          <h1 className="heroPositions__title heroTitle">
            AVAILABLE POSITIONS
          </h1>
          <p className="hero__text">
            Build your career with Createx Construction Bureau.
          </p>
        </div>
      </div>
    </section>
  );
};
