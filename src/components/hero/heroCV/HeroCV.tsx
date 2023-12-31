import { NavLink } from "react-router-dom";
import "../../../ui/container.css";
import "../../../ui/textStyled.css";
import "./HeroCV.css";
import { SliderCV } from "../../sliderCV/SliderCV";
import CV from "../../../util/CV/CV.json";
import { toast } from "react-toastify";

interface Props {
  ID: string | undefined;
}

interface ProjectData {
  id: string;
  image: string[];
  info: string;
  titleHouse: string;
  buildGoal: string;
  modernGoal: string;
  location: string;
  client: string;
  architet: string;
  size: string;
  value: string;
  complete: string;
}

export const HeroCV = ({ ID }: Props) => {
  const projectInfo = CV.find((item) => item.id === ID);

  if (!projectInfo) {
    return <div>{toast.error("Project not found")}</div>;
  }

  const info: ProjectData = projectInfo;

  return (
    <section className="heroCV__section">
      <div className="container">
        <div className="heroCV__wraper--content">
          <p className="hero__link--text">
            <NavLink className="hero__link" to="/">
              Homepage
            </NavLink>
            <span className="hero__link--span">/</span>
            <NavLink className="hero__link" to="/Work">
              Work
            </NavLink>
            <span className="hero__link--span">/</span>
            {info.titleHouse}
          </p>
          <h1 className="heroCV__title heroTitle">{info.titleHouse}</h1>
        </div>
        <div className="heroCV__wrapper--slider">
          <SliderCV images={info.image} />
        </div>
        <div className="heroCV__wrapper--info">
          <div className="heroCV__wrapper--projectGoal">
            <h2 className="heroCV__projectGoal--title">Project goal</h2>
            <p className="heroCV__projectGoal--text">{info.buildGoal}</p>
            <p className="heroCV__projectGoal--text">{info.modernGoal}</p>
          </div>
          <div className="heroCV__info__card">
            <ul>
              <li className="heroCV__item">
                <p className="heroCV__item--text">LOCATION</p>
                <p className="heroCV__item--span">{info.location}</p>
              </li>
              <li className="heroCV__item">
                <p className="heroCV__item--text">CLIENT</p>
                <p className="heroCV__item--span">{info.client}</p>
              </li>
              <li className="heroCV__item">
                <p className="heroCV__item--text">ARCHITECT</p>
                <p className="heroCV__item--span">{info.architet}</p>
              </li>
              <li className="heroCV__item">
                <p className="heroCV__item--text">SIZE</p>
                <p className="heroCV__item--span">{info.size}</p>
              </li>
              <li className="heroCV__item">
                <p className="heroCV__item--text">VALUE</p>
                <p className="heroCV__item--span">{info.value}</p>
              </li>
              <li className="heroCV__item">
                <p className="heroCV__item--text">COMPLETED</p>
                <p className="heroCV__item--span">{info.complete}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
