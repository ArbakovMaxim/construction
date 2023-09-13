import { Construction } from "../../image/svg/Construction";
import { Paint } from "../../image/svg/Paint";
import { Panton } from "../../image/svg/Panton";
import { Plan } from "../../image/svg/Plan";
import { ServiceItem } from "./FuncServiceItem";
import "../../ui/container.css";
import "./ServicesHome.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ServicesHome = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section className="serviceHome__section">
      <div className="container">
        <h2 className="serviceHome__title">Our services</h2>
        <p className="serviceHome__text">
          Createx Construction Bureau is a construction giant with a full range
          of construction services.
        </p>
        <ul className="serviceHome__list">
          <li
            className="serviceHome__item"
            onClick={() => handleClick("/Services/Construction")}
          >
            <ServiceItem
              icon={Construction}
              text="Construction"
              className="serviceHome__item--fon1"
            />
          </li>
          <li
            className="serviceHome__item"
            onClick={() => handleClick("/Services/Development")}
          >
            <ServiceItem
              icon={Plan}
              text="Project Development"
              className="serviceHome__item--fon2"
            />
          </li>
          <li
            className="serviceHome__item"
            onClick={() => handleClick("/Services/Interior")}
          >
            <ServiceItem
              icon={Panton}
              text="Interior Design"
              className="serviceHome__item--fon3"
            />
          </li>
          <li
            className="serviceHome__item"
            onClick={() => handleClick("/Services/Repairs")}
          >
            <ServiceItem
              icon={Paint}
              text="Repairs"
              className="serviceHome__item--fon4"
            />
          </li>
        </ul>
        <div className="serviceHome__service--wrapper ">
          <h2 className="serviceHome__service--title">
            Learn more about our services
          </h2>
          <button className="serviceHome__service--button">
            <NavLink
              className="serviceHome__service--link"
              to="/Services"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              View services
            </NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};
