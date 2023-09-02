import "./NewsCategories.css";
import "../../ui/container.css";
import { useState } from "react";

export const NewsCategories = () => {
  const [activ, setActiv] = useState("all");

  return (
    <section className="newsCategories__section">
      <div className="container">
        <h2 className="newsCategories__title">Categories</h2>
        <ul className="newsCategories__list">
          <li
            className={
              "newsCategories__item " +
              (activ === "all" ? "newsCategories__item--activ" : "")
            }
            onClick={() => {
              setActiv("all");
            }}
          >
            All News
          </li>
          <li
            className={
              "newsCategories__item " +
              (activ === "company" ? "newsCategories__item--activ" : "")
            }
            onClick={() => {
              setActiv("company");
            }}
          >
            Company News
          </li>
          <li
            className={
              "newsCategories__item " +
              (activ === "innovation" ? "newsCategories__item--activ" : "")
            }
            onClick={() => {
              setActiv("innovation");
            }}
          >
            Innovation
          </li>
          <li
            className={
              "newsCategories__item " +
              (activ === "industry" ? "newsCategories__item--activ" : "")
            }
            onClick={() => {
              setActiv("industry");
            }}
          >
            Industry News
          </li>
          <li
            className={
              "newsCategories__item " +
              (activ === "expert" ? "newsCategories__item--activ" : "")
            }
            onClick={() => {
              setActiv("expert");
            }}
          >
            Expert Tips
          </li>
          <li
            className={
              "newsCategories__item " +
              (activ === "marketing" ? "newsCategories__item--activ" : "")
            }
            onClick={() => {
              setActiv("marketing");
            }}
          >
            Marketing
          </li>
        </ul>
      </div>
    </section>
  );
};
