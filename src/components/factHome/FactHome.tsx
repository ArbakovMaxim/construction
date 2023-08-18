import "../../ui/container.css";
import { Circle } from "../circle/Circle";
import "./FactHome.css";

export const FactHome = () => {
  return (
    <section className="factHome__section">
      <div className="container">
        <h2 className="factHome__title">Some facts and figures</h2>
        <ul className="factHome__list">
          <li className="factHome__item">
            <Circle
              showPercent={true}
              value={98}
              maxValue={110}
              radius={70}
              strokeWidth={10}
              color="#F89828"
            />
            <p className="factHome__text">Totally satisfied clients</p>
          </li>
          <li className="factHome__item">
            <Circle
              value={20}
              maxValue={30}
              radius={70}
              strokeWidth={10}
              color="#F52F6E"
            />
            <p className="factHome__text">Years of experience</p>
          </li>
          <li className="factHome__item">
            <Circle
              value={9452}
              maxValue={12000}
              radius={70}
              strokeWidth={10}
              color="#5A87FC"
            />
            <p className="factHome__text">Working hours spent</p>
          </li>
          <li className="factHome__item">
            <Circle
              showPercent={true}
              value={100}
              maxValue={100}
              radius={70}
              strokeWidth={10}
              color="#03CEA4"
            />
            <p className="factHome__text">Succeeded projects</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
