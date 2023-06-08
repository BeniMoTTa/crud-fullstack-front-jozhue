import Modals from "../../../../components/Modals";
import { toast } from "react-toastify";
import { StyledModalDelete } from "./style";
import { api } from "../../../../../services/api";
import { Contact } from "../../../../../providers/ClientProvider";
import { useClient } from "../../../../../hooks/clientAuth";

interface ModalDeleteContact {
  toggleModalDelete: () => void;
  contact: Contact;
}

const ModalDeleteContact = ({
  toggleModalDelete,
  contact,
}: ModalDeleteContact) => {
  const { setContacts } = useClient();
  const deleteContact = async (id: string) => {
    try {
      await api.delete(`contact/${id}`);

      setContacts((prevContacts) => {
        return prevContacts.filter((elem) => elem.id !== id);
      });
      toast.success("The contact was successfully removed");
    } catch (err) {
      console.log(err);
      toast.error("There was a problem");
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
