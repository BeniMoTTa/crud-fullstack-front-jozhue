import Modals from "../../../../components/Modals";

import { StyledModalDelete } from "./style";
import { api } from "../../../../../services/api";
import { Contact } from "../../../../../providers/ClientProvider";

interface ModalDeleteContact {
  toggleModalDelete: () => void;
  contact: Contact;
}

const ModalDeleteContact = ({
  toggleModalDelete,
  contact,
}: ModalDeleteContact) => {
  const deleteContact = async (id: string) => {
    try {
      const response = await api.delete(`contact/${id}`);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modals toggleModal={toggleModalDelete}>
      <StyledModalDelete>
        <h4 className="h4">
          Do you really want to delete{" "}
          <span className="contact">{contact.contactName}</span>?
        </h4>
        <div>
          <button className="cancel" onClick={() => toggleModalDelete()}>
            Cancel
          </button>
          <button
            className="confirm"
            onClick={() => {
              deleteContact(contact.id);
              toggleModalDelete();
              location.reload();
            }}
          >
            Confirm
          </button>
        </div>
      </StyledModalDelete>
    </Modals>
  );
};

export default ModalDeleteContact;
