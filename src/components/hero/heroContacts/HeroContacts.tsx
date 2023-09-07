import { NavLink } from "react-router-dom";
import "./HeroContacts.css";
import "../../../ui/container.css";
import "../../../ui/textStyled.css";

export const HeroContacts = () => {
  return (
    <section className="HeroContacts__section">
      <div className="container">
        <div className="HeroContacts__wraper--content">
          <p className="hero__link--text">
            <NavLink className="hero__link" to="/">
              Homepage
            </NavLink>
            <span className="hero__link--span">/</span>
            Contacts
          </p>
          <h1 className="HeroContacts__title heroTitle">Contacts</h1>
          <p className="hero__text">
            Contact us for all your construction needs. We always welcome any
            questions and comments.
          </p>
        </div>
      </div>
    </section>
  );
};
