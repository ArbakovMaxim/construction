import { ContactBlock } from "../contactBlock/ContactBlock";
import { Navigation } from "../navigation/Navigation";
import "./Header.css";
import "../../ui/container.css";
import { useResize } from "../../hook/useResize";
import { NavLink } from "react-router-dom";
import { Logo } from "../../image/svg/Logo";

export const Header = () => {
  const { isScreenHero } = useResize();
  console.log(isScreenHero);
  return (
    <header className="header">
      <div className="container header__conteiner">
        <div className="nav__logo--wrapper">
          <Logo color="#1E212C" />
          <NavLink className="nav__logo--link" to="/" />
        </div>
        {isScreenHero ? (
          <div className="header__wrapper--logoNavBlock">
            <Navigation />
          </div>
        ) : null}
        <ContactBlock />
      </div>
    </header>
  );
};
