import { createPortal } from "react-dom";
import { StyledModalCreate } from "./style";
import { useEffect, useRef } from "react";

interface ModalCreateProps {
  toggleModal: () => void;
}

const ModalCreateContact = ({ toggleModal }: ModalCreateProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return createPortal(
    <StyledModalCreate>
      <div ref={ref}></div>
    </StyledModalCreate>,
    document.body
  );
};

export default ModalCreateContact;
