import { Logo } from "../../image/svg/Logo";
import { ContactBlock } from "../contactBlock/ContactBlock";
import { Navigation } from "../navigation/Navigation";
import "./Header.css";
import "../../ui/container.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__conteiner">
        <div className="header__wrapper--logoNavBlock">
          <Logo />
          <Navigation />
        </div>
        <ContactBlock />
      </div>
    </header>
  );
};
