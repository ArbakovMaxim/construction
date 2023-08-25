import "./ProjectConstructive.css";
import "../../ui/container.css";
import { Check } from "../../image/svg/Check";
import projectFoto from "../../image/projectConstructiveFoto.jpg";
import { ProjectSlider } from "../projectSlider/ProjectSlider";
import Homework from "../../util/Homework.json";

export const ProjectConstructive = () => {
  return (
    <>
      <section className="projectConstructive__section">
        <div className="container">
          <div className="projectConstructive__wrapper">
            <div className="projectConstructive__wrapper--img">
              <img
                className="projectConstructive__img"
                src={projectFoto}
                alt="work men"
              />
            </div>
            <div className="projectConstructive__wrapper--ul">
              <h2 className="projectConstructive__title">
                Constructive decisions
              </h2>
              <ul className="projectConstructive__list">
                <li className="projectConstructive__item">
                  <Check />
                  <p className="projectConstructive__item--text">
                    Vitae ultrices ornare eu sed in est quisque duis id.
                  </p>
                </li>
                <li className="projectConstructive__item">
                  <Check />
                  <p className="projectConstructive__item--text">
                    A fermentum in morbi pretium aliquam adipiscing donec
                    tempus.
                  </p>
                </li>
                <li className="projectConstructive__item">
                  <Check />
                  <p className="projectConstructive__item--text">
                    Mauris odio pellentesque commodo, diam.
                  </p>
                </li>
                <li className="projectConstructive__item">
                  <Check />
                  <p className="projectConstructive__item--text">
                    Mauris odio pellentesque commodo, diam.
                  </p>
                </li>
                <li className="projectConstructive__item">
                  <Check />
                  <p className="projectConstructive__item--text">
                    At pharetra libero blandit risus, fringilla sed commodo
                    diam.
                  </p>
                </li>
                <li className="projectConstructive__item">
                  <Check />
                  <p className="projectConstructive__item--text">
                    Integer ultricies viverra ut enim viverra ut.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="projectConstructive__section--slider">
        <div className="container">
          <ProjectSlider title="Similar projects" works={Homework} />
        </div>
      </section>
    </>
  );
};
