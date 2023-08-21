import "./ServicesDoIT.css";
import "../../ui/container.css";
import { Line } from "../../image/svg/Line";

export const ServicesDoIT = () => {
  return (
    <section className="servicesDoIT__section">
      <div className="container">
        <h2 className="servicesDoIT__title">That’s how we do it</h2>
        <ul className="servicesDoIT__list">
          <li className="servicesDoIT__item">
            <div className="servicesDoIT__number--wrapper">
              <h2 className="servicesDoIT__number">01</h2>
              <Line />
            </div>
            <h3 className="servicesDoIT__title--item">Work Estimate</h3>
            <p className="servicesDoIT__text--item">
              Culpa nostrud commodo ea consequat aliquip reprehenderit.
            </p>
          </li>
          <li className="servicesDoIT__item">
            <div className="servicesDoIT__number--wrapper">
              <h2 className="servicesDoIT__number">02</h2>
              <Line />
            </div>
            <h3 className="servicesDoIT__title--item">Contract</h3>
            <p className="servicesDoIT__text--item">
              Laoreet ultrices curabitur luctus quisque consequat. Leo lorem
              velit imperdiet auctor et tempor.
            </p>
          </li>
          <li className="servicesDoIT__item">
            <div className="servicesDoIT__number--wrapper">
              <h2 className="servicesDoIT__number">03</h2>
              <Line />
            </div>
            <h3 className="servicesDoIT__title--item">Mobilization </h3>
            <p className="servicesDoIT__text--item">
              Odio massa scelerisque purus arcu sed velit eleifend cursus leo.
            </p>
          </li>
          <li className="servicesDoIT__item">
            <h2 className="servicesDoIT__number">04</h2>
            <h3 className="servicesDoIT__title--item">Construction Work</h3>
            <p className="servicesDoIT__text--item">
              Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore
              dolore et ad et veniam ad deserunt.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
