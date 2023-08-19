import { ContactBlock } from "../contactBlock/ContactBlock";
import { Navigation } from "../navigation/Navigation";
import "./Header.css";
import "../../ui/container.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__conteiner">
        <div className="header__wrapper--logoNavBlock">
          <Navigation />
        </div>
        <ContactBlock />
      </div>
    </header>
  );
};
