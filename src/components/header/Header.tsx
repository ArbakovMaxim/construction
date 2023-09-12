import { ContactBlock } from "../contactBlock/ContactBlock";
import { Navigation } from "../navigation/Navigation";
import "./Header.css";
import ModalContainer from "../modalContainer/ModalContainer";
import "../../ui/container.css";
import { useResize } from "../../hook/useResize";
import { NavLink } from "react-router-dom";
import { Logo } from "../../image/svg/Logo";
import { useState } from "react";
import { BurgerBtn } from "../../image/svg/BurgerBtn";
import { MobMenuHeader } from "./mobMenuHeader/MobMenuHeader";

export const Header = () => {
  const { isScreenHero } = useResize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const OnClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__conteiner">
        <div className="nav__logo--wrapper">
          <Logo color="#1E212C" />
          <NavLink className="nav__logo--link" to="/" />
        </div>
        {isScreenHero ? (
          <>
            <div className="header__wrapper--logoNavBlock">
              <Navigation />
            </div>
            <ContactBlock />
          </>
        ) : (
          <div>
            <button
              className="header__Burger--btn"
              onClick={() => {
                setIsMenuOpen(true);
              }}
            >
              <BurgerBtn />
            </button>
          </div>
        )}
        {isMenuOpen && (
          <ModalContainer onClose={OnClose}>
            <MobMenuHeader onClose={OnClose} />
          </ModalContainer>
        )}
      </div>
    </header>
  );
};
