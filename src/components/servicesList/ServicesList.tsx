import "./ServicesList.css";
import "../../ui/container.css";

import ServiceHomeConstruction from "../../image/ServiceHomeConstruction.jpg";
import ServiceHomeInterior from "../../image/ServiceHomeInterior.jpg";
import ServiceHomeProject from "../../image/ServiceHomeProject.jpg";
import ServiceHomeRepair from "../../image/ServiceHomeRepair.jpg";
import { NavLink } from "react-router-dom";

export const ServicesList = () => {
  return (
    <section className="services__section">
      <div className="container">
        <ul>
          <li className="services__item">
            <img
              src={ServiceHomeConstruction}
              alt="Construction"
              className="services__img"
            />
            <div className="services__wrapper-content services__wrapper-contentAdd">
              <h2 className="services__title">Construction</h2>
              <p className="services__text">
                Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius
                consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper
                id sodales ultricies sed ut ut augue. Mattis habitant venenatis,
                gravida posuere massa ac interdum. Eget aliquam dignissim ut
                vestibulum.
              </p>
              <button className="services__button">
                <NavLink className="services__link" to="/">
                  Learn more
                </NavLink>
              </button>
            </div>
          </li>
          <li className="services__item services__wrapper--bg2">
            <img
              src={ServiceHomeProject}
              alt="Project"
              className="services__img"
            />
            <div className="services__wrapper-content services__wrapper-contentEvent">
              <h2 className="services__title">Project Development</h2>
              <p className="services__text">
                Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet
                viverra in. Est nulla lectus purus tincidunt massa tortor.
                Hendrerit vulputate elementum blandit massa vitae amet felis
                eget.
              </p>
              <button className="services__button">
                <NavLink className="services__link" to="/">
                  Learn more
                </NavLink>
              </button>
            </div>
          </li>
          <li className="services__item">
            <img
              src={ServiceHomeInterior}
              alt="Interior"
              className="services__img"
            />
            <div className="services__wrapper-content services__wrapper-contentAdd">
              <h2 className="services__title">Interior Design</h2>
              <p className="services__text">
                Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
                lacus, turpis accumsan gravida. Aliquet mattis dignissim massa
                sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel
                eget molestie. Turpis enim arcu, amet donec massa pellentesque
                nulla duis. Arcu dictum metus sed purus senectus faucibus eget
                elementum pretium.
              </p>
              <button className="services__button">
                <NavLink className="services__link" to="/Services/Interior">
                  Learn more
                </NavLink>
              </button>
            </div>
          </li>
          <li className="services__item services__wrapper--bg4">
            <img
              src={ServiceHomeRepair}
              alt="Repair"
              className="services__img"
            />
            <div className="services__wrapper-content services__wrapper-contentEvent">
              <h2 className="services__title">Repairs</h2>
              <p className="services__text">
                Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum
                commodo, tortor gravida pretium, orci. Nunc sit sollicitudin id
                egestas mattis. Turpis viverra nec urna ultrices urna.
              </p>
              <button className="services__button">
                <NavLink className="services__link" to="/">
                  Learn more
                </NavLink>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
