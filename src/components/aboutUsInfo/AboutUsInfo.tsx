import "./AboutUsInfo.css";
import "../../ui/container.css";
import { Panton } from "../../image/svg/Panton";
import { Paint } from "../../image/svg/Paint";
import { Helmet } from "../../image/svg/Helmet";
import { LikeRed } from "../../image/svg/LikeRed";

export const AboutUsInfo = () => {
  return (
    <section className="aboutUsInfo__section">
      <div className="container">
        <ul className="aboutUsInfo__list">
          <li className="aboutUsInfo__item">
            <LikeRed color="#9A9CA5" width="48" height="48" />
            <p className="aboutUsInfo__title">60%</p>
            <p className="aboutUsInfo__text">
              Clients on the recommendation
              <br /> of friends
            </p>
          </li>
          <li className="aboutUsInfo__item">
            <Paint hovered={true} width="48" height="48" greyColor={true} />
            <p className="aboutUsInfo__title">2400+</p>
            <p className="aboutUsInfo__text">Apartments renovated</p>
          </li>
          <li className="aboutUsInfo__item">
            <Helmet color="#9A9CA5" height="48" />
            <p className="aboutUsInfo__title">670</p>
            <p className="aboutUsInfo__text">Qualified specialists</p>
          </li>
          <li className="aboutUsInfo__item">
            <Panton hovered={true} width="48" height="48" greyColor={true} />
            <p className="aboutUsInfo__title">150000+ m2</p>
            <p className="aboutUsInfo__text">Finishing work was carried out</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
