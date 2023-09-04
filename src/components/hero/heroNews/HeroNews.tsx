import { NavLink } from "react-router-dom";
import "../../../ui/container.css";
import "../../../ui/textStyled.css";
import "./HeroNews.css";

export const HeroNews = () => {
  return (
    <section className="heroNews__section">
      <div className="container">
        <div className="heroNews__wraper--content">
          <p className="hero__link--text">
            <NavLink className="hero__link" to="/">
              Homepage
            </NavLink>
            <span className="hero__link--span">/</span>
            News
          </p>
          <h1 className="heroNews__title heroTitle">NEWS</h1>
          <p className="hero__text">
            Stay tuned with our news, expert tips and articles.
          </p>
        </div>
      </div>
    </section>
  );
};
