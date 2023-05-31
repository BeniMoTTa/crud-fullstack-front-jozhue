import { useEffect, useState } from "react";
import Modals from "../../../../components/Modals";
import { contactData } from "../CreateContact/validator";
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
  const [infoContact, setInfoContact] = useState<Contact>();

  // const handleDeleteContact = async (id: string) => {
  //   await api.delete(`contact/${id}`);
  //   console.log(id);
  // };
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Modals toggleModal={toggleModalDelete}>
      <StyledModalDelete onClick={handleModalClick}>
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
            // onClick={() => handleDeleteContact(contact.id)}
          >
            Confirm
          </button>
        </div>
      </StyledModalDelete>
    </Modals>
  );
};

export default ModalDeleteContact;
