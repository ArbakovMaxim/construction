import { NavLink } from "react-router-dom";
import "../../../ui/container.css";
import "./HeroNews.css";

export const HeroNews = () => {
  return (
    <section className="heroNews__section">
      <div className="container">
        <div className="heroNews__wraper--content">
          <p className="heroNews__link--text">
            <NavLink className="heroNews__link" to="/">
              Homepage
            </NavLink>
            <span className="heroNews__link--span ">/</span>
            News
          </p>
          <h1 className="heroNews__title">NEWS</h1>
          <p className="heroNews__text">
            Stay tuned with our news, expert tips and articles.
          </p>
        </div>
      </div>
    </section>
  );
};
