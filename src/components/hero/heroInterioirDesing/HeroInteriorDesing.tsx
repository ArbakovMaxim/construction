import { NavLink } from "react-router-dom";
import "../../../ui/container.css";
import "../heroServices/HeroServices.css";
import "./HeroInteriorDesing.css";

interface Props {
  link: string;
  name: string;
}

export const HeroInteriorDesing = ({ link, name }: Props) => {
  return (
    <section className="heroInteriorDesing__section--InteriorDesing">
      <div className="container">
        <div className="heroServices__wraper--content">
          <p className="heroServices__link--text">
            <NavLink className="heroServices__link" to="/">
              Homepage
            </NavLink>
            <span className="heroServices__link--span ">/</span>
            <NavLink className="heroServices__link" to="/Services">
              Services
            </NavLink>
            <span className="heroServices__link--span ">/</span>
            {link}
          </p>
          <h1 className="heroServices__title">{name}</h1>
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
