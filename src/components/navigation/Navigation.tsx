import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useState } from "react";
import { Logo } from "../../image/svg/Logo";

export const Navigation = () => {
  const [navActive, setNavActive] = useState("home");

  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setNavActive("home");
        }}
      >
        <Logo color="#1E212C" />
        <NavLink to="/" />
      </div>
      <nav>
        <ul className="nav__list">
          <li
            onClick={() => {
              setNavActive("AboutUs");
            }}
          >
            <NavLink
              className={
                navActive === "AboutUs"
                  ? "nav__link--active"
                  : "nav__link--passive"
              }
              to="/"
            >
              About Us
            </NavLink>
          </li>
          <li
            className="nav__item"
            onClick={() => {
              setNavActive("Services");
            }}
          >
            <NavLink
              className={
                navActive === "Services"
                  ? "nav__link--active"
                  : "nav__link--passive"
              }
              to="/"
            >
              Services
            </NavLink>
          </li>
          <li
            className="nav__item"
            onClick={() => {
              setNavActive("Work");
            }}
          >
            <NavLink
              className={
                navActive === "Work"
                  ? "nav__link--active"
                  : "nav__link--passive"
              }
              to="/"
            >
              Work
            </NavLink>
          </li>
          <li
            className="nav__item"
            onClick={() => {
              setNavActive("News");
            }}
          >
            <NavLink
              className={
                navActive === "News"
                  ? "nav__link--active"
                  : "nav__link--passive"
              }
              to="/"
            >
              News
            </NavLink>
          </li>
          <li
            className="nav__item"
            onClick={() => {
              setNavActive("Contacts");
            }}
          >
            <NavLink
              className={
                navActive === "Contacts"
                  ? "nav__link--active"
                  : "nav__link--passive"
              }
              to="/"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
