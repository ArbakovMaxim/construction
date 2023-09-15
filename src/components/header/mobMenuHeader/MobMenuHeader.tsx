import { useEffect, useState } from "react";
import { ContactBlock } from "../../contactBlock/ContactBlock";
import { Navigation } from "../../navigation/Navigation";
import "./MobMenuHeader.css";
import { Close } from "../../../image/svg/Close";

interface Props {
  onClose: () => void;
}

export const MobMenuHeader = ({ onClose }: Props) => {
  const [isMenu, setIsMenu] = useState(false);
  useEffect(() => {
    document.body.classList.add("modal-open");
    setTimeout(() => {
      setIsMenu(true);
    }, 100);
    return () => {
      document.body.classList.remove("modal-open");
      setIsMenu(false);
    };
  }, []);

  return (
    <div className="mobMenuHeader__backdrop">
      <div className={`mobMenuHeader__wrapper ${isMenu ? "open" : ""}`}>
        <button
          className="mobMenuHeader__btn"
          type="button"
          onClick={() => {
            setIsMenu(false);
            setTimeout(() => {
              onClose();
            }, 300);
          }}
        >
          <Close />
        </button>
        <Navigation onClose={onClose} setIsMenu={setIsMenu} />
        <ContactBlock />
      </div>
    </div>
  );
};
