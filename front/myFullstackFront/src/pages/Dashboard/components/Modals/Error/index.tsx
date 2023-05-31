import { ReactNode } from "react";
import Modals from "../../../../components/Modals";
import { useNavigate } from "react-router-dom";
import { StyledErrorModal } from "./style";

interface ModalError {
  toggleModal: () => void;
}

const ModalErrorAuthenticate = ({ toggleModal }: ModalError) => {
  const navigate = useNavigate();
  const handleCloseAndRedirect = () => {
    toggleModal();
    navigate("/");
  };

  return (
    <Modals toggleModal={toggleModal} blockClosing>
      <StyledErrorModal>
        <h3>Authentication is missing</h3>
        <button onClick={handleCloseAndRedirect}>Go back to login</button>
      </StyledErrorModal>
    </Modals>
  );
};

export default ModalErrorAuthenticate;
