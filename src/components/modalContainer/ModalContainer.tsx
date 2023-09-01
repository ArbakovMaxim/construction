import { useEffect, ReactNode, useCallback } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal");

if (!modalRoot) {
  throw new Error('Element with id "modal" not found');
}

type ModalContainerProps = {
  children: ReactNode;
  onClose: () => void;
};

const ModalContainer = ({ children, onClose }: ModalContainerProps) => {
  // Close in backdrop
  const handleBackdropClick = useCallback(
    (e: MouseEvent) => {
      const backdrop = document.querySelector(".modal__backdrop");
      if (e.target === backdrop) {
        onClose();
      }
    },
    [onClose]
  );

  // Close in Esc
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    modalRoot?.addEventListener("click", handleBackdropClick);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      modalRoot?.removeEventListener("click", handleBackdropClick);
    };
  }, [handleKeyPress, handleBackdropClick]);

  return ReactDOM.createPortal(children, modalRoot!);
};

export default ModalContainer;
