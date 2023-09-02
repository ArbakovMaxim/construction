import "./WorkProject.css";
import "../../ui/container.css";
import { useEffect, useState } from "react";
import { WorldItemProject } from "./FuncWordProject";
import { HomeLove } from "../../image/svg/HomeLove";
import { Construction } from "../../image/svg/Construction";
import { Plan } from "../../image/svg/Plan";
import { Panton } from "../../image/svg/Panton";
import { Paint } from "../../image/svg/Paint";
import { CardWork } from "../cardWork/CardWork";
import Works18 from "../../util/Homework--18.json";
import Works from "../../util/Homework.json";
import ConstructionJson from "../../util/Construction.json";
import InteriorWork from "../../util/InteriorWork.json";
import Project from "../../util/Project.json";
import { LoadMore } from "../../image/svg/LoadMore";

interface Work {
  image: string;
  title: string;
  text: string;
  id: string;
}

export const WorkProject = () => {
  const [activ, setActiv] = useState("all");
  const [json, setJson] = useState<Work[]>([]);
  const [visibleItems, setVisibleItems] = useState(9);

  useEffect(() => {
    if (activ === "all") {
      setJson(Works18);
    }
    if (activ === "Construction") {
      setJson(ConstructionJson);
    }
    if (activ === "Project Development") {
      setJson(Project);
    }
    if (activ === "Interior Design") {
      setJson(InteriorWork);
    }
    if (activ === "Repairs") {
      setJson(Works);
    }
  }, [activ]);

  const loadMore = () => {
    setVisibleItems((prevCount) => prevCount + 3);
  };

  return (
    <section className="workProject__section">
      <div className="container">
        <ul className="workProject__list">
          <li
            className="workProject__item"
            onClick={() => {
              setActiv("all");
            }}
          >
            <WorldItemProject
              icon={HomeLove}
              text="All Projects"
              className={activ === "all" ? "workProject__wrapper--active" : ""}
              activ={activ === "all"}
            />
          </li>
          <li
            className="workProject__item"
            onClick={() => {
              setActiv("Construction");
            }}
          >
            <WorldItemProject
              icon={Construction}
              text="Construction"
              className={
                activ === "Construction" ? "workProject__wrapper--active" : ""
              }
              activ={activ === "Construction"}
            />
          </li>
          <li
            className="workProject__item"
            onClick={() => {
              setActiv("Project Development");
            }}
          >
            <WorldItemProject
              icon={Plan}
              text="Project Development"
              className={
                activ === "Project Development"
                  ? "workProject__wrapper--active"
                  : ""
              }
              activ={activ === "Project Development"}
            />
          </li>
          <li
            className="workProject__item"
            onClick={() => {
              setActiv("Interior Design");
            }}
          >
            <WorldItemProject
              icon={Panton}
              text="Interior Design"
              className={
                activ === "Interior Design"
                  ? "workProject__wrapper--active"
                  : ""
              }
              activ={activ === "Interior Design"}
            />
          </li>
          <li
            className="workProject__item"
            onClick={() => {
              setActiv("Repairs");
            }}
          >
            <WorldItemProject
              icon={Paint}
              text="Repairs"
              className={
                activ === "Repairs" ? "workProject__wrapper--active" : ""
              }
              activ={activ === "Repairs"}
            />
          </li>
        </ul>
        <div className="workProject__wrapper--outlet">
          <ul className="workProject__ListWork">
            {json.slice(0, visibleItems).map((work, index) => (
              <li key={index} className="workProject__ItemWork">
                <CardWork
                  backgroundImage={work.image}
                  title={work.title}
                  text={work.text}
                  id={work.id}
                />
              </li>
            ))}
          </ul>

          <div className="workProject__wrapper--button">
            {visibleItems < json.length && (
              <button className="workProject__button" onClick={loadMore}>
                <LoadMore />
                <span className="workProject__span--button">Load more</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
