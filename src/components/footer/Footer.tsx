import "./Footer.css";
import "../../ui/container.css";
import { Logo } from "../../image/svg/Logo";
import { FooterSocialBlock } from "./footerSocialBlock/FooterSocialBlock";
import { NavLink } from "react-router-dom";
import { SetStateAction, useState } from "react";
import { Heart } from "../../image/svg/Heart";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const up = () => {
    window.scrollTo(0, 0);
  };

  const handleEmailChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    console.log("Email:", email);
  };

  return (
    <footer className="footer__section">
      <div className="container">
        <div className="footer__topBlock">
          <div className="footer__wrapper--logoBlock ">
            <div className="footer__wrapper--logo">
              <div style={{ cursor: "pointer" }}>
                <NavLink to="/" onClick={up}>
                  <Logo color="#fff" />
                </NavLink>
              </div>
              <FooterSocialBlock />
            </div>
            <p className="footer__socialBlock--text">
              Createx Construction Bureau has been successfully operating in the
              USA construction market since 2000. We are proud to offer you
              quality construction and exemplary service. Our mission is to set
              the highest standards for construction sphere.
            </p>
          </div>
          <div className="footer__input--wrapperBlock">
            <h2 className="footer__touch--title">Let’s stay in touch</h2>
            <div className="footer__input--wrapper">
              <input
                autoComplete="email"
                id="email"
                className="footer__input"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={handleEmailChange}
              />
              <button className="footer__button" onClick={handleSubscribe}>
                subscribe
              </button>
            </div>
            <p className="footer__input--text">
              *Subscribe to our newsletter to receive communications and early
              updates from Createx Construction Bureau.
            </p>
          </div>
        </div>
        <div className="footer__bot--wrapper">
          <div>
            <h2 className="footer__button--title">HEAD OFFICE</h2>
            <ul className="footer__adresse--list">
              <li className="footer__adresse--item">
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1IiQ_TjXiV3-jt2PcUa0o9hFqZLA&hl=ru&ll=40.73853244735144%2C-73.94864082061513&z=12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__button--text"
                >
                  Address:
                  <span className="footer__button--span">
                    8502 Preston Rd. Inglewood, New York
                  </span>
                </a>
              </li>
              <li className="footer__adresse--item">
                <a
                  href="tel:(405) 555-0128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__button--text"
                >
                  Call:
                  <span className="footer__button--span">(405) 555-0128</span>
                </a>
              </li>
              <li className="footer__adresse--item">
                <a
                  href="mailto:hello@createx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__button--text"
                >
                  Email:
                  <span className="footer__button--span">
                    hello@createx.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer__button--title">WHO WE ARE</h2>
            <ul className="footer__adresse--list">
              <li className="footer__adresse--item">
                <NavLink to="/About" onClick={up}>
                  <span className="footer__button--text footer__button--span">
                    About Us
                  </span>
                </NavLink>
              </li>
              <li className="footer__adresse--item">
                <NavLink to="/About/Positions" onClick={up}>
                  <span className="footer__button--text footer__button--span">
                    Available Positions
                  </span>
                </NavLink>
              </li>
              <li className="footer__adresse--item">
                <NavLink to="/" onClick={up}>
                  <span className="footer__button--text footer__button--span">
                    Contacts
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer__button--title">OUR EXPERIENCE</h2>
            <ul className="footer__adresse--list">
              <li className="footer__adresse--item">
                <NavLink to="/Services" onClick={up}>
                  <span className="footer__button--text footer__button--span">
                    Services
                  </span>
                </NavLink>
              </li>
              <li className="footer__adresse--item">
                <NavLink to="/Work" onClick={up}>
                  <span className="footer__button--text footer__button--span">
                    Work
                  </span>
                </NavLink>
              </li>
              <li className="footer__adresse--item">
                <NavLink to="/" onClick={up}>
                  <span className="footer__button--text footer__button--span">
                    News
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__reserved ">
          © All rights reserved. Made with
          <span className="footer__reserved--span">
            <Heart />
          </span>
          by Createx Studio
        </p>
      </div>
    </footer>
  );
};
