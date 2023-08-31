import "./PositionsVacancies.css";
import "../../ui/container.css";
import { MapMarker } from "../../image/svg/MapMarker";
import { Clock } from "../../image/svg/Clock";

export const PositionsVacancies = () => {
  return (
    <section className="positionsVacancies__section">
      <div className="container positionsVacancies__wrapper">
        <div>
          <ul>
            <li className="positionsVacancies__items">
              <div>
                <div className="positionsVacancies__wrapper--info">
                  <MapMarker />
                  <p className="positionsVacancies__text">New York</p>
                  <p className="positionsVacancies__text--drop">|</p>
                  <Clock />
                  <p className="positionsVacancies__text">Full Time</p>
                </div>
                <p className="positionsVacancies__namePosition">
                  Heavy Equipment Operator
                </p>
              </div>
              <div>
                <button className="positionsVacancies__btn">Apply now</button>
              </div>
            </li>

            <li className="positionsVacancies__items">
              <div>
                <div className="positionsVacancies__wrapper--info">
                  <MapMarker />
                  <p className="positionsVacancies__text">San Francisco</p>
                  <p className="positionsVacancies__text--drop">|</p>
                  <Clock />
                  <p className="positionsVacancies__text">Full Time</p>
                </div>
                <p className="positionsVacancies__namePosition">
                  Financial Compliance Analyst
                </p>
              </div>
              <div>
                <button className="positionsVacancies__btn">Apply now</button>
              </div>
            </li>

            <li className="positionsVacancies__items">
              <div>
                <div className="positionsVacancies__wrapper--info">
                  <MapMarker />
                  <p className="positionsVacancies__text">New Jersey</p>
                  <p className="positionsVacancies__text--drop">|</p>
                  <Clock />
                  <p className="positionsVacancies__text">Full Time</p>
                </div>
                <p className="positionsVacancies__namePosition">
                  Project Manager - Buildings
                </p>
              </div>
              <div>
                <button className="positionsVacancies__btn">Apply now</button>
              </div>
            </li>

            <li className="positionsVacancies__items">
              <div>
                <div className="positionsVacancies__wrapper--info">
                  <MapMarker />
                  <p className="positionsVacancies__text">New York</p>
                  <p className="positionsVacancies__text--drop">|</p>
                  <Clock />
                  <p className="positionsVacancies__text">Part Time</p>
                </div>
                <p className="positionsVacancies__namePosition">
                  Environment Specialist
                </p>
              </div>
              <div>
                <button className="positionsVacancies__btn">Apply now</button>
              </div>
            </li>

            <li className="positionsVacancies__items">
              <div>
                <div className="positionsVacancies__wrapper--info">
                  <MapMarker />
                  <p className="positionsVacancies__text">New York</p>
                  <p className="positionsVacancies__text--drop">|</p>
                  <Clock />
                  <p className="positionsVacancies__text">Full Time</p>
                </div>
                <p className="positionsVacancies__namePosition">Accountant</p>
              </div>
              <div>
                <button className="positionsVacancies__btn">Apply now</button>
              </div>
            </li>
          </ul>
        </div>

        <div className="positionsVacancies__wraper--cv">
          <h3 className="positionsVacancies__title">
            Didn’t find what you were looking for?
          </h3>
          <p className="positionsVacancies__info--cv">
            Send your CV or subscribe to our newsletter to receive information
            about new vacancies.
          </p>
          <div className="positionsVacancies__wrapper--btn">
            <button className="positionsVacancies__btn--newsletter  positionsVacancies__btn--subscribe">
              subscribe
            </button>
            <button className="positionsVacancies__btn--newsletter positionsVacancies__btn--cv">
              send cv
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
