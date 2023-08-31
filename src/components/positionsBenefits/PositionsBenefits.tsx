import "./PositionsBenefits.css";
import "../../ui/container.css";
import { Brain } from "../../image/svg/Brain";
import { Growth } from "../../image/svg/Growth";
import { Cash } from "../../image/svg/Cash";

export const PositionsBenefits = () => {
  return (
    <section className="positionsBenefits__section">
      <div className="container">
        <h2 className="positionsBenefits-title">Employee benefits</h2>
        <p className="positionsBenefits-text">
          There’s always room for talent.
        </p>
        <ul className="positionsBenefits__list">
          <li className="positionsBenefits__item">
            <Brain />
            <h3 className="positionsBenefits__values--title">Training</h3>
            <p className="positionsBenefits__values--text">
              Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
              velit nostrud aliquip sunt.
            </p>
          </li>
          <li className="positionsBenefits__item">
            <Growth />
            <h3 className="positionsBenefits__values--title">
              Professional Growth
            </h3>
            <p className="positionsBenefits__values--text">
              Anim reprehenderit sint voluptate exercitation adipisicing laborum
              adipisicing. Minim empor est ea.
            </p>
          </li>
          <li className="positionsBenefits__item">
            <Cash />
            <h3 className="positionsBenefits__values--title">Growing Salary</h3>
            <p className="positionsBenefits__values--text">
              Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
              voluptate ullamco proident ea ad.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
