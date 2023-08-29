import "../../ui/container.css";
import { TeamCard } from "./teamCard/TeamCard";
import TeamFoto1 from "../../image/team1.jpg";

export const AboutUsTeam = () => {
  return (
    <section>
      <div className="container">
        <h2>Our team</h2>
        <p>People are at the heart of Createx Construction Bureau</p>
        <ul>
          <li>
            <TeamCard
              image={TeamFoto1}
              name="Courtney Alexander"
              position="CEO, Co-Founder"
              alt="Foto Courtney Alexander"
            />
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};
