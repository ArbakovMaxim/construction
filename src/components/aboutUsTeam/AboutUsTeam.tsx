import "../../ui/container.css";
import "./AboutUsTeam.css";
import { TeamCard } from "./teamCard/TeamCard";
import TeamFoto1 from "../../image/team1.jpg";
import TeamFoto2 from "../../image/team2.png";
import TeamFoto3 from "../../image/team3.png";
import TeamFoto4 from "../../image/team4.png";
import TeamFoto5 from "../../image/team5.png";
import TeamFoto6 from "../../image/team6.png";
import TeamFoto7 from "../../image/team7.png";
import TeamFoto8 from "../../image/team8.png";
import { NavLink } from "react-router-dom";

export const AboutUsTeam = () => {
  return (
    <section className="aboutUsTeam__section">
      <div className="container">
        <h2 className="aboutUsTeam__title">Our team</h2>
        <p className="aboutUsTeam__text">
          People are at the heart of Createx Construction Bureau
        </p>
        <ul className="aboutUsTeam__list">
          <li className="aboutUsTeam__item">
            <TeamCard
              image={TeamFoto1}
              name="Courtney Alexander"
              position="CEO, Co-Founder"
              alt="Foto Courtney Alexander"
            />
          </li>
          <li className="aboutUsTeam__item">
            <TeamCard
              image={TeamFoto2}
              name="Calvin Fox"
              position="CTO, Co-Founder"
              alt="Foto Calvin Fox"
            />
          </li>
          <li className="aboutUsTeam__item">
            <TeamCard
              image={TeamFoto3}
              name="Johnny Lane"
              position="Commercial Manager"
              alt="Foto Johnny Lane"
            />
          </li>
          <li className="aboutUsTeam__item">
            <TeamCard
              image={TeamFoto4}
              name="Diane Mccoy"
              position="Director of Human Resources"
              alt="Foto Diane Mccoy"
            />
          </li>
          <li className="aboutUsTeam__item">
            <TeamCard
              image={TeamFoto5}
              name="Judith Warren"
              position="Lead Accountant"
              alt="Foto Judith Warren"
            />
          </li>
          <li className="aboutUsTeam__item">
            <TeamCard
              image={TeamFoto6}
              name="Floyd Simmmons"
              position="Finacial Director"
              alt="Foto Floyd Simmmons"
            />
          </li>
          <li className="aboutUsTeam__item">
            <TeamCard
              image={TeamFoto7}
              name="Serenity Edwards"
              position="Director of Marketing"
              alt="Foto Serenity Edwards"
            />
          </li>
          <li className="aboutUsTeam__item">
            <TeamCard
              image={TeamFoto8}
              name="Shawn Edwards"
              position="Tech Lead"
              alt="Foto Shawn Edwards"
            />
          </li>
        </ul>
        <div className="aboutUsTeam__wrapper--link">
          <p className="aboutUsTeam__link--text">
            Become a part of the best team in the construction market of the
            USA.
          </p>
          <NavLink to="/Positions" className="aboutUsTeam__link">
            Available Positions
          </NavLink>
        </div>
      </div>
    </section>
  );
};
