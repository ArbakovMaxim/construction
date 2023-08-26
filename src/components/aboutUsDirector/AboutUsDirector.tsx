import "./AboutUsDirector.css";
import "../../ui/container.css";
import Direct from "../../image/Director.jpg";
import { Quotes } from "../../image/svg/Quotes";
import { Signature } from "../../image/svg/Signature";

export const AboutUsDirector = () => {
  return (
    <section className="aboutUsDirector__section">
      <div className="container">
        <div className="aboutUsDirector__wrapper">
          <div className="aboutUsDirector__wrapper--img">
            <img src={Direct} alt="" />
          </div>
          <div className="aboutUsDirector__wrapper--message">
            <div className="aboutUsDirector__wrapper--text">
              <div style={{ width: "28px", height: "20px" }}>
                <Quotes />
              </div>
              <p className="aboutUsDirector__text">
                Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue
                in. Sed aliquet in egestas hac at proin sed quam. Etiam aliquet
                sagittis non, massa cum pulvinar. Et in leo, tempus purus
                vestibulum ut blandit et mi. Odio massa purus vel praesent arcu
                enim elit felis viverra.
                <br /> <br /> Magna aliquam interdum mattis ipsum arcu. Elit
                odio elit viverra quis metus amet eleifend amet. Vet suspendisse
                faucibus tempor ipsum integer.
              </p>
            </div>
            <div className="aboutUsDirector__wrapper--name">
              <div className="aboutUsDirector__wrapper--info">
                <p className="aboutUsDirector__text--name">
                  Courtney Alexander
                </p>
                <p className="aboutUsDirector__text--CEO">
                  CEO - Createx Construction Bureau
                </p>
              </div>
              <Signature />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
