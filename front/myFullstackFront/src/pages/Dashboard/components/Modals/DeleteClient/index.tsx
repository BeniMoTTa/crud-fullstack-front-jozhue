import Modals from "../../../../components/Modals";

import { StyledModalClientDelete } from "./style";
import { Client } from "../../../../../providers/ClientProvider";
import { api } from "../../../../../services/api";
import { useNavigate } from "react-router-dom";

interface ModalDeleteContact {
  toggleModalDeleteClient: () => void;
  client: Client | undefined;
}

const ModalDeleteClient = ({
  toggleModalDeleteClient,
  client,
}: ModalDeleteContact) => {
  const navigate = useNavigate();
  const idClient = localStorage.getItem("@IDClient:ID");

  const deleteClient = async () => {
    try {
      await api.delete(`client/${idClient}`);

      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modals toggleModal={toggleModalDeleteClient}>
      <StyledModalClientDelete>
        <h4 className="h4">
          <span className="client">{client?.clientName}</span>, do you really
          want to delete your account?
        </h4>
        <div>
          <button className="cancel" onClick={() => toggleModalDeleteClient()}>
            Cancel
          </button>
          <button
            className="confirm"
            onClick={() => {
              deleteClient();
              toggleModalDeleteClient();
              navigate("/");
            }}
          >
            Confirm
          </button>
        </div>
      </StyledModalClientDelete>
    </Modals>
  );
};

export default ModalDeleteClient;
