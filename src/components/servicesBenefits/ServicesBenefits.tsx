import { NavLink } from "react-router-dom";
import { Camera } from "../../image/svg/Camera";
import { Helmet } from "../../image/svg/Helmet";
import { Contract } from "../../image/svg/Сontract";
import "../../ui/container.css";
import "./ServicesBenefits.css";

export const ServicesBenefits = () => {
  return (
    <section className="servicesBenefits__section">
      <div className="container servicesBenefits__conteiner">
        <h2 className="servicesBenefits__title">Our benefits</h2>
        <p className="servicesBenefits__text">
          Our mission is to set the highest standards for construction sphere.
        </p>
        <ul className="servicesBenefits__list">
          <li className="servicesBenefits__item">
            <Contract />
            <h3 className="servicesBenefits__item--title">
              Fixed Terms & Cost
            </h3>
            <p className="servicesBenefits__item--text">
              Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
              velit nostrud aliquip sunt.
            </p>
          </li>
          <li className="servicesBenefits__item servicesBenefits__item--centr">
            <Helmet />
            <h3 className="servicesBenefits__item--title">Qualified Workers</h3>
            <p className="servicesBenefits__item--text">
              Anim reprehenderit sint voluptate exercitation adipisicing laborum
              adipisicing. Minim empor est ea.
            </p>
          </li>
          <li className="servicesBenefits__item">
            <Camera />
            <h3 className="servicesBenefits__item--title">
              Supervision & Control
            </h3>
            <p className="servicesBenefits__item--text">
              Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
              voluptate ullamco proident ea ad.
            </p>
          </li>
        </ul>
        <button className="servicesBenefits__button">
          <NavLink className="servicesBenefits__link" to="/">
            Discuss a project
          </NavLink>
        </button>
      </div>
    </section>
  );
};
