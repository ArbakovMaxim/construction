import { Hand } from "../../image/svg/Hand";
import { LikeRed } from "../../image/svg/LikeRed";
import { Slippers } from "../../image/svg/Slippers";
import "../../ui/container.css";
import "./CompaniValue.css";

interface Props {
  backgroundColor: string;
  padding: string;
}

export const CompaniValue = ({ backgroundColor, padding }: Props) => {
  return (
    <section
      style={{ backgroundColor: `${backgroundColor}`, padding: `${padding}` }}
    >
      <div className="container">
        <h2 className="companiValue-title">Our core values</h2>
        <p className="companiValue-text">
          Our mission is to set the highest standards for construction sphere.
        </p>
        <ul className="companiValue__list">
          <li className="companiValue__item">
            <LikeRed />
            <h3 className="companiValue__values--title">Quality</h3>
            <p className="companiValue__values--text">
              Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
              velit nostrud aliquip sunt.
            </p>
          </li>
          <li className="companiValue__item">
            <Hand />
            <h3 className="companiValue__values--title">Safety</h3>
            <p className="companiValue__values--text">
              Anim reprehenderit sint voluptate exercitation adipisicing laborum
              adipisicing. Minim empor est ea.
            </p>
          </li>
          <li className="companiValue__item">
            <Slippers />
            <h3 className="companiValue__values--title">Comfort</h3>
            <p className="companiValue__values--text">
              Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
              voluptate ullamco proident ea ad.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
