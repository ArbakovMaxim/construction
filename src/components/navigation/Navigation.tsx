import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useState } from "react";

export const Navigation = () => {
  const [navActive, setNavActive] = useState("AboutUs");

  return (
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
              navActive === "Work" ? "nav__link--active" : "nav__link--passive"
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
              navActive === "News" ? "nav__link--active" : "nav__link--passive"
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
  );
};
