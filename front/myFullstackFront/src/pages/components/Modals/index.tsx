import { createPortal } from "react-dom";

import { ReactNode, useEffect, useRef } from "react";
import { StyledModals } from "./style";

interface ModalsProps {
  toggleModal: () => void;
  blockClosing?: boolean;
  children: ReactNode;
}

const Modals = ({ toggleModal, children, blockClosing }: ModalsProps) => {
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
  }, [toggleModal]);

  return createPortal(
    <StyledModals>
      <div ref={blockClosing ? null : ref}>{children}</div>
    </StyledModals>,
    document.body
  );
};

export default Modals;
